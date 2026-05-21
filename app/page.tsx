"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Pricing from "./Pricing";

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div
      className="glass-card"
      style={{
        borderRadius: 16,
        padding: "28px 28px",
      }}
    >
      <div
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "var(--accent-dim)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 16,
          border: "1px solid rgba(232,168,124,0.2)",
        }}
      >
        {icon}
      </div>
      <div
        style={{
          fontFamily: "'DM Serif Display', serif",
          fontSize: 17,
          color: "var(--text-primary)",
          marginBottom: 8,
          letterSpacing: "-0.02em",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 14,
          color: "var(--text-secondary)",
          lineHeight: 1.6,
          fontWeight: 300,
        }}
      >
        {description}
      </div>
    </div>
  );
}

function StepItem({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 20,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: "50%",
          background: "var(--bg-glass)",
          border: "1px solid var(--border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'DM Serif Display', serif",
          fontSize: 20,
          color: "var(--accent)",
          letterSpacing: "-0.02em",
          flexShrink: 0,
        }}
      >
        {number}
      </div>
      <div>
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 19,
            color: "var(--text-primary)",
            marginBottom: 10,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </div>
        <div
          style={{
            fontSize: 14,
            color: "var(--text-secondary)",
            lineHeight: 1.65,
            fontWeight: 300,
            maxWidth: 220,
            margin: "0 auto",
          }}
        >
          {description}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  const [heroReady, setHeroReady] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Nav */}
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
          borderBottom: "1px solid transparent",
          background: "rgba(13,13,15,0.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 18,
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
          }}
        >
          Faceroom
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <a
            href="#pricing"
            style={{
              fontSize: 13,
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 400,
              transition: "color 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            Pricing
          </a>
          <span
            title="Coming soon — sign in is part of the upcoming team plan."
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "var(--text-tertiary)",
              fontWeight: 400,
              cursor: "default",
            }}
          >
            Sign in
            <span
              style={{
                padding: "2px 6px",
                fontSize: 10,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
                color: "var(--accent)",
                background: "var(--accent-dim)",
                border: "1px solid rgba(232,168,124,0.25)",
                borderRadius: 6,
                fontWeight: 500,
              }}
            >
              Soon
            </span>
          </span>
          <a
            href="https://github.com/eliaspfeffer/faceroom"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              color: "var(--text-secondary)",
              textDecoration: "none",
              fontWeight: 400,
              transition: "color 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "var(--text-primary)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 24px 80px",
          textAlign: "center",
          overflow: "hidden",
          zIndex: 1,
        }}
      >
        {/* Subtle grid pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />
        {/* Gradient fade overlay on grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, var(--bg) 100%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ position: "relative", maxWidth: 780, width: "100%" }}>
          {/* Badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 99,
              background: "var(--accent-dim)",
              border: "1px solid rgba(232,168,124,0.25)",
              marginBottom: 36,
              opacity: heroReady ? 1 : 0,
              transition: "opacity 0.6s ease",
              transitionDelay: "0.1s",
            }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                background: "var(--accent)",
                animation: "statusBlink 2s ease-in-out infinite",
              }}
            />
            <span
              style={{
                fontSize: 12,
                color: "var(--accent)",
                fontWeight: 400,
                letterSpacing: "0.04em",
                textTransform: "uppercase",
              }}
            >
              Coworking for distributed teams
            </span>
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontSize: "clamp(42px, 7vw, 76px)",
              color: "var(--text-primary)",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
              marginBottom: 24,
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "0.2s",
            }}
          >
            See your team
            <br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--accent)",
              }}
            >
              while you work.
            </em>
          </h1>

          {/* Screenshot preview */}
          <div
            className="bar-float"
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: 48,
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(30px)",
              transition: "opacity 1s ease, transform 1s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "0.35s",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.1), 0 32px 80px rgba(0,0,0,0.7), 0 8px 24px rgba(0,0,0,0.5)",
              }}
            >
              <Image
                src="/screenshot.png"
                alt="Faceroom — floating video strip with four people"
                width={560}
                height={160}
                priority
                style={{
                  display: "block",
                  maxWidth: "min(560px, 90vw)",
                  height: "auto",
                  borderRadius: 20,
                }}
              />
              {/* Subtle glow beneath */}
              <div
                style={{
                  position: "absolute",
                  bottom: -24,
                  left: "10%",
                  right: "10%",
                  height: 40,
                  background: "rgba(232,168,124,0.15)",
                  filter: "blur(20px)",
                  borderRadius: "50%",
                  pointerEvents: "none",
                }}
              />
            </div>
          </div>

          {/* Subheadline */}
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              lineHeight: 1.65,
              maxWidth: 520,
              margin: "0 auto 40px",
              fontWeight: 300,
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "0.55s",
            }}
          >
            Faceroom is a floating video strip that sits in the corner of
            every teammate&apos;s screen. No calendar invites. No meeting
            links. Hold the mic to talk. Just open it together and work.
          </p>

          {/* Buttons */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              justifyContent: "center",
              opacity: heroReady ? 1 : 0,
              transform: heroReady ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.16,1,0.3,1)",
              transitionDelay: "0.7s",
            }}
          >
            <a
              href="https://github.com/eliaspfeffer/faceroom/releases/latest/download/Faceroom.dmg"
              className="btn-primary"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Download for Mac
            </a>
            <span
              className="btn-secondary"
              title="Windows build is in progress. Faceroom is macOS-only today."
              style={{ cursor: "default", opacity: 0.7 }}
            >
              <svg width="16" height="16" viewBox="0 0 88 88" fill="currentColor" aria-hidden="true">
                <path d="M0 12.4L35.7 7.5v34.5H0zM40 6.9L87.3 0v42H40zM0 46h35.7v34.5L0 75.6zM40 46.5h47.3V88L40 81.1z" />
              </svg>
              Windows
              <span
                style={{
                  padding: "2px 6px",
                  fontSize: 10,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  background: "var(--accent-dim)",
                  border: "1px solid rgba(232,168,124,0.25)",
                  borderRadius: 6,
                  fontWeight: 500,
                }}
              >
                Soon
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "100px 24px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            How it works
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
            From lonely to connected
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>in three seconds.</em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            alignItems: "start",
          }}
        >
          <StepItem
            number="1"
            title="Open the app"
            description="Launch Faceroom. Your camera turns on automatically. No setup, no sign-in screen."
          />
          <StepItem
            number="2"
            title="You appear instantly"
            description="Your tile shows up in everyone else's floating bar. They see you; you see them."
          />
          <StepItem
            number="3"
            title="Hold to talk"
            description="Press and hold the mic button for walkie-talkie audio. Release to go quiet again."
          />
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          borderTop: "1px solid var(--border)",
        }}
      />

      {/* Features */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "100px 24px",
          maxWidth: 900,
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
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
            Features
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
            Built for remote teams
            <br />
            <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
              who still want to feel like one.
            </em>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 16,
          }}
        >
          <FeatureCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            }
            title="No accounts"
            description="Open and you're in. No email, no sign-up, no password. Share the app with a friend and you're instantly together."
          />
          <FeatureCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            }
            title="Zero setup"
            description="Download, open, done. The whole setup is exactly that long."
          />
          <FeatureCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              </svg>
            }
            title="Walkie-talkie audio"
            description="Hold to talk. Everyone else stays muted. Perfect for quick questions without interrupting flow."
          />
          <FeatureCard
            icon={
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
              </svg>
            }
            title="Always on top"
            description="The bar floats above everything — your code, your docs, your browser. A constant reminder that you're not working alone."
          />
        </div>
      </section>

      {/* Divider */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          borderTop: "1px solid var(--border)",
        }}
      />

      {/* Pricing */}
      <Pricing />

      {/* Divider */}
      <div
        style={{
          maxWidth: 800,
          margin: "0 auto",
          padding: "0 24px",
          borderTop: "1px solid var(--border)",
        }}
      />

      {/* CTA */}
      <section
        style={{
          position: "relative",
          zIndex: 1,
          padding: "100px 24px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: "clamp(26px, 3.5vw, 40px)",
            color: "var(--text-primary)",
            letterSpacing: "-0.03em",
            marginBottom: 12,
            lineHeight: 1.15,
          }}
        >
          Bring your team into the room.
        </div>
        <p
          style={{
            fontSize: 15,
            color: "var(--text-secondary)",
            marginBottom: 40,
            fontWeight: 300,
          }}
        >
          Download Faceroom and open it together. No meeting links, no
          calendar invites.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="https://github.com/eliaspfeffer/faceroom/releases/latest/download/Faceroom.dmg"
            className="btn-primary"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download for Mac
          </a>
          <a
            href="https://github.com/eliaspfeffer/faceroom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ cursor: "pointer" }}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
            View on GitHub
          </a>
        </div>
      </section>

      {/* Footer */}
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
        <div
          style={{
            fontFamily: "'DM Serif Display', serif",
            fontSize: 15,
            color: "var(--text-tertiary)",
            letterSpacing: "-0.02em",
          }}
        >
          Faceroom
        </div>
        <div
          style={{
            display: "flex",
            gap: 24,
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: 12,
              color: "var(--text-tertiary)",
              fontWeight: 300,
            }}
          >
            MIT License
          </span>
          <a
            href="https://github.com/eliaspfeffer/faceroom"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontSize: 12,
              color: "var(--text-tertiary)",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.color = "var(--text-secondary)")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.color = "var(--text-tertiary)")
            }
          >
            GitHub
          </a>
        </div>
      </footer>
    </div>
  );
}
