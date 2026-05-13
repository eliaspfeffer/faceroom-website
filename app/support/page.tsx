import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Faceroom — troubleshooting, permissions, contact, and answers to common questions.",
  alternates: { canonical: "https://faceroom.eliaspfeffer.de/support" },
};

const SUPPORT_EMAIL = "support@faceroom.eliaspfeffer.de";

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ marginBottom: 40 }}>
      <h2
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 22,
          color: "var(--text-primary)",
          letterSpacing: "-0.02em",
          marginBottom: 14,
        }}
      >
        {title}
      </h2>
      <div
        style={{
          fontSize: 15,
          color: "var(--text-secondary)",
          lineHeight: 1.7,
          fontWeight: 300,
        }}
      >
        {children}
      </div>
    </section>
  );
}

function FAQ({ q, a }: { q: string; a: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 18 }}>
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 15,
          color: "var(--text-primary)",
          fontWeight: 500,
          marginBottom: 6,
        }}
      >
        {q}
      </div>
      <div
        style={{
          fontSize: 14,
          color: "var(--text-secondary)",
          lineHeight: 1.65,
          fontWeight: 300,
        }}
      >
        {a}
      </div>
    </div>
  );
}

export default function SupportPage() {
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 40px",
          background: "rgba(13,13,15,0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 18,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            textDecoration: "none",
          }}
        >
          Faceroom
        </Link>
        <Link
          href="/"
          style={{
            fontSize: 13,
            color: "var(--text-secondary)",
            textDecoration: "none",
          }}
        >
          Home
        </Link>
      </nav>

      <main
        style={{
          maxWidth: 720,
          margin: "0 auto",
          padding: "140px 24px 120px",
          position: "relative",
          zIndex: 1,
        }}
      >
        <h1
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
            marginBottom: 16,
          }}
        >
          Support
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "var(--text-secondary)",
            lineHeight: 1.6,
            fontWeight: 300,
            marginBottom: 48,
          }}
        >
          Hi — thanks for using Faceroom. If something isn&apos;t working, the
          fastest way to get help is to email us. We read every message and
          reply within one business day.
        </p>

        <Section title="Contact">
          <p style={{ marginBottom: 8 }}>
            Email:{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              {SUPPORT_EMAIL}
            </a>
          </p>
          <p>
            Please include your macOS version, Faceroom version (Settings →
            About), and a short description of what you tried.
          </p>
        </Section>

        <Section title="Common issues">
          <FAQ
            q="The microphone button doesn't seem to do anything."
            a={
              <>
                Click the mic button once to toggle the microphone on, then
                click again to turn it off. You can also press and hold to talk
                only while held (walkie-talkie style). The button turns orange
                while the mic is live. If it stays gray, open{" "}
                <strong>System Settings → Privacy & Security → Microphone</strong>{" "}
                and make sure Faceroom is allowed.
              </>
            }
          />
          <FAQ
            q="Camera permission was denied — how do I re-enable it?"
            a={
              <>
                Open <strong>System Settings → Privacy & Security → Camera</strong>{" "}
                and toggle Faceroom on. Restart Faceroom after changing the
                permission. Faceroom uses your camera to show your tile to
                others in the room; it never records or stores video.
              </>
            }
          />
          <FAQ
            q="How do I quit Faceroom?"
            a={
              <>
                Click the Faceroom icon in your menu bar (top-right of the
                screen) and choose <strong>Quit Faceroom</strong>. You can also
                right-click the floating strip and choose Quit, or click the
                red close button in the top-left of the strip to hide it.
              </>
            }
          />
          <FAQ
            q="The floating strip disappeared — how do I bring it back?"
            a={
              <>
                Click the Faceroom icon in the menu bar and choose{" "}
                <strong>Show Faceroom</strong>.
              </>
            }
          />
          <FAQ
            q="How do I change the size or opacity of the strip?"
            a={
              <>
                From the menu bar icon, choose <strong>Settings…</strong>.
                There are sliders for opacity and scale. Changes apply
                instantly — no restart needed.
              </>
            }
          />
          <FAQ
            q="How do I check for updates?"
            a={
              <>
                From the menu bar icon, choose{" "}
                <strong>Check for Updates…</strong>. Faceroom also checks
                automatically in the background.
              </>
            }
          />
          <FAQ
            q="Does Faceroom record or store my video or audio?"
            a={
              <>
                No. Faceroom uses peer-to-peer live media via LiveKit; nothing
                is recorded, transcribed, or stored on a server.
              </>
            }
          />
        </Section>

        <Section title="System requirements">
          <ul style={{ paddingLeft: 18, lineHeight: 1.8 }}>
            <li>macOS 13 (Ventura) or later</li>
            <li>Apple Silicon or Intel</li>
            <li>Built-in or external camera and microphone</li>
            <li>A working internet connection</li>
          </ul>
        </Section>

        <Section title="Privacy">
          <p>
            Faceroom is designed to be private by default. We collect no
            personal data, require no account, and store no video or audio.
            See the{" "}
            <Link
              href="/"
              style={{ color: "var(--accent)", textDecoration: "none" }}
            >
              homepage
            </Link>{" "}
            for product details.
          </p>
        </Section>
      </main>

      <footer
        style={{
          position: "relative",
          zIndex: 1,
          padding: "32px 40px",
          borderTop: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 15,
            color: "var(--text-tertiary)",
            letterSpacing: "-0.02em",
            textDecoration: "none",
          }}
        >
          Faceroom
        </Link>
        <a
          href={`mailto:${SUPPORT_EMAIL}`}
          style={{
            fontSize: 12,
            color: "var(--text-tertiary)",
            textDecoration: "none",
          }}
        >
          {SUPPORT_EMAIL}
        </a>
      </footer>
    </div>
  );
}
