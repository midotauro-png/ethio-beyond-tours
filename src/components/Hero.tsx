"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const ALAZAR_HERO = "/guide/alazar-portrait.jpg";

// Ragged, torn-paper silhouette along the bottom edge of the hero photo,
// transitioning into the parchment trust bar below it.
const TEAR_POINTS = [
  0, 62, 4, 34, 8, 68, 12, 28, 16, 58, 20, 22, 24, 64, 28, 30, 32, 60, 36, 24,
  40, 66, 44, 32, 48, 56, 52, 20, 56, 62, 60, 28, 64, 58, 68, 24, 72, 64, 76,
  30, 80, 60, 84, 22, 88, 66, 92, 32, 96, 58, 100, 26,
];
const TEAR_PATH =
  `polygon(` +
  TEAR_POINTS.map((v, i) => (i % 2 === 0 ? `${v}% ${TEAR_POINTS[i + 1]}%` : null))
    .filter(Boolean)
    .join(", ") +
  `, 100% 100%, 0% 100%)`;

export default function Hero() {
  const plate = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y < window.innerHeight * 1.2 && plate.current) {
          plate.current.style.transform = `translate3d(0, ${y * 0.22}px, 0)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
        paddingInline: "var(--gut)",
      }}
    >
      <div ref={plate} style={{ position: "absolute", inset: "-12% 0 -12% 0", zIndex: 0 }}>
        <Image
          src={ALAZAR_HERO}
          alt="Alazar, founder and lead guide of Ethio Beyond Tours, on a walking path in Addis Ababa"
          fill
          sizes="100vw"
          quality={85}
          loading="eager"
          fetchPriority="high"
          className="img-cover duotone"
          style={{ objectPosition: "78% 18%" }}
        />
      </div>

      {/* scrim — legible text on the left, the photo reads on the right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(100deg, rgba(18,16,13,.92) 0%, rgba(18,16,13,.74) 34%, rgba(18,16,13,.32) 56%, rgba(18,16,13,.08) 74%, transparent 92%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background:
            "linear-gradient(to top, rgba(18,16,13,.55) 0%, transparent 30%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: "42rem" }}>
        <p
          className="label"
          style={{
            color: "var(--gold)",
            marginBottom: "clamp(1rem, 3vh, 1.75rem)",
            animation: "fadein 1.2s var(--ease-elegant) .2s both",
          }}
        >
          Est. 2009 · Addis Ababa <span className="geez">· ኢትዮጵያ</span>
        </p>

        <h1 style={{ margin: 0 }}>
          {[
            { text: "Experience", color: "var(--parchment)" },
            { text: "Ethiopia", color: "var(--gold)" },
            { text: "like a local.", color: "var(--parchment)" },
          ].map((line, i) => (
            <span
              key={line.text}
              style={{ display: "block", overflow: "hidden", paddingBottom: "0.06em" }}
            >
              <span
                style={{
                  display: "block",
                  fontFamily: "var(--font-body), sans-serif",
                  fontWeight: 800,
                  textTransform: "uppercase",
                  letterSpacing: "-0.01em",
                  lineHeight: 0.98,
                  fontSize: "clamp(2.4rem, 6.4vw, 5.2rem)",
                  color: line.color,
                  animation: `rise 1.15s var(--ease-overshoot) ${0.25 + i * 0.11}s both`,
                }}
              >
                {line.text}
              </span>
            </span>
          ))}
        </h1>

        <div className="hero-foot">
          <p className="lede" style={{ margin: 0 }}>
            Discover the real Ethiopia with a local expert who makes every
            moment unforgettable — one guide, from the first email to the
            last goodbye at the airport.
          </p>

          <div className="hero-actions">
            <a href="#journeys" className="btn btn-solid">
              Explore tours
            </a>
            <a href="#enquire" className="btn">
              Build a private trip
            </a>
          </div>
        </div>
      </div>

      {/* torn-paper edge into the trust bar */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: "clamp(2rem, 5vh, 3.5rem)",
          background: "var(--parchment)",
          clipPath: TEAR_PATH,
          zIndex: 3,
        }}
      />

      <style>{`
        @keyframes fadein { from { opacity: 0 } to { opacity: 1 } }
        .hero-foot {
          margin-top: clamp(1.75rem, 4.5vh, 2.75rem);
          animation: fadein 1.4s var(--ease-elegant) .75s both;
        }
        .hero-actions { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 2rem; }
        @media (max-width: 860px) {
          .hero-actions { flex-direction: column; align-items: stretch; }
        }
      `}</style>
    </section>
  );
}
