"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Page furniture that has to run in the browser: the scroll hairline,
 * the cursor dot, and the single IntersectionObserver that drives every
 * `.reveal` element on the page.
 */
export default function SiteChrome() {
  const [progress, setProgress] = useState(0);
  const dot = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 },
    );

    const targets = document.querySelectorAll(
      ".reveal, .reveal-wipe, .reveal-frame",
    );
    if (reduced) {
      targets.forEach((t) => t.classList.add("is-in"));
    } else {
      targets.forEach((t) => io.observe(t));
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const h = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(h > 0 ? window.scrollY / h : 0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = dot.current;
    if (!el) return;
    el.style.opacity = "1";

    let raf = 0;
    let x = -50;
    let y = -50;
    let cx = -50;
    let cy = -50;

    const move = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      const over = (e.target as HTMLElement)?.closest?.(
        "a, button, input, textarea, select, [data-cursor]",
      );
      dot.current?.classList.toggle("is-live", Boolean(over));
    };

    const loop = () => {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
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

  return (
    <div aria-hidden>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: 2,
          width: `${progress * 100}%`,
          background: "var(--ochre)",
          zIndex: 100,
          transition: "width 90ms linear",
        }}
      />
      <div ref={dot} className="cursor-dot" />

      <style>{`
        .cursor-dot {
          position: fixed;
          top: 0; left: 0;
          width: 9px; height: 9px;
          border-radius: 999px;
          background: var(--ochre);
          pointer-events: none;
          z-index: 120;
          opacity: 0;
          mix-blend-mode: difference;
          transition: width .35s var(--ease-overshoot), height .35s var(--ease-overshoot), background .35s ease;
        }
        .cursor-dot.is-live {
          width: 34px; height: 34px;
          background: color-mix(in oklab, var(--gold) 70%, transparent);
        }
      `}</style>
    </div>
  );
}
