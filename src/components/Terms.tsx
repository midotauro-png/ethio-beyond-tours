const notes: { k: string; h: string; b: string }[] = [
  {
    k: "i",
    h: "One guide, not a call centre",
    b: "The person who answers your first email is the person who meets you at the gate and stays with you to the last day. If we are already booked for your dates we will say so and recommend someone honestly, rather than quietly subcontracting you.",
  },
  {
    k: "ii",
    h: "Two to eight people",
    b: "Never more. It is the difference between walking into a village and arriving at one. Solo travellers are welcome and are not charged a punitive single supplement — it is the true cost of the room, nothing added.",
  },
  {
    k: "iii",
    h: "Prices are itemised, not bundled",
    b: "Every quote breaks out vehicle, fuel, permits, park fees, scouts, guides, hotels and flights as separate lines. You can see exactly what you are paying for and remove anything you do not want.",
  },
  {
    k: "iv",
    h: "Photography with consent",
    b: "In the Omo especially. We agree the fee with the community before cameras come out, it is paid to the household, and no one is posed or dressed for us.",
  },
  {
    k: "v",
    h: "Local everything",
    b: "Family-run lodges over chains where the standard allows it, community scouts in the parks, and drivers who are paid a salary rather than a per-trip fee.",
  },
  {
    k: "vi",
    h: "Booked safely",
    b: "Thirty percent to hold dates, balance on arrival in Addis. Full refund of the deposit if you cancel more than 45 days out. Written confirmation of every reservation before you fly.",
  },
];

const included = [
  "Private 4×4 with fuel and driver",
  "Licensed national guide throughout",
  "All national park & site entry fees",
  "Community scouts and local mediators",
  "Domestic flights on the historic route",
  "Accommodation, twin share",
  "Breakfast daily, lunch on travel days",
  "Bottled water and airport transfers",
];

const excluded = [
  "International flights and visa",
  "Travel insurance (required)",
  "Dinners and drinks",
  "Photography fees in South Omo",
  "Tips for crew, at your discretion",
];

export default function Terms() {
  return (
    <section
      id="terms"
      className="chapter on-vellum"
      style={{ paddingBlock: "clamp(5rem, 12vh, 9rem)" }}
    >
      <div className="terms-head">
        <p className="label" style={{ color: "var(--ochre-deep)" }}>
          Chapter four <span className="geez">· አሠራሩ</span>
        </p>
        <h2 className="display display-lg reveal" style={{ margin: "1.25rem 0 0", maxWidth: "18ch" }}>
          Six things we will not compromise on.
        </h2>
      </div>

      <ol className="notes">
        {notes.map((n) => (
          <li key={n.k} className="note reveal">
            <span
              className="display"
              style={{
                fontSize: "clamp(1.5rem, 2.4vw, 2.1rem)",
                fontStyle: "italic",
                color: "var(--ochre)",
                lineHeight: 1,
              }}
            >
              {n.k}
            </span>
            <div>
              <h3
                className="display"
                style={{ fontSize: "clamp(1.15rem, 1.7vw, 1.5rem)", margin: "0 0 0.5rem" }}
              >
                {n.h}
              </h3>
              <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.96rem", maxWidth: "46ch" }}>
                {n.b}
              </p>
            </div>
          </li>
        ))}
      </ol>

      <div className="inclusions reveal">
        <div>
          <p className="label" style={{ color: "var(--ink-soft)" }}>
            In every quoted price
          </p>
          <ul className="tick">
            {included.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label" style={{ color: "var(--ink-soft)" }}>
            Not included
          </p>
          <ul className="tick tick-out">
            {excluded.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
        <aside className="aside">
          <p
            className="display"
            style={{ fontSize: "1.3rem", fontStyle: "italic", margin: "0 0 0.9rem" }}
          >
            A word on price
          </p>
          <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: "0.92rem" }}>
            Ethiopia is not the cheapest country in East Africa to travel well
            in. Park fees, scout wages and domestic flights are fixed costs, and
            an operator quoting far below these numbers is cutting them
            somewhere — usually from the wages of the people carrying your bag.
            We would rather show you the arithmetic.
          </p>
        </aside>
      </div>

      <style>{`
        .terms-head { margin-bottom: clamp(2.5rem, 7vh, 4.5rem); }
        .notes {
          list-style: none;
          margin: 0; padding: 0;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          column-gap: clamp(2rem, 6vw, 6rem);
        }
        .note {
          display: grid;
          grid-template-columns: 3.25rem minmax(0, 1fr);
          gap: 1.25rem;
          padding: 1.75rem 0;
          border-top: 1px solid var(--edge-light);
        }
        .inclusions {
          display: grid;
          grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1.1fr);
          gap: clamp(1.5rem, 4vw, 4rem);
          margin-top: clamp(3rem, 8vh, 5rem);
          padding-top: 2.25rem;
          border-top: 1px solid var(--ink);
        }
        .tick { list-style: none; margin: 1.1rem 0 0; padding: 0; }
        .tick li {
          position: relative;
          padding-left: 1.4rem;
          padding-block: 0.42rem;
          font-size: 0.92rem;
          color: var(--ink-soft);
        }
        .tick li::before {
          content: "＋";
          position: absolute;
          left: 0;
          color: var(--ochre);
          font-size: 0.72rem;
          top: 0.5rem;
        }
        .tick-out li::before { content: "−"; color: var(--ink-soft); opacity: .5; }
        .aside {
          background: var(--parchment-2);
          padding: clamp(1.5rem, 2.5vw, 2.25rem);
          align-self: start;
        }
        @media (max-width: 900px) {
          .notes { grid-template-columns: 1fr; }
          .inclusions { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}
