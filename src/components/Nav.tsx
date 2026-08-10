"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const links = [
  { href: "#top", label: "Home", n: "01" },
  { href: "#journeys", label: "Tours", n: "02" },
  { href: "#atlas", label: "Destinations", n: "03" },
  { href: "#guide", label: "About us", n: "04" },
  { href: "#enquire", label: "Contact", n: "05" },
];

const LOGO_ASPECT = 1536 / 1024;

function Mark({ height = 56 }: { height?: number }) {
  return (
    <Image
      src="/brand/logo.png"
      alt="Ethio Beyond Tours emblem"
      width={Math.round(height * LOGO_ASPECT)}
      height={height}
      className="brand-mark"
      style={{ height, width: "auto", mixBlendMode: "multiply" }}
      priority
    />
  );
}

export default function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.86);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      style={{
        position: "fixed",
        inset: "0 0 auto 0",
        zIndex: 80,
        paddingInline: "var(--gut)",
        background: solid ? "rgba(18,16,13,0.86)" : "transparent",
        backdropFilter: solid ? "blur(14px) saturate(1.1)" : "none",
        borderBottom: `1px solid ${solid ? "var(--edge-dark)" : "transparent"}`,
        transition: "background .6s var(--ease-elegant), border-color .6s ease",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "2rem",
          height: solid ? 68 : 88,
          transition: "height .6s var(--ease-elegant)",
          color: "var(--parchment)",
        }}
      >
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Mark height={solid ? 48 : 60} />
          <span style={{ display: "grid", lineHeight: 1.05 }}>
            <span className="display" style={{ fontSize: "1.16rem", letterSpacing: "-0.02em" }}>
              Ethio Beyond
            </span>
            <span className="label" style={{ fontSize: "0.55rem", opacity: 0.6, letterSpacing: "0.34em" }}>
              Tours &amp; Experiences
            </span>
          </span>
        </a>

        <ul
          className="nav-links"
          style={{
            display: "flex",
            gap: "2.2rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            alignItems: "center",
          }}
        >
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="mono link-underline" style={{ opacity: 0.82 }}>
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#enquire" className="btn btn-solid" style={{ padding: "0.7rem 1.15rem" }}>
              Plan a journey
            </a>
          </li>
        </ul>

        <button
          className="nav-burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          style={{
            display: "none",
            background: "none",
            border: `1px solid var(--edge-dark)`,
            color: "inherit",
            padding: "0.6rem 0.9rem",
            cursor: "pointer",
          }}
        >
          <span className="label">{open ? "Close" : "Menu"}</span>
        </button>
      </nav>

      {open ? (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "var(--basalt)",
            zIndex: -1,
            paddingTop: "7rem",
            paddingInline: "var(--gut)",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((l, i) => (
              <li
                key={l.href}
                style={{
                  borderTop: "1px solid var(--edge-dark)",
                  overflow: "hidden",
                }}
              >
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "1rem",
                    padding: "1.15rem 0",
                    animation: `rise .7s var(--ease-overshoot) ${i * 0.06}s both`,
                  }}
                >
                  <span className="mono" style={{ opacity: 0.4 }}>
                    {l.n}
                  </span>
                  <span className="display display-md">{l.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <style>{`
        .brand-mark { transition: height .6s var(--ease-elegant); }
        @media (max-width: 900px) {
          .nav-links { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </header>
  );
}
