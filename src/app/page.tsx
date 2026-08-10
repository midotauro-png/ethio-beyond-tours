import Nav from "@/components/Nav";
import SiteChrome from "@/components/SiteChrome";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Guide from "@/components/Guide";
import Interlude from "@/components/Interlude";
import Ledger from "@/components/Ledger";
import Atlas from "@/components/Atlas";
import Terms from "@/components/Terms";
import Voices from "@/components/Voices";
import Enquiry from "@/components/Enquiry";
import Colophon from "@/components/Colophon";
import { tours } from "@/lib/tours";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: "Ethio Beyond Tours",
  description:
    "A licensed, locally owned Ethiopian tour house running private journeys to Lalibela, the Simien Mountains, the Danakil Depression, Harar and the Lower Omo.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "P.O. Box 13378, Bole Sub-city",
    addressLocality: "Addis Ababa",
    addressCountry: "ET",
  },
  telephone: "+251960265436",
  email: "book@ethiobeyondtours.com",
  areaServed: "Ethiopia",
  priceRange: "$$$",
  founder: {
    "@type": "Person",
    name: "Alazar Gezaheghn",
    jobTitle: "Founder & Lead Guide",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "212",
  },
  makesOffer: tours.map((t) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "TouristTrip",
      name: t.title,
      description: t.blurb,
      itinerary: t.route.map((r) => ({ "@type": "City", name: r })),
    },
    price: t.from,
    priceCurrency: "USD",
  })),
};

export default function Home() {
  return (
    <div className="grain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteChrome />
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Guide />
        <Interlude
          photo="coffee"
          quote="Coffee was not discovered here. It was simply already growing."
          attribution="The ceremony runs three rounds — abol, tona, baraka. Never leave before the third."
          position="center 55%"
        />
        <Ledger />
        <Atlas />
        <Interlude
          photo="crowd"
          quote="Timkat, and the whole city goes to the water in white."
          attribution="19 January · Gondar, Lalibela and Addis. Book eleven months ahead."
          position="center 40%"
        />
        <Terms />
        <Voices />
        <Enquiry />
      </main>
      <Colophon />
    </div>
  );
}
