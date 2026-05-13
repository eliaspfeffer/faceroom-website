export const dynamic = "force-dynamic";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmail(s: unknown): s is string {
  return typeof s === "string" && s.length <= 254 && EMAIL_RE.test(s);
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const obj = (body ?? {}) as Record<string, unknown>;

  // Honeypot: bots tend to fill every visible field. Pretend success.
  if (typeof obj.website === "string" && obj.website.length > 0) {
    return Response.json({ ok: true });
  }

  const email = obj.email;
  if (!isEmail(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  const record = {
    email: email.trim().toLowerCase(),
    source: typeof obj.source === "string" ? obj.source.slice(0, 64) : "pricing",
    createdAt: new Date().toISOString(),
    userAgent: request.headers.get("user-agent")?.slice(0, 200) ?? null,
    referer: request.headers.get("referer")?.slice(0, 200) ?? null,
  };

  // Always log so signups surface in Vercel logs even before WAITLIST_WEBHOOK_URL is configured.
  console.log("[waitlist]", JSON.stringify(record));

  const webhookUrl = process.env.WAITLIST_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
    } catch (err) {
      console.error("[waitlist] webhook delivery failed", err);
    }
  }

  return Response.json({ ok: true });
}
