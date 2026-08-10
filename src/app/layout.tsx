import type { Metadata } from "next";
import { Fraunces, Poppins, IBM_Plex_Mono, Noto_Serif_Ethiopic } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const body = Poppins({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const geez = Noto_Serif_Ethiopic({
  variable: "--font-geez",
  subsets: ["ethiopic"],
  weight: ["400", "500"],
  display: "swap",
});

const url = "https://ethiobeyondtours.com";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: "Ethio Beyond Tours — Ethiopia, walked with people from here",
    template: "%s · Ethio Beyond Tours",
  },
  description:
    "A small, licensed Ethiopian tour house in Addis Ababa. Rock-hewn Lalibela, the Simien escarpment, the Danakil, and the Lower Omo — privately guided, never in convoy.",
  keywords: [
    "Ethiopia tours",
    "Ethio Beyond Tours",
    "Lalibela tour",
    "Danakil Depression tour",
    "Omo Valley tour",
    "Simien Mountains trek",
    "private guide Ethiopia",
  ],
  openGraph: {
    type: "website",
    url,
    siteName: "Ethio Beyond Tours",
    title: "Ethio Beyond Tours — Ethiopia, walked with people from here",
    description:
      "Privately guided journeys through the Ethiopian highlands, the Danakil and the Lower Omo. Licensed, small-group, locally owned.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${geez.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
