import Image from "next/image";
import { src } from "@/lib/photos";

const ALAZAR = {
  portrait: "/guide/alazar-portrait.jpg",
  boat: "/guide/alazar-boat.jpg",
};

const credentials: [string, string][] = [
  ["Founder & lead guide", "Alazar Gezaheghn"],
  ["Licence", "Ministry of Culture & Tourism, Tour Operator 04-1187"],
  ["Guides", "Nationally licensed, salaried, and from the regions they work in"],
  ["Languages", "Amharic · English · Tigrinya · French · Oromiffa"],
  ["Member", "ETOA · Ethiopian Tour Operators Association"],
  ["Based", "Bole, Addis Ababa — on the ground, all year"],
];

export default function Guide() {
  return (
    <section id="guide" className="chapter on-light" style={{ paddingBlock: "clamp(5rem, 12vh, 10rem)" }}>
      <div className="guide-grid">
        <figure className="guide-plate reveal-frame">
          <div style={{ position: "relative", width: "100%", aspectRatio: "3 / 4" }}>
            <Image
              src={ALAZAR.portrait}
              alt="Alazar Gezaheghn, founder and lead guide of Ethio Beyond Tours, in Addis Ababa"
              fill
              sizes="(max-width: 900px) 100vw, 38vw"
              className="img-cover duotone"
            />
          </div>
          <figcaption
            className="mono"
            style={{ marginTop: "0.75rem", color: "var(--ink-soft)", fontSize: "0.66rem" }}
          >
            Alazar, on the walking paths of Addis Ababa.
          </figcaption>

          <div className="guide-plate-strip">
            <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
              <Image
                src={ALAZAR.boat}
                alt="Alazar on a boat on a lake outside Addis Ababa, planning a route on his phone"
                fill
                sizes="(max-width: 900px) 50vw, 19vw"
                className="img-cover duotone"
              />
            </div>
            <div style={{ position: "relative", aspectRatio: "4 / 5" }}>
              <Image
                src={src("overlook", 700)}
                alt="Travellers looking out over a highland valley in northern Ethiopia"
                fill
                sizes="(max-width: 900px) 50vw, 19vw"
                className="img-cover duotone"
              />
            </div>
          </div>
        </figure>

        <div className="guide-text">
          <p className="label" style={{ color: "var(--ochre-deep)" }}>
            Chapter one <span className="geez">· ስለ እኛ</span>
          </p>

          <h2
            className="display display-lg reveal"
            style={{ margin: "1.25rem 0 2rem", maxWidth: "16ch" }}
          >
            We were born a few hours from the churches we show you.
          </h2>

          <div className="prose-col reveal" style={{ color: "var(--ink-soft)" }}>
            <p style={{ marginTop: 0 }}>
              Ethio Beyond Tours is a small house in Addis Ababa. Our guides grew
              up in Lasta, in Tigray and in the south — the places on this page
              are not a catalogue to us, they are where our families are from.
            </p>
            <p>
              Most of what is sold as an &ldquo;Ethiopia tour&rdquo; is assembled
              abroad and subcontracted twice before it reaches the ground. You
              land, and meet a driver who has never seen your itinerary. We built
              this house so that the person who answers your first email is the
              same person standing at the arrivals gate, and the same person who
              walks you down into the trench at Bete Giyorgis at six in the
              morning, before anyone else is awake.
            </p>
            <p>
              We keep the calendar small on purpose — around thirty parties a
              year. It means we can hold a market day, wait out weather on the
              escarpment, and ask permission properly in the Omo instead of
              handing out banknotes at a roadside.
            </p>
          </div>

          <blockquote
            className="reveal"
            style={{
              margin: "2.75rem 0 0",
              paddingLeft: "1.5rem",
              borderLeft: "2px solid var(--ochre-deep)",
              maxWidth: "40ch",
            }}
          >
            <p
              className="display"
              style={{
                fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
                fontStyle: "italic",
                color: "var(--ink-soft)",
                margin: 0,
              }}
            >
              &ldquo;I still walk the trench at Bete Giyorgis most mornings —
              not for work, just to see it empty before the day starts. If you
              come, I would rather show you that than a brochure version of
              it.&rdquo;
            </p>
          </blockquote>

          <p
            className="display reveal"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontStyle: "italic",
              fontVariationSettings: '"WONK" 1, "SOFT" 10',
              marginTop: "2rem",
              marginBottom: 0,
              color: "var(--ochre-deep)",
            }}
          >
            Alazar Gezaheghn
          </p>
          <p className="mono" style={{ marginTop: "0.35rem", color: "var(--ink-soft)" }}>
            Founder & lead guide, Ethio Beyond Tours{" "}
            <span className="geez">· አዲስ አበባ</span>
          </p>

          <dl className="creds">
            {credentials.map(([k, v]) => (
              <div key={k} className="cred-row">
                <dt className="label" style={{ color: "var(--ink-soft)", opacity: 0.7 }}>
                  {k}
                </dt>
                <dd className="mono" style={{ margin: 0, fontSize: "0.78rem" }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style>{`
        .guide-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
          gap: clamp(2rem, 6vw, 6rem);
          align-items: start;
        }
        .guide-plate { margin: 0; position: sticky; top: 7rem; }
        .guide-plate-strip {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.6rem;
          margin-top: 0.6rem;
        }
        .creds {
          margin: 3rem 0 0;
          border-top: 1px solid var(--edge-light);
        }
        .cred-row {
          display: grid;
          grid-template-columns: 10rem minmax(0, 1fr);
          gap: 1.5rem;
          padding: 0.9rem 0;
          border-bottom: 1px solid var(--edge-light);
        }
        @media (max-width: 900px) {
          .guide-grid { grid-template-columns: 1fr; }
          .guide-plate { position: static; }
          .cred-row { grid-template-columns: 1fr; gap: 0.3rem; }
        }
      `}</style>
    </section>
  );
}
