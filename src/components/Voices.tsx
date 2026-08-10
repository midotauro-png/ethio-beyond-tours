"use client";

import { useEffect, useState } from "react";

const voices = [
  {
    q: "Our guide got us into the trench at Bete Giyorgis at ten past six. For forty minutes it was us, a deacon and the light coming over the rim. At nine the coaches arrived and I understood exactly what we had been given.",
    who: "Marianne D.",
    where: "Ghent, Belgium · 6 days, historic north",
  },
  {
    q: "Three operators quoted us for the Danakil. Ethio Beyond was the only one that wrote back explaining why they would not take us in June, and what the temperature actually does to people. We went in January instead.",
    who: "Tom & Ruth W.",
    where: "Melbourne, Australia · 5 days, Afar",
  },
  {
    q: "In the Omo our guide spent twenty minutes talking with the family before anyone lifted a camera. It was the first time on that trip I did not feel like an intruder.",
    who: "Dr. Kenji Aoyama",
    where: "Kyoto, Japan · 9 days, Lower Omo",
  },
  {
    q: "Our flight from Frankfurt was cancelled and we lost a day. They rebuilt the whole itinerary overnight, renegotiated two hotels, and we still stood on Imet Gogo at sunrise.",
    who: "Familie Brandt",
    where: "Hamburg, Germany · 8 days, Simien",
  },
];

export default function Voices() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % voices.length), 7200);
    return () => clearInterval(t);
  }, [paused]);

  const v = voices[i];

  return (
    <section
      className="chapter"
      style={{ paddingBlock: "clamp(5rem, 13vh, 10rem)", background: "var(--basalt-2)" }}
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <div className="voices">
        <div className="voices-side">
          <p className="label" style={{ color: "var(--gold)" }}>
            Correspondence
          </p>
          <p className="mono" style={{ opacity: 0.45, marginTop: "1rem" }}>
            Tripadvisor · 5.0 from 212 reviews
          </p>
          <ol className="pips">
            {voices.map((x, n) => (
              <li key={x.who}>
                <button
                  onClick={() => setI(n)}
                  aria-label={`Read the note from ${x.who}`}
                  className={n === i ? "is-on" : ""}
                >
                  <span className="mono">{String(n + 1).padStart(2, "0")}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <figure style={{ margin: 0 }} key={i}>
          <blockquote style={{ margin: 0 }}>
            <p
              className="display"
              style={{
                fontSize: "clamp(1.5rem, 3.1vw, 2.9rem)",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                margin: 0,
                animation: "fade-up .9s var(--ease-overshoot) both",
              }}
            >
              <span style={{ color: "var(--ochre)" }}>“</span>
              {v.q}
              <span style={{ color: "var(--ochre)" }}>”</span>
            </p>
          </blockquote>
          <figcaption
            className="mono"
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              animation: "fade-up .9s var(--ease-overshoot) .12s both",
            }}
          >
            <span>{v.who}</span>
            <span style={{ opacity: 0.45 }}>{v.where}</span>
          </figcaption>
        </figure>
      </div>

      <style>{`
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: none; }
        }
        .voices {
          display: grid;
          grid-template-columns: 14rem minmax(0, 1fr);
          gap: clamp(2rem, 6vw, 6rem);
          align-items: start;
        }
        .pips { list-style: none; margin: 2.5rem 0 0; padding: 0; display: grid; gap: 0.15rem; }
        .pips button {
          background: none; border: 0; cursor: pointer; color: inherit;
          padding: 0.4rem 0; opacity: 0.3;
          border-top: 1px solid var(--edge-dark);
          width: 100%; text-align: left;
          transition: opacity .4s ease, padding-left .5s var(--ease-overshoot);
        }
        .pips button:hover { opacity: .7; padding-left: .4rem; }
        .pips button.is-on { opacity: 1; color: var(--gold); }
        @media (max-width: 860px) {
          .voices { grid-template-columns: 1fr; }
          .pips { grid-auto-flow: column; grid-auto-columns: 3rem; margin-top: 1.25rem; }
        }
      `}</style>
    </section>
  );
}
