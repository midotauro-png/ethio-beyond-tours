"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { src } from "@/lib/photos";
import { destinations as places } from "@/lib/destinations";

// Below this drag distance we treat the gesture as a click, and let the
// card link underneath the pointer navigate normally. We deliberately
// avoid setPointerCapture here: capturing the pointer — even briefly —
// retargets the click event that follows to the rail instead of the link.
const DRAG_THRESHOLD = 6;

export default function Atlas() {
  const rail = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const state = useRef({ x: 0, left: 0, moved: 0, active: false });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      if (!state.current.active || !rail.current) return;
      const dx = e.clientX - state.current.x;
      state.current.moved = Math.abs(dx);
      if (state.current.moved >= DRAG_THRESHOLD) setDragging(true);
      rail.current.scrollLeft = state.current.left - dx;
    };
    const onUp = () => {
      state.current.active = false;
      setDragging(false);
    };
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, []);

  const down = (e: React.PointerEvent) => {
    if (!rail.current) return;
    state.current = { x: e.clientX, left: rail.current.scrollLeft, moved: 0, active: true };
  };

  const nudge = (dir: 1 | -1) => {
    rail.current?.scrollBy({ left: dir * 460, behavior: "smooth" });
  };

  return (
    <section
      id="atlas"
      className="chapter on-highland"
      style={{ paddingBlock: "clamp(5rem, 12vh, 9rem)", overflow: "hidden" }}
    >
      <div className="atlas-head">
        <div>
          <p className="label" style={{ color: "var(--sulphur)" }}>
            Chapter three <span className="geez">· አትላስ</span>
          </p>
          <h2 className="display display-lg reveal" style={{ margin: "1.25rem 0 0", maxWidth: "13ch" }}>
            Seven places worth the flight.
          </h2>
        </div>
        <div className="atlas-controls">
          <p className="mono" style={{ opacity: 0.6, margin: 0 }}>
            Drag, or scroll sideways
          </p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button className="nudge" onClick={() => nudge(-1)} aria-label="Previous places">
              ←
            </button>
            <button className="nudge" onClick={() => nudge(1)} aria-label="More places">
              →
            </button>
          </div>
        </div>
      </div>

      <div
        ref={rail}
        className="rail no-scrollbar"
        onPointerDown={down}
        style={{
          cursor: dragging ? "grabbing" : "grab",
          // Scroll-snap fights every incremental scrollLeft write during a
          // drag (each write is treated as a settled scroll), so it's
          // switched off for the duration of the gesture and re-enabled on
          // release, when it naturally settles the rail onto a card.
          scrollSnapType: dragging ? "none" : "x proximity",
        }}
      >
        {places.map((p, i) => (
          <figure key={p.n} className="card" style={{ marginTop: i % 2 ? "3.5rem" : 0 }}>
            <Link
              href={`/destinations/${p.slug}`}
              className="card-link"
              draggable={false}
              onClick={(e) => {
                if (state.current.moved > 6) e.preventDefault();
              }}
            >
              <div className="card-media">
                <Image
                  src={src(p.photo, 900)}
                  alt={p.name}
                  fill
                  sizes="(max-width: 900px) 74vw, 27vw"
                  className="img-cover duotone"
                  draggable={false}
                />
                <span className="mono card-n">{p.n}</span>
              </div>
              <figcaption>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.7rem" }}>
                  <h3 className="display display-md" style={{ margin: 0 }}>
                    {p.name}
                  </h3>
                  <span className="geez mono">{p.geez}</span>
                </div>
                <p className="mono" style={{ opacity: 0.55, margin: "0.4rem 0 0.9rem" }}>
                  {p.meta}
                </p>
                <p style={{ margin: 0, fontSize: "0.94rem", opacity: 0.78, lineHeight: 1.6 }}>
                  {p.note}
                </p>
                <span className="mono card-cta link-underline">Read more →</span>
              </figcaption>
            </Link>
          </figure>
        ))}
        <div style={{ flex: "0 0 var(--gut)" }} />
      </div>

      <style>{`
        .atlas-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: clamp(2rem, 6vh, 3.5rem);
        }
        .atlas-controls { display: flex; align-items: center; gap: 1.25rem; }
        .nudge {
          width: 2.75rem; height: 2.75rem;
          border: 1px solid var(--edge-dark);
          background: none; color: inherit;
          cursor: pointer; font-size: 0.95rem;
          transition: background .4s var(--ease-elegant), border-color .4s ease;
        }
        .nudge:hover { background: rgba(242,237,228,.1); border-color: var(--sulphur); }
        .rail {
          display: flex;
          gap: clamp(1rem, 2.5vw, 2.25rem);
          overflow-x: auto;
          padding-bottom: 1rem;
          margin-inline: calc(var(--gut) * -1);
          padding-inline: var(--gut);
        }
        .card {
          flex: 0 0 clamp(15rem, 27vw, 23rem);
          margin: 0;
          scroll-snap-align: start;
          transition: margin-top .8s var(--ease-elegant);
        }
        .card-link { display: block; color: inherit; }
        .card-cta {
          display: inline-block;
          margin-top: 1rem;
          font-size: 0.66rem;
          letter-spacing: 0.14em;
          color: var(--sulphur);
        }
        .card-media {
          position: relative;
          aspect-ratio: 4 / 5;
          overflow: hidden;
          margin-bottom: 1.1rem;
        }
        .card-media img { transition: transform 1.2s var(--ease-elegant); }
        .card:hover .card-media img { transform: scale(1.05); }
        .card-n {
          position: absolute;
          top: 0.85rem; left: 0.85rem;
          color: var(--parchment);
          mix-blend-mode: difference;
          font-size: 0.68rem;
          letter-spacing: 0.2em;
        }
        @media (max-width: 900px) {
          .card { flex-basis: 74vw; margin-top: 0 !important; }
        }
      `}</style>
    </section>
  );
}
