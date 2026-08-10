import Image from "next/image";
import { src, type PhotoKey } from "@/lib/photos";

export default function Interlude({
  photo,
  quote,
  attribution,
  position = "center",
}: {
  photo: PhotoKey;
  quote: string;
  attribution: string;
  position?: string;
}) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "min(76vh, 44rem)",
        display: "grid",
        alignItems: "end",
        padding: "var(--gut)",
        overflow: "hidden",
      }}
    >
      <Image
        src={src(photo, 2000)}
        alt=""
        fill
        sizes="100vw"
        className="img-cover duotone"
        style={{ objectPosition: position }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(18,16,13,.92) 0%, rgba(18,16,13,.35) 45%, rgba(18,16,13,.15) 100%)",
        }}
      />
      <blockquote
        className="reveal"
        style={{ position: "relative", margin: 0, maxWidth: "28ch" }}
      >
        <p
          className="display"
          style={{
            fontSize: "clamp(1.7rem, 3.6vw, 3.2rem)",
            fontStyle: "italic",
            fontVariationSettings: '"WONK" 1, "SOFT" 12',
            lineHeight: 1.06,
            margin: 0,
            color: "var(--parchment)",
          }}
        >
          {quote}
        </p>
        <footer className="mono" style={{ marginTop: "1.25rem", opacity: 0.6 }}>
          {attribution}
        </footer>
      </blockquote>
    </section>
  );
}
