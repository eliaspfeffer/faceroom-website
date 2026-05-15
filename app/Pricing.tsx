"use client";

import { useState } from "react";
import {
  FREE_ROOM_CAP,
  PRICING,
  TEAM_ROOM_CAP,
  annualPerSeat,
} from "./config";

function CheckIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--accent)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function FeatureLi({ children }: { children: React.ReactNode }) {
  return (
    <li
      style={{
        display: "flex",
        gap: 10,
        alignItems: "flex-start",
        fontSize: 14,
        color: "var(--text-secondary)",
        lineHeight: 1.55,
        fontWeight: 300,
      }}
    >
      <span style={{ flexShrink: 0, paddingTop: 4 }}>
        <CheckIcon />
      </span>
      <span>{children}</span>
    </li>
  );
}

function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "ok" | "error">(
    "idle"
  );

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting" || status === "ok") return;
    setStatus("submitting");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, website, source: "pricing" }),
      });
      if (!res.ok) {
        setStatus("error");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div
        role="status"
        aria-live="polite"
        style={{
          padding: "14px 16px",
          borderRadius: 10,
          border: "1px solid rgba(74,222,128,0.4)",
          background: "rgba(74,222,128,0.08)",
          color: "var(--text-primary)",
          fontSize: 14,
          fontWeight: 400,
          lineHeight: 1.5,
        }}
      >
        You&apos;re on the list. We&apos;ll email you the moment team accounts
        open.
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        autoComplete="off"
        tabIndex={-1}
        aria-hidden
        style={{
          position: "absolute",
          left: -9999,
          width: 1,
          height: 1,
          opacity: 0,
        }}
      />
      <div
        style={{
          display: "flex",
          gap: 8,
          flexWrap: "wrap",
          alignItems: "stretch",
        }}
      >
        <input
          type="email"
          required
          placeholder="you@yourcompany.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Work email"
          autoComplete="email"
          style={{
            flex: "1 1 200px",
            minWidth: 0,
            padding: "12px 14px",
            background: "rgba(255,255,255,0.04)",
            border: "1px solid var(--border)",
            borderRadius: 10,
            color: "var(--text-primary)",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: 14,
            fontWeight: 400,
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={status === "submitting"}
          className="btn-primary"
          style={{
            cursor: status === "submitting" ? "wait" : "pointer",
            opacity: status === "submitting" ? 0.7 : 1,
          }}
        >
          {status === "submitting" ? "Adding…" : "Join the waitlist"}
        </button>
      </div>
      {status === "error" && (
        <p
          role="alert"
          style={{
            marginTop: 10,
            fontSize: 13,
            color: "#f59e7c",
            fontWeight: 400,
          }}
        >
          Something went wrong. Try again in a moment.
        </p>
      )}
      <p
        style={{
          marginTop: 12,
          fontSize: 12,
          color: "var(--text-tertiary)",
          fontWeight: 300,
          lineHeight: 1.5,
        }}
      >
        We&apos;ll email you when team accounts open. No newsletter, no spam.
      </p>
    </form>
  );
}

function Card({
  children,
  highlighted = false,
}: {
  children: React.ReactNode;
  highlighted?: boolean;
}) {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: 18,
        padding: "32px 28px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
        borderColor: highlighted
          ? "rgba(232,168,124,0.5)"
          : "var(--border)",
        boxShadow: highlighted
          ? "0 0 0 1px rgba(232,168,124,0.3), 0 24px 64px rgba(232,168,124,0.05)"
          : undefined,
      }}
    >
      {children}
    </div>
  );
}

export default function Pricing() {
  const annual = annualPerSeat(
    PRICING.team.seatPriceMonthly,
    PRICING.team.annualDiscountPct
  );

  return (
    <section
      id="pricing"
      style={{
        position: "relative",
        zIndex: 1,
        padding: "100px 24px",
        maxWidth: 980,
        margin: "0 auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <div
          style={{
            fontSize: 11,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--text-tertiary)",
            marginBottom: 16,
            fontWeight: 400,
          }}
        >
          Pricing
        </div>
        <h2
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(28px, 4vw, 44px)",
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          Free for friends.
          <br />
          <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
            Built for teams.
          </em>
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        <Card>
          <div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 22,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: 6,
              }}
            >
              Free
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.55,
                fontWeight: 300,
              }}
            >
              For friends and solo workers getting started.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 4,
              fontFamily: "'DM Serif Display', serif",
            }}
          >
            <span
              style={{
                fontSize: 40,
                color: "var(--text-primary)",
                letterSpacing: "-0.03em",
              }}
            >
              $0
            </span>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "var(--text-tertiary)",
                fontWeight: 300,
              }}
            >
              forever
            </span>
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              flexGrow: 1,
            }}
          >
            <FeatureLi>Mac and Windows download</FeatureLi>
            <FeatureLi>Up to {FREE_ROOM_CAP} people per room</FeatureLi>
            <FeatureLi>Walkie-talkie push-to-talk audio</FeatureLi>
            <FeatureLi>No accounts, no sign-in</FeatureLi>
          </ul>

          <a
            href="https://github.com/eliaspfeffer/faceroom/releases/latest/download/Faceroom.dmg"
            className="btn-secondary"
            style={{ justifyContent: "center", cursor: "pointer" }}
          >
            Download free
          </a>
        </Card>

        <Card highlighted>
          <div>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "4px 10px",
                borderRadius: 99,
                background: "var(--accent-dim)",
                border: "1px solid rgba(232,168,124,0.3)",
                fontSize: 11,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--accent)",
                fontWeight: 400,
                marginBottom: 14,
              }}
            >
              For distributed teams
            </div>
            <div
              style={{
                fontFamily: "'DM Serif Display', serif",
                fontSize: 22,
                color: "var(--text-primary)",
                letterSpacing: "-0.02em",
                marginBottom: 6,
              }}
            >
              Team
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--text-secondary)",
                lineHeight: 1.55,
                fontWeight: 300,
              }}
            >
              For remote teams that want to feel like one every day.
            </p>
          </div>

          <div>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: 4,
                fontFamily: "'DM Serif Display', serif",
              }}
            >
              <span
                style={{
                  fontSize: 40,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.03em",
                }}
              >
                ${PRICING.team.seatPriceMonthly}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "var(--text-tertiary)",
                  fontWeight: 300,
                }}
              >
                /seat/mo
              </span>
            </div>
            <p
              style={{
                marginTop: 6,
                fontSize: 13,
                color: "var(--text-secondary)",
                fontWeight: 300,
              }}
            >
              ${annual}/seat/mo, billed yearly (
              {PRICING.team.annualDiscountPct}% off)
            </p>
          </div>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              flexGrow: 1,
            }}
          >
            <FeatureLi>Everything in Free</FeatureLi>
            <FeatureLi>
              Persistent named rooms with shareable invite links
            </FeatureLi>
            <FeatureLi>Up to {TEAM_ROOM_CAP} people per room</FeatureLi>
            <FeatureLi>14-day trial, card required</FeatureLi>
            <FeatureLi>Priority support</FeatureLi>
          </ul>

          <WaitlistForm />
        </Card>
      </div>

      <p
        style={{
          textAlign: "center",
          marginTop: 32,
          fontSize: 12,
          color: "var(--text-tertiary)",
          fontWeight: 300,
        }}
      >
        Team accounts open soon. Join the waitlist above to be first in.
      </p>
    </section>
  );
}
