"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { src } from "@/lib/photos";
import { tours } from "@/lib/tours";

export default function Ledger() {
  const [open, setOpen] = useState<string | null>(null);
  const [hover, setHover] = useState<string | null>(null);
  const preview = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    let x = 0;
    let y = 0;
    let cx = 0;
    let cy = 0;
    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
    };
    const loop = () => {
      cx += (x - cx) * 0.14;
      cy += (y - cy) * 0.14;
      if (preview.current) {
        preview.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("pointermove", move, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("pointermove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  const hovered = tours.find((t) => t.no === hover);

  return (
    <section
      id="journeys"
      className="chapter"
      style={{ paddingBlock: "clamp(5rem, 12vh, 9rem)", background: "var(--basalt)" }}
    >
      <div className="ledger-head">
        <div>
          <p className="label" style={{ color: "var(--gold)" }}>
            Chapter two <span className="geez">· ጉዞዎች</span>
          </p>
          <h2 className="display display-lg reveal" style={{ margin: "1.25rem 0 0", maxWidth: "14ch" }}>
            The register of journeys.
          </h2>
        </div>
        <p className="lede reveal" style={{ margin: 0 }}>
          Six routes we run often enough to know the weather, the roads and the
          feast days by heart. Every one of them is a starting point — days get
          added, removed, reordered. Open a row to read it day by day.
        </p>
      </div>

      <div className="ledger" role="list">
        <div className="ledger-cols mono" aria-hidden>
          <span>№</span>
          <span>Journey</span>
          <span>Days</span>
          <span>Region</span>
          <span>Best season</span>
          <span style={{ textAlign: "right" }}>From / person</span>
          <span />
        </div>

        {tours.map((t) => {
          const isOpen = open === t.no;
          return (
            <article
              key={t.no}
              role="listitem"
              className={`row reveal${isOpen ? " is-open" : ""}`}
              onPointerEnter={() => setHover(t.no)}
              onPointerLeave={() => setHover((h) => (h === t.no ? null : h))}
            >
              <button
                className="row-btn ledger-cols"
                onClick={() => setOpen(isOpen ? null : t.no)}
                aria-expanded={isOpen}
                aria-controls={`tour-${t.no}`}
              >
                <span className="mono row-no">{t.no}</span>
                <span className="row-title">
                  <span className="display display-md">{t.title}</span>
                  <span className="geez mono row-geez">{t.geez}</span>
                </span>
                <span className="mono row-cell cell-days">{t.days} days</span>
                <span className="mono row-cell cell-region">{t.region}</span>
                <span className="mono row-cell cell-season">{t.season}</span>
                <span className="mono row-cell row-price">
                  ${t.from.toLocaleString()}
                </span>
                <span className="row-caret" aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <div
                id={`tour-${t.no}`}
                className="row-body"
                style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
              >
                <div style={{ overflow: "hidden" }}>
                  <div className="row-inner">
                    <div className="row-media">
                      <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
                        <Image
                          src={src(t.photo, 900)}
                          alt={t.title}
                          fill
                          sizes="(max-width: 900px) 100vw, 24vw"
                          className="img-cover duotone"
                        />
                      </div>
                      <p className="mono" style={{ opacity: 0.6, marginTop: "0.7rem" }}>
                        {t.route.join(" → ")}
                      </p>
                    </div>

                    <div>
                      <p
                        className="display"
                        style={{
                          fontSize: "clamp(1.1rem, 1.7vw, 1.5rem)",
                          fontStyle: "italic",
                          maxWidth: "40ch",
                          margin: "0 0 2rem",
                          color: "color-mix(in oklab, var(--parchment) 88%, transparent)",
                        }}
                      >
                        {t.blurb}
                      </p>

                      <ol className="days">
                        {t.itinerary.map((d) => (
                          <li key={d.day} className="day">
                            <span className="mono day-n">{d.day}</span>
                            <span className="day-place">{d.place}</span>
                            <span className="day-note">{d.note}</span>
                          </li>
                        ))}
                      </ol>

                      <div className="row-cta">
                        <a href="#enquire" className="btn btn-solid">
                          Enquire about {t.title}
                        </a>
                        <span className="mono" style={{ opacity: 0.55 }}>
                          Private departure · from ${t.from.toLocaleString()} per
                          person, twin share
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mono ledger-foot">
        Not one of these? Roughly half of what we run each year is written from
        scratch. <a href="#enquire" className="link-underline" style={{ color: "var(--gold)" }}>Tell us what you want to see →</a>
      </p>

      {/* cursor-following plate */}
      <div
        ref={preview}
        aria-hidden
        className={`plate${hovered && !open ? " is-live" : ""}`}
      >
        {hovered ? (
          <Image
            src={src(hovered.photo, 700)}
            alt=""
            fill
            sizes="320px"
            className="img-cover duotone"
          />
        ) : null}
      </div>

      <style>{`
        .ledger-head {
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
          gap: clamp(1.5rem, 5vw, 5rem);
          align-items: end;
          margin-bottom: clamp(2.5rem, 7vh, 5rem);
        }
        .ledger { border-top: 1px solid var(--edge-dark); }
        .ledger-cols {
          display: grid;
          grid-template-columns: 2.5rem minmax(0, 1.85fr) 5rem minmax(0, 0.9fr) 8.5rem 6.5rem 1.75rem;
          gap: 1.1rem;
          align-items: center;
        }
        .ledger > .ledger-cols {
          padding: 0.75rem 0;
          font-size: 0.6rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          opacity: 0.35;
          border-bottom: 1px solid var(--edge-dark);
        }
        .row { border-bottom: 1px solid var(--edge-dark); }
        .row-btn {
          width: 100%;
          background: none;
          border: 0;
          color: inherit;
          text-align: left;
          padding: clamp(1.1rem, 2.2vh, 1.75rem) 0;
          cursor: pointer;
          transition: padding-left .6s var(--ease-overshoot), opacity .4s ease;
        }
        .row-btn:hover { padding-left: 1.1rem; }
        .row-no { opacity: 0.4; }
        .row-title { display: flex; align-items: baseline; gap: 0.7rem; min-width: 0; }
        .row-title .display { font-size: clamp(1.25rem, 2.05vw, 1.95rem); white-space: nowrap; }
        .row-geez { opacity: 0.4; }
        .row-cell { opacity: 0.62; }
        .row-price { text-align: right; color: var(--gold); opacity: 1; }
        .row-caret {
          font-family: var(--font-mono), monospace;
          font-size: 1.1rem;
          text-align: right;
          opacity: 0.45;
          transition: opacity .3s ease, transform .5s var(--ease-overshoot);
        }
        .row-btn:hover .row-caret { opacity: 1; transform: rotate(90deg); }
        .is-open .row-caret { opacity: 1; }
        .is-open .row-title .display { color: var(--gold); }

        .row-body { display: grid; transition: grid-template-rows .7s var(--ease-overshoot); }
        .row-inner {
          display: grid;
          grid-template-columns: minmax(0, 0.4fr) minmax(0, 1fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          padding: 0.5rem 0 3.25rem;
        }
        .days { list-style: none; margin: 0; padding: 0; }
        .day {
          display: grid;
          grid-template-columns: 3.5rem 12rem minmax(0, 1fr);
          gap: 1.25rem;
          padding: 0.85rem 0;
          border-top: 1px solid var(--edge-dark);
          align-items: baseline;
        }
        .day-n { opacity: 0.4; }
        .day-place { font-weight: 500; }
        .day-note {
          color: color-mix(in oklab, var(--parchment) 62%, transparent);
          font-size: 0.94rem;
          line-height: 1.55;
        }
        .row-cta {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 2.25rem;
        }
        .ledger-foot { margin-top: 2.5rem; opacity: 0.6; }

        .plate {
          position: fixed;
          top: 0; left: 0;
          width: 280px; height: 350px;
          z-index: 70;
          pointer-events: none;
          opacity: 0;
          clip-path: inset(50% 0 50% 0);
          transition: opacity .5s var(--ease-elegant), clip-path .7s var(--ease-overshoot);
        }
        .plate.is-live { opacity: 1; clip-path: inset(0 0 0 0); }

        @media (max-width: 1100px) {
          .ledger-cols { grid-template-columns: 2.5rem minmax(0,1.4fr) 5rem minmax(0,1fr) 7rem 1.5rem; }
          .ledger-cols > :nth-child(5) { display: none; }
          .cell-season { display: none; }
        }
        @media (max-width: 900px) {
          .ledger-head { grid-template-columns: 1fr; align-items: start; }
          .ledger > .ledger-cols { display: none; }
          .row-btn {
            display: grid;
            grid-template-columns: 2.25rem minmax(0,1fr) 1.5rem;
            grid-template-areas:
              "no title caret"
              ". meta ."
              ". price .";
            gap: 0.4rem 1rem;
          }
          .row-no { grid-area: no; }
          .row-title { grid-area: title; flex-wrap: wrap; }
          .row-caret { grid-area: caret; }
          .cell-days { grid-area: meta; }
          .cell-region { display: none; }
          .row-price { grid-area: price; text-align: left; }
          .row-inner { grid-template-columns: 1fr; }
          .row-media { max-width: 16rem; }
          .day { grid-template-columns: 3rem minmax(0,1fr); }
          .day-note { grid-column: 2; }
          .plate { display: none; }
        }
      `}</style>
    </section>
  );
}
