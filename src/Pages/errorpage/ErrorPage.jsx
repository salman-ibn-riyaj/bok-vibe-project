import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Syne:wght@800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Generate floating particles
    const container = document.getElementById("particles-404");
    if (!container) return;

    const colors = [
      "rgba(99,102,241,0.65)",
      "rgba(236,72,153,0.5)",
      "rgba(34,197,94,0.4)",
      "rgba(255,255,255,0.18)",
    ];

    const styleTag = document.createElement("style");
    let keyframes = "";

    for (let i = 0; i < 35; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const dur = Math.random() * 15 + 8;
      const delay = Math.random() * -25;
      const drift = (Math.random() - 0.5) * 90;
      const color = colors[Math.floor(Math.random() * colors.length)];

      keyframes += `
        @keyframes floatUp404_${i} {
          0%   { transform: translateY(0) translateX(0); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.5; }
          100% { transform: translateY(-110vh) translateX(${drift}px); opacity: 0; }
        }
      `;

      const p = document.createElement("div");
      p.style.cssText = `
        position: absolute;
        border-radius: 50%;
        width: ${size}px;
        height: ${size}px;
        left: ${x}%;
        bottom: -10px;
        background: ${color};
        animation: floatUp404_${i} ${dur}s ${delay}s linear infinite;
        pointer-events: none;
      `;
      container.appendChild(p);
    }

    styleTag.textContent = keyframes;
    document.head.appendChild(styleTag);

    return () => {
      // Cleanup on unmount
      if (container) container.innerHTML = "";
      document.head.removeChild(styleTag);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes gridShift {
          0%   { transform: translateY(0); }
          100% { transform: translateY(40px); }
        }
        @keyframes orbPulse {
          0%, 100% { transform: scale(1);    opacity: 0.22; }
          50%       { transform: scale(1.12); opacity: 0.32; }
        }
        @keyframes flicker {
          0%, 89%, 93%, 95%, 100% { opacity: 1; }
          90%, 94%                 { opacity: 0.55; }
          92%                      { opacity: 0.8; }
        }
        @keyframes barGlitch {
          0%, 84%, 100% { width: 60px;  background: #6366f1; }
          86%            { width: 130px; background: #ec4899; }
          88%            { width: 40px;  background: #6366f1; }
        }
        @keyframes scanSweep {
          0%   { opacity: 0; transform: translateX(-100%); }
          50%  { opacity: 1; }
          100% { opacity: 0; transform: translateX(100%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }

        .nf-error-code {
          font-family: 'Syne', sans-serif;
          font-size: clamp(110px, 22vw, 200px);
          font-weight: 800;
          line-height: 1;
          color: transparent;
          -webkit-text-stroke: 2px rgba(99,102,241,0.65);
          position: relative;
          letter-spacing: -8px;
          animation: flicker 6s infinite;
          user-select: none;
        }
        .nf-error-code::before {
          content: '404';
          position: absolute;
          inset: 0;
          color: transparent;
          -webkit-text-stroke: 2px rgba(236,72,153,0.35);
          transform: translate(5px, 5px);
          z-index: -1;
        }
        .nf-glitch-bar {
          display: block;
          background: #6366f1;
          height: 4px;
          width: 60px;
          margin: 0.4rem auto 1.6rem;
          animation: barGlitch 3s infinite;
        }
        .nf-terminal-box {
          background: rgba(99,102,241,0.06);
          border: 1px solid rgba(99,102,241,0.28);
          border-radius: 10px;
          padding: 1.4rem 1.75rem;
          margin-bottom: 2rem;
          text-align: left;
          position: relative;
          overflow: hidden;
        }
        .nf-terminal-box::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, #6366f1, transparent);
          animation: scanSweep 3s linear infinite;
        }
        .nf-cursor {
          display: inline-block;
          width: 8px;
          height: 13px;
          background: #818cf8;
          vertical-align: middle;
          margin-left: 3px;
          animation: blink 1s step-end infinite;
        }
        .nf-btn-primary {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          padding: 13px 30px;
          border-radius: 6px;
          cursor: pointer;
          border: none;
          background: #6366f1;
          color: #ffffff;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
          text-decoration: none;
        }
        .nf-btn-primary:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(99,102,241,0.45);
        }
        .nf-btn-ghost {
          font-family: 'Space Mono', monospace;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.6px;
          text-transform: uppercase;
          padding: 13px 30px;
          border-radius: 6px;
          cursor: pointer;
          background: transparent;
          color: rgba(255,255,255,0.45);
          border: 1px solid rgba(255,255,255,0.14);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: transform 0.2s, border-color 0.2s, color 0.2s;
          text-decoration: none;
        }
        .nf-btn-ghost:hover {
          border-color: rgba(99,102,241,0.5);
          color: #ffffff;
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .nf-btn-row { flex-direction: column !important; align-items: center; }
          .nf-btn-primary, .nf-btn-ghost { width: 220px; justify-content: center; }
          .nf-terminal-box { padding: 1rem 1.2rem; }
        }
      `}</style>

      {/* Page wrapper */}
      <div
        style={{
          minHeight: "100vh",
          background: "#0a0a0f",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'Space Mono', monospace",
          overflow: "hidden",
          position: "relative",
          padding: "2rem",
        }}
      >
        {/* Animated grid */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            animation: "gridShift 8s linear infinite",
            zIndex: 0,
          }}
        />

        {/* CRT scanlines */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            background:
              "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.12) 2px, rgba(0,0,0,0.12) 4px)",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />

        {/* Glow orb — purple */}
        <div
          style={{
            position: "fixed",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "#6366f1",
            filter: "blur(80px)",
            opacity: 0.22,
            top: -150,
            left: -150,
            animation: "orbPulse 4s ease-in-out infinite",
            zIndex: 1,
          }}
        />

        {/* Glow orb — pink */}
        <div
          style={{
            position: "fixed",
            width: 380,
            height: 380,
            borderRadius: "50%",
            background: "#ec4899",
            filter: "blur(80px)",
            opacity: 0.22,
            bottom: -100,
            right: -100,
            animation: "orbPulse 4s ease-in-out 2s infinite",
            zIndex: 1,
          }}
        />

        {/* Particles container */}
        <div
          id="particles-404"
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 2,
          }}
        />

        {/* ── Content ── */}
        <div
          style={{
            position: "relative",
            zIndex: 5,
            textAlign: "center",
            maxWidth: 680,
            width: "100%",
          }}
        >
          {/* 404 */}
          <div className="nf-error-code">404</div>
          <span className="nf-glitch-bar" />

          {/* Terminal box */}
          <div className="nf-terminal-box">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                marginBottom: "1rem",
                paddingBottom: "0.75rem",
                borderBottom: "1px solid rgba(99,102,241,0.18)",
              }}
            >
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#ef4444" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#f59e0b" }} />
              <div style={{ width: 11, height: 11, borderRadius: "50%", background: "#22c55e" }} />
              <span style={{ fontSize: 11, color: "rgba(255,255,255,0.28)", marginLeft: "auto", letterSpacing: "1.2px" }}>
                system.log
              </span>
            </div>

            {[
              { parts: [{ t: "cmd", v: "$ " }, { t: "plain", v: "GET /this-page HTTP/1.1" }] },
              { parts: [{ t: "err", v: "✗ Error:" }, { t: "plain", v: " Route not found in registry" }] },
              { parts: [{ t: "cmd", v: "$ " }, { t: "plain", v: "traceroute --verbose" }] },
              { parts: [{ t: "ok", v: "→" }, { t: "plain", v: " Checking alternate paths... " }, { t: "err", v: "FAILED" }] },
              { parts: [{ t: "cmd", v: "$ " }, { t: "plain", v: 'sudo find / -name "your-page"' }, { t: "cursor" }] },
            ].map((line, i) => (
              <p key={i} style={{ fontSize: 13, lineHeight: 1.9, color: "rgba(255,255,255,0.48)" }}>
                {line.parts.map((part, j) =>
                  part.t === "cmd" ? (
                    <span key={j} style={{ color: "#818cf8" }}>{part.v}</span>
                  ) : part.t === "err" ? (
                    <span key={j} style={{ color: "#ec4899" }}>{part.v}</span>
                  ) : part.t === "ok" ? (
                    <span key={j} style={{ color: "#22c55e" }}>{part.v}</span>
                  ) : part.t === "cursor" ? (
                    <span key={j} className="nf-cursor" />
                  ) : (
                    <span key={j}>{part.v}</span>
                  )
                )}
              </p>
            ))}
          </div>

          {/* Heading */}
          <h1
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "clamp(20px, 4vw, 28px)",
              fontWeight: 800,
              color: "#ffffff",
              marginBottom: "0.5rem",
              letterSpacing: "-0.5px",
            }}
          >
            page lost in the void
          </h1>

          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.32)",
              lineHeight: 1.8,
              marginBottom: "2rem",
              letterSpacing: "0.3px",
            }}
          >
            the coordinates you entered don&apos;t map to anything in this dimension.
            <br />
            it may have moved, been deleted, or never existed at all.
          </p>

          {/* Buttons */}
          <div
            className="nf-btn-row"
            style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}
          >
            <button className="nf-btn-primary" onClick={() => navigate("/")}>
              ← back home
            </button>
            <button className="nf-btn-ghost" onClick={() => navigate("/")}>
              home base
            </button>
          </div>
        </div>
      </div>
    </>
  );
}