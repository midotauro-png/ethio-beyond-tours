import type { ReactElement } from "react";

const features: { title: string; body: string; icon: ReactElement }[] = [
  {
    title: "Local experts",
    body: "Knowledgeable guides from Addis Ababa and the regions they work in.",
    icon: (
      <path d="M12 21s7-6.1 7-11.5A7 7 0 0 0 5 9.5C5 14.9 12 21 12 21Zm0-9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    ),
  },
  {
    title: "Authentic experiences",
    body: "Cultural immersion and hidden gems, not a bus-window itinerary.",
    icon: (
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Zm8 3a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" />
    ),
  },
  {
    title: "Tailor-made tours",
    body: "Customized itineraries built around what you want to see.",
    icon: (
      <path d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm8 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM3 20c0-2.8 2.2-5 5-5s5 2.2 5 5M11 12c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    ),
  },
  {
    title: "Safe & reliable",
    body: "Your safety and satisfaction are our priority, every departure.",
    icon: (
      <path d="M12 3l7 3v6c0 4.5-3 7.9-7 9-4-1.1-7-4.5-7-9V6l7-3Zm-1.2 10.8 4.4-4.4-1.4-1.4-3 3-1.4-1.4-1.4 1.4 2.8 2.8Z" />
    ),
  },
];

export default function TrustBar() {
  return (
    <section className="chapter on-light" style={{ paddingBlock: "clamp(2rem, 5vh, 3.5rem) clamp(3.5rem, 9vh, 6rem)" }}>
      <div className="trust-grid">
        {features.map((f) => (
          <div key={f.title} className="trust-item reveal">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--ochre-deep)"
              strokeWidth="1.4"
              strokeLinejoin="round"
              strokeLinecap="round"
            >
              {f.icon}
            </svg>
            <p className="mono trust-title">{f.title}</p>
            <p className="trust-body">{f.body}</p>
          </div>
        ))}
      </div>

      <p
        className="display reveal"
        style={{
          textAlign: "center",
          fontStyle: "italic",
          fontVariationSettings: '"WONK" 1, "SOFT" 10',
          fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)",
          color: "var(--ochre-deep)",
          marginTop: "clamp(3rem, 7vh, 5rem)",
          marginBottom: 0,
        }}
      >
        &ldquo;The best stories are found between the streets of Addis.&rdquo;
      </p>

      <style>{`
        .trust-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: clamp(1.5rem, 3vw, 3rem);
          text-align: center;
          border-bottom: 1px solid var(--edge-light);
          padding-bottom: clamp(2.5rem, 6vh, 4rem);
        }
        .trust-item { display: flex; flex-direction: column; align-items: center; gap: 0.6rem; }
        .trust-title {
          margin: 0.4rem 0 0;
          font-size: 0.68rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--ink);
        }
        .trust-body {
          margin: 0;
          font-size: 0.84rem;
          color: var(--ink-soft);
          max-width: 22ch;
        }
        @media (max-width: 760px) {
          .trust-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
}
