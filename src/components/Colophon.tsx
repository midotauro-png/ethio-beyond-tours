import Image from "next/image";
import Link from "next/link";
import { tours } from "@/lib/tours";

const columns: { head: string; items: { label: string; href: string }[] }[] = [
  {
    head: "Journeys",
    items: tours.map((t) => ({ label: t.title, href: "/#journeys" })),
  },
  {
    head: "Regions",
    items: [
      { label: "Historic north", href: "/#atlas" },
      { label: "Simien & the parks", href: "/#atlas" },
      { label: "Danakil & Afar", href: "/#atlas" },
      { label: "Lower Omo & the south", href: "/#atlas" },
      { label: "Harar & the east", href: "/#atlas" },
      { label: "Addis Ababa day tours", href: "/#enquire" },
    ],
  },
  {
    head: "Practical",
    items: [
      { label: "How it works", href: "/#terms" },
      { label: "What's included", href: "/#terms" },
      { label: "When to travel", href: "/#atlas" },
      { label: "Visas & entry", href: "/#enquire" },
      { label: "Responsible travel", href: "/#terms" },
      { label: "Enquire", href: "/#enquire" },
    ],
  },
];

export default function Colophon() {
  return (
    <footer className="chapter" style={{ background: "var(--basalt)", paddingTop: "clamp(4rem, 10vh, 7rem)" }}>
      <div className="colophon">
        <div className="colophon-brand">
          <Image
            src="/brand/logo.png"
            alt="Ethio Beyond Tours emblem"
            width={Math.round(72 * (1536 / 1024))}
            height={72}
            style={{ height: 72, width: "auto", mixBlendMode: "multiply", marginBottom: "1.25rem" }}
          />
          <p className="display display-md" style={{ margin: 0 }}>
            Ethio Beyond Tours
          </p>
          <p className="label" style={{ opacity: 0.5, marginTop: "0.4rem" }}>
            Addis Ababa <span className="geez">· ጉዞ አገልግሎት</span>
          </p>
          <p style={{ maxWidth: "34ch", opacity: 0.6, fontSize: "0.92rem", marginTop: "1.5rem" }}>
            A licensed, locally owned tour house in Addis Ababa, founded by
            Alazar Gezaheghn. Thirteen years on the road, thirty parties a
            year, one guide from arrival to departure.
          </p>
          <div style={{ display: "flex", gap: "1.25rem", marginTop: "1.75rem" }}>
            {[
              ["Tripadvisor", "/#enquire"],
              ["Instagram", "/#enquire"],
              ["Facebook", "/#enquire"],
              ["WhatsApp", "https://wa.me/251960265436"],
            ].map(([s, href]) => (
              <Link key={s} href={href} className="mono link-underline" style={{ opacity: 0.65 }}>
                {s}
              </Link>
            ))}
          </div>
        </div>

        {columns.map((c) => (
          <nav key={c.head} aria-label={c.head}>
            <p className="label" style={{ opacity: 0.45 }}>
              {c.head}
            </p>
            <ul style={{ listStyle: "none", margin: "1.1rem 0 0", padding: 0, display: "grid", gap: "0.5rem" }}>
              {c.items.map((i) => (
                <li key={i.label}>
                  <Link href={i.href} className="link-underline" style={{ fontSize: "0.92rem", opacity: 0.72 }}>
                    {i.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="colophon-foot mono">
        <span>© {new Date().getFullYear()} Ethio Beyond Tours plc</span>
        <span>Licence MoCT 04-1187 · TIN 0048129337</span>
        <span>P.O. Box 13378, Addis Ababa, Ethiopia</span>
        <span style={{ opacity: 0.45 }}>ኢትዮጵያ · Land of origins</span>
      </div>

      <style>{`
        .colophon {
          display: grid;
          grid-template-columns: minmax(0, 1.4fr) repeat(3, minmax(0, 1fr));
          gap: clamp(2rem, 4vw, 4rem);
          padding-bottom: clamp(3rem, 8vh, 5rem);
        }
        .colophon-foot {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem 2.5rem;
          justify-content: space-between;
          padding-block: 1.5rem 2rem;
          border-top: 1px solid var(--edge-dark);
          opacity: 0.6;
          font-size: 0.68rem;
        }
        @media (max-width: 900px) {
          .colophon { grid-template-columns: repeat(2, minmax(0, 1fr)); }
          .colophon-brand { grid-column: 1 / -1; }
        }
      `}</style>
    </footer>
  );
}
