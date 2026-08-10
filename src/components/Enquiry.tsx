"use client";

import { useState } from "react";
import { tours } from "@/lib/tours";

type State = "idle" | "sending" | "sent" | "error";

export default function Enquiry() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState("sending");
    setError(null);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Something went wrong.");
      setState("sent");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setState("error");
    }
  }

  return (
    <section
      id="enquire"
      className="chapter"
      style={{
        paddingBlock: "clamp(5rem, 12vh, 9rem)",
        background: "var(--ochre-deep)",
        color: "var(--vellum)",
      }}
    >
      <div className="enq">
        <div className="enq-side">
          <p className="label" style={{ opacity: 0.7 }}>
            Chapter five <span className="geez">· ጠይቁን</span>
          </p>
          <h2 className="display display-lg reveal" style={{ margin: "1.25rem 0 1.75rem", maxWidth: "12ch" }}>
            Write to us directly.
          </h2>
          <p style={{ maxWidth: "38ch", opacity: 0.85, marginTop: 0 }}>
            No deposit, no obligation, no automated sequence of marketing emails.
            A guide reads every message and replies within twelve hours with a
            written outline and an itemised price.
          </p>

          <dl className="contact">
            {[
              ["Email", "book@ethiobeyondtours.com"],
              ["Phone / WhatsApp", "+251 96 026 5436"],
              ["Office", "Bole Sub-city, Addis Ababa"],
              ["Hours", "Mon – Sat, 08:00 – 18:00 EAT (UTC+3)"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt className="label" style={{ opacity: 0.6 }}>
                  {k}
                </dt>
                <dd className="mono" style={{ margin: "0.2rem 0 0", fontSize: "0.84rem" }}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="slip">
          {state === "sent" ? (
            <div className="sent">
              <p className="label" style={{ color: "var(--ochre-deep)" }}>
                Received
              </p>
              <p
                className="display display-md"
                style={{ margin: "1rem 0", color: "var(--ink)" }}
              >
                Thank you — we have your note.
              </p>
              <p style={{ color: "var(--ink-soft)", margin: 0 }}>
                You will hear back within twelve hours, usually sooner. If it is
                urgent, WhatsApp is fastest: +251 96 026 5436.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <p className="label slip-head">Enquiry slip · no. EBT-{new Date().getFullYear()}</p>

              <div className="fields">
                <label className="field">
                  <span className="label">Your name</span>
                  <input name="name" required autoComplete="name" />
                </label>
                <label className="field">
                  <span className="label">Email</span>
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <label className="field">
                  <span className="label">Journey of interest</span>
                  <select name="journey" defaultValue="">
                    <option value="">Not sure yet — advise me</option>
                    {tours.map((t) => (
                      <option key={t.no} value={t.title}>
                        {t.no} · {t.title} ({t.days} days)
                      </option>
                    ))}
                    <option value="Bespoke">Something written from scratch</option>
                  </select>
                </label>
                <label className="field">
                  <span className="label">Rough month</span>
                  <input name="month" placeholder="e.g. January 2027" />
                </label>
                <label className="field">
                  <span className="label">Travellers</span>
                  <input name="party" placeholder="2 adults" />
                </label>
                <label className="field field-wide">
                  <span className="label">What do you want to see?</span>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Timkat in Gondar, and we would rather walk than drive where we can…"
                  />
                </label>
              </div>

              <input
                name="fax"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden
                style={{ position: "absolute", left: "-9999px", opacity: 0 }}
              />

              {error ? (
                <p className="mono" style={{ color: "var(--ochre-deep)", marginTop: "1rem" }}>
                  {error}
                </p>
              ) : null}

              <div className="slip-foot">
                <button
                  type="submit"
                  className="btn"
                  style={{ borderColor: "var(--ink)", color: "var(--ink)" }}
                  disabled={state === "sending"}
                >
                  {state === "sending" ? "Sending…" : "Send the enquiry"}
                </button>
                <span className="mono" style={{ color: "var(--ink-soft)", fontSize: "0.68rem" }}>
                  Your details are used to answer this enquiry and nothing else.
                </span>
              </div>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .enq {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: clamp(2rem, 5vw, 5rem);
          align-items: start;
        }
        .contact {
          margin: 2.75rem 0 0;
          display: grid;
          gap: 1.1rem;
          border-top: 1px solid rgba(251,248,242,.28);
          padding-top: 1.5rem;
        }
        .slip {
          background: var(--vellum);
          color: var(--ink);
          padding: clamp(1.5rem, 3vw, 2.75rem);
          position: relative;
          box-shadow: 24px 24px 0 rgba(18,16,13,.18);
        }
        .slip-head {
          margin: 0 0 1.75rem;
          color: var(--ink-soft);
          padding-bottom: 0.9rem;
          border-bottom: 1px solid var(--edge-light);
        }
        .fields {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 1.25rem 1.5rem;
        }
        .field { display: grid; gap: 0.5rem; }
        .field-wide { grid-column: 1 / -1; }
        .field .label { color: var(--ink-soft); opacity: .75; }
        .field input, .field select, .field textarea {
          font-family: var(--font-body), sans-serif;
          font-size: 0.98rem;
          color: var(--ink);
          background: transparent;
          border: 0;
          border-bottom: 1px solid var(--edge-light);
          padding: 0.55rem 0;
          border-radius: 0;
          outline: none;
          transition: border-color .4s var(--ease-elegant);
          width: 100%;
        }
        .field textarea { resize: vertical; }
        .field input:focus, .field select:focus, .field textarea:focus {
          border-color: var(--ochre);
        }
        .field input::placeholder, .field textarea::placeholder {
          color: color-mix(in oklab, var(--ink-soft) 55%, transparent);
        }
        .slip-foot {
          display: flex;
          align-items: center;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-top: 2.25rem;
          padding-top: 1.5rem;
          border-top: 1px solid var(--edge-light);
        }
        .sent { padding-block: 2rem; }
        @media (max-width: 900px) {
          .enq { grid-template-columns: 1fr; }
          .fields { grid-template-columns: 1fr; }
          .slip { box-shadow: 12px 12px 0 rgba(18,16,13,.18); }
        }
      `}</style>
    </section>
  );
}
