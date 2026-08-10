"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { src, type PhotoKey } from "@/lib/photos";

type Place = {
  n: string;
  name: string;
  geez: string;
  meta: string;
  note: string;
  photo: PhotoKey;
};

const places: Place[] = [
  {
    n: "01",
    name: "Lalibela",
    geez: "ላሊበላ",
    meta: "2,500 m · Amhara",
    note: "Eleven churches cut downward into the tuff in the 12th century, still in daily liturgical use. Go at first light or at Genna.",
    photo: "deacon",
  },
  {
    n: "02",
    name: "Simien",
    geez: "ስሜን ተራሮች",
    meta: "4,550 m · Gondar",
    note: "A collapsed volcanic massif with a thousand-metre escarpment. Gelada, walia ibex, and the highest ground in the country.",
    photo: "gelada",
  },
  {
    n: "03",
    name: "Danakil",
    geez: "ዳናኪል",
    meta: "−125 m · Afar",
    note: "Sulphur springs, potash flats and one of the few permanent lava lakes on earth. Only travelled November to February.",
    photo: "dallol",
  },
  {
    n: "04",
    name: "Lower Omo",
    geez: "ደቡብ ኦሞ",
    meta: "500 m · SNNPR",
    note: "Sixteen peoples along one river. Visited with introductions and consent, never as a photo safari.",
    photo: "omoVillage",
  },
  {
    n: "05",
    name: "Harar Jugol",
    geez: "ሐረር ጁጎል",
    meta: "1,885 m · Harari",
    note: "A walled Muslim city of 368 alleys and 82 mosques. Coffee, chat, and the hyena man at the Fallana gate.",
    photo: "harar",
  },
  {
    n: "06",
    name: "Lake Tana",
    geez: "ጣና ሐይቅ",
    meta: "1,788 m · Amhara",
    note: "The source of the Blue Nile, ringed by island monasteries reached by papyrus boat.",
    photo: "falls",
  },
  {
    n: "07",
    name: "Aksum",
    geez: "አክሱም",
    meta: "2,131 m · Tigray",
    note: "Granite stelae up to 33 metres, subterranean tombs, and the chapel that claims the Ark of the Covenant.",
    photo: "highlands",
  },
];

export default function Atlas() {
  const rail = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);
  const state = useRef({ x: 0, left: 0, moved: 0 });

  const down = (e: React.PointerEvent) => {
    if (!rail.current) return;
    setDragging(true);
    state.current = { x: e.clientX, left: rail.current.scrollLeft, moved: 0 };
    rail.current.setPointerCapture(e.pointerId);
  };
  const move = (e: React.PointerEvent) => {
    if (!dragging || !rail.current) return;
    const dx = e.clientX - state.current.x;
    state.current.moved = Math.abs(dx);
    rail.current.scrollLeft = state.current.left - dx;
  };
  const up = () => setDragging(false);

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
        onPointerMove={move}
        onPointerUp={up}
        onPointerCancel={up}
        style={{ cursor: dragging ? "grabbing" : "grab" }}
      >
        {places.map((p, i) => (
          <figure key={p.n} className="card" style={{ marginTop: i % 2 ? "3.5rem" : 0 }}>
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
            </figcaption>
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
          scroll-snap-type: x proximity;
        }
        .card {
          flex: 0 0 clamp(15rem, 27vw, 23rem);
          margin: 0;
          scroll-snap-align: start;
          transition: margin-top .8s var(--ease-elegant);
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
