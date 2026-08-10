import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Colophon from "@/components/Colophon";
import SiteChrome from "@/components/SiteChrome";
import { destinations, getDestination } from "@/lib/destinations";
import { tours } from "@/lib/tours";
import { src } from "@/lib/photos";

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const place = getDestination(slug);
  if (!place) return {};
  return {
    title: place.name,
    description: place.note,
    openGraph: {
      title: `${place.name} · Ethio Beyond Tours`,
      description: place.note,
    },
  };
}

export default async function DestinationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const place = getDestination(slug);
  if (!place) notFound();

  const related = tours.filter((t) => place.relatedTourNos.includes(t.no));

  return (
    <div className="grain">
      <SiteChrome />
      <Nav />
      <main>
        <section
          style={{
            position: "relative",
            minHeight: "72svh",
            display: "flex",
            alignItems: "flex-end",
            paddingInline: "var(--gut)",
            paddingBottom: "clamp(2.5rem, 6vh, 4rem)",
            overflow: "hidden",
          }}
        >
          <Image
            src={src(place.photo, 2000)}
            alt={place.name}
            fill
            sizes="100vw"
            priority
            className="img-cover duotone"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(18,16,13,.92) 0%, rgba(18,16,13,.35) 45%, rgba(18,16,13,.1) 100%)",
            }}
          />
          <div style={{ position: "relative", zIndex: 1 }}>
            <p className="label" style={{ color: "var(--gold)" }}>
              Atlas · {place.n} of {destinations.length}{" "}
              <span className="geez">· {place.geez}</span>
            </p>
            <h1
              className="display display-xl"
              style={{ margin: "1rem 0 0", color: "var(--parchment)" }}
            >
              {place.name}
            </h1>
            <p className="mono" style={{ marginTop: "1.25rem", opacity: 0.7, color: "var(--parchment)" }}>
              {place.elevation} · {place.region} · Best {place.bestSeason}
            </p>
          </div>
        </section>

        <section className="chapter on-light" style={{ paddingBlock: "clamp(3.5rem, 9vh, 6rem)" }}>
          <div className="dest-grid">
            <div className="prose-col" style={{ color: "var(--ink-soft)" }}>
              {place.intro.map((p) => (
                <p key={p} style={{ marginTop: 0 }}>
                  {p}
                </p>
              ))}

              <h2 className="display display-md" style={{ margin: "2.5rem 0 1.25rem", color: "var(--ink)" }}>
                Why go
              </h2>
              <ul className="highlights">
                {place.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>

              <Link href="/#atlas" className="mono link-underline" style={{ display: "inline-block", marginTop: "2.5rem", color: "var(--ochre-deep)" }}>
                ← All destinations
              </Link>
            </div>

            <aside>
              <div className="dest-gallery">
                {place.gallery.map((g) => (
                  <div key={g} style={{ position: "relative", aspectRatio: "4 / 5" }}>
                    <Image
                      src={src(g, 700)}
                      alt={place.name}
                      fill
                      sizes="(max-width: 900px) 50vw, 20vw"
                      className="img-cover duotone"
                    />
                  </div>
                ))}
              </div>

              {related.length > 0 ? (
                <div className="dest-related">
                  <p className="label" style={{ opacity: 0.6 }}>
                    Journeys that visit {place.name}
                  </p>
                  <ul style={{ listStyle: "none", margin: "1rem 0 0", padding: 0, display: "grid", gap: "0.9rem" }}>
                    {related.map((t) => (
                      <li key={t.no} className="dest-related-row">
                        <Link href="/#journeys" className="link-underline">
                          {t.title}
                        </Link>
                        <span className="mono" style={{ opacity: 0.55 }}>
                          from ${t.from.toLocaleString()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <Link href="/#enquire" className="btn btn-solid" style={{ marginTop: "2rem", display: "inline-flex" }}>
                Plan a trip to {place.name}
              </Link>
            </aside>
          </div>

          <style>{`
            .dest-grid {
              display: grid;
              grid-template-columns: minmax(0, 1.2fr) minmax(0, 0.8fr);
              gap: clamp(2rem, 6vw, 5rem);
              align-items: start;
            }
            .highlights { margin: 0; padding-left: 1.2rem; display: grid; gap: 0.6rem; }
            .dest-gallery {
              display: grid;
              grid-template-columns: repeat(${Math.min(place.gallery.length, 3)}, minmax(0, 1fr));
              gap: 0.6rem;
            }
            .dest-related {
              margin-top: 2.5rem;
              padding-top: 1.5rem;
              border-top: 1px solid var(--edge-light);
            }
            .dest-related-row {
              display: flex;
              justify-content: space-between;
              gap: 1rem;
            }
            @media (max-width: 900px) {
              .dest-grid { grid-template-columns: 1fr; }
            }
          `}</style>
        </section>
      </main>
      <Colophon />
    </div>
  );
}
