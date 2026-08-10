import type { PhotoKey } from "./photos";

export type Tour = {
  no: string;
  title: string;
  geez: string;
  days: number;
  region: string;
  season: string;
  from: number;
  photo: PhotoKey;
  blurb: string;
  route: string[];
  itinerary: { day: string; place: string; note: string }[];
};

export const tours: Tour[] = [
  {
    no: "01",
    title: "The Rock-Hewn North",
    geez: "ላሊበላ",
    days: 6,
    region: "Amhara · Tigray",
    season: "Oct – Mar",
    from: 1180,
    photo: "lalibela",
    blurb:
      "Eleven churches quarried downward out of living rock in the twelfth century, and the pilgrim roads that still lead to them.",
    route: ["Addis Ababa", "Bahir Dar", "Gondar", "Lalibela", "Aksum"],
    itinerary: [
      {
        day: "01",
        place: "Addis Ababa",
        note: "Arrival, the National Museum and Lucy, then the Merkato's spice alleys before dusk.",
      },
      {
        day: "02",
        place: "Bahir Dar · Lake Tana",
        note: "Papyrus tankwa out to the island monasteries; Tis Issat, the Blue Nile falls, in the afternoon light.",
      },
      {
        day: "03",
        place: "Gondar",
        note: "Fasilides' castle compound and the ceiling of angels at Debre Berhan Selassie.",
      },
      {
        day: "04",
        place: "Lalibela",
        note: "The northern cluster at first light, before the tour buses. Bete Medhane Alem, Bete Maryam.",
      },
      {
        day: "05",
        place: "Lalibela",
        note: "Bete Giyorgis from the trench rim, then a mule track up to Asheton Maryam.",
      },
      {
        day: "06",
        place: "Aksum",
        note: "The stelae field, the tombs, and the chapel where the Ark is said to rest.",
      },
    ],
  },
  {
    no: "02",
    title: "Simien Escarpment Traverse",
    geez: "ስሜን",
    days: 8,
    region: "North Gondar",
    season: "Sep – Mar",
    from: 1640,
    photo: "simien",
    blurb:
      "Eight days walking the roof of Africa — gelada troops at four hundred strong, and a drop of a thousand metres at your boot.",
    route: ["Debark", "Sankaber", "Geech", "Chennek", "Ras Dashen"],
    itinerary: [
      {
        day: "01",
        place: "Debark",
        note: "Park registration, scout and mule crew, kit check at 2,850 m.",
      },
      {
        day: "02",
        place: "Sankaber",
        note: "First escarpment views. Lammergeier riding the thermals off the cliff.",
      },
      {
        day: "03",
        place: "Geech",
        note: "Jinbar waterfall and Kedadit lookout; gelada grazing within ten metres.",
      },
      {
        day: "04",
        place: "Imet Gogo",
        note: "A 3,926 m promontory with the escarpment on three sides. The best morning of the trek.",
      },
      {
        day: "05",
        place: "Chennek",
        note: "Walia ibex country. Ethiopian wolf sightings are possible on the Bwahit approach.",
      },
      {
        day: "06",
        place: "Ambiko",
        note: "Over Bwahit pass at 4,200 m and down into the Mesheha valley.",
      },
      {
        day: "07",
        place: "Ras Dashen",
        note: "Pre-dawn start for the 4,550 m summit — the highest ground in Ethiopia.",
      },
      {
        day: "08",
        place: "Debark",
        note: "Descent, hot springs at Ayna Meda, and the road back to Gondar.",
      },
    ],
  },
  {
    no: "03",
    title: "Danakil & the Salt Road",
    geez: "ዳናኪል",
    days: 5,
    region: "Afar",
    season: "Nov – Feb",
    from: 1320,
    photo: "dallol",
    blurb:
      "The lowest, hottest inhabited place on earth. Sulphur terraces at Dallol, a lava lake at Erta Ale, and camel caravans still cutting salt by hand.",
    route: ["Mekele", "Hamed Ela", "Dallol", "Erta Ale", "Afdera"],
    itinerary: [
      {
        day: "01",
        place: "Mekele → Hamed Ela",
        note: "Down through the escarpment to 120 m below sea level. Camp on the salt flat.",
      },
      {
        day: "02",
        place: "Dallol",
        note: "Sulphur and potash terraces at sunrise, Lake Assal, and the Afar salt cutters at work.",
      },
      {
        day: "03",
        place: "Erta Ale",
        note: "Night ascent across young basalt to the caldera rim. The lava lake after dark.",
      },
      {
        day: "04",
        place: "Afdera",
        note: "Descent at first light; float in the mineral lake before the road north.",
      },
      {
        day: "05",
        place: "Mekele",
        note: "Return over the escarpment, with the Tigray rock churches en route if time allows.",
      },
    ],
  },
  {
    no: "04",
    title: "Lower Omo",
    geez: "ኦሞ",
    days: 9,
    region: "South Omo · SNNPR",
    season: "Jun–Sep, Dec–Feb",
    from: 1890,
    photo: "omo",
    blurb:
      "Sixteen peoples inside one river basin. Travelled slowly, with introductions made in advance and nothing photographed without consent.",
    route: ["Arba Minch", "Konso", "Turmi", "Omorate", "Jinka"],
    itinerary: [
      {
        day: "01",
        place: "Addis → Arba Minch",
        note: "The Rift Valley lakes road; Chamo and Abaya from the Bridge of God.",
      },
      {
        day: "02",
        place: "Dorze · Chencha",
        note: "Bamboo elephant houses, weaving on the backstrap loom, false-banana bread.",
      },
      {
        day: "03",
        place: "Konso",
        note: "The walled terrace towns — a UNESCO cultural landscape and a masterclass in dry-stone farming.",
      },
      {
        day: "04",
        place: "Turmi",
        note: "Hamar country. If the calendar allows, a bull-jumping ceremony.",
      },
      {
        day: "05",
        place: "Omorate",
        note: "Across the Omo by boat to a Dassanech village on the far bank.",
      },
      {
        day: "06",
        place: "Turmi · Dimeka",
        note: "Monday market — the largest gathering in the south, and the least staged.",
      },
      {
        day: "07",
        place: "Mago",
        note: "Mursi territory inside the national park, entered with a local mediator.",
      },
      {
        day: "08",
        place: "Jinka",
        note: "The Ari highlands, honey and coffee smallholdings, the South Omo Research Centre.",
      },
      {
        day: "09",
        place: "Addis Ababa",
        note: "Flight north; last dinner and a coffee ceremony at the house.",
      },
    ],
  },
  {
    no: "05",
    title: "Harar & the Eastern Road",
    geez: "ሐረር",
    days: 4,
    region: "Harari · Dire Dawa",
    season: "Year round",
    from: 760,
    photo: "harar",
    blurb:
      "Three hundred and sixty-eight alleys inside a sixteenth-century wall, eighty-two mosques, and a man who feeds hyenas by hand at the Fallana gate.",
    route: ["Dire Dawa", "Harar Jugol", "Koremi", "Babille"],
    itinerary: [
      {
        day: "01",
        place: "Dire Dawa",
        note: "The Kefira market and the old French railway quarter.",
      },
      {
        day: "02",
        place: "Harar Jugol",
        note: "Inside the wall on foot: Rimbaud's house, the Harari interiors, Arthur's shrine.",
      },
      {
        day: "03",
        place: "Koremi · Babille",
        note: "A dry-stone Argobba village, then the valley of marvels and the elephant sanctuary.",
      },
      {
        day: "04",
        place: "Return",
        note: "Chat market at dawn, then the road or rail back to Addis.",
      },
    ],
  },
  {
    no: "06",
    title: "North & South Combined",
    geez: "ኢትዮጵያ",
    days: 16,
    region: "Nationwide",
    season: "Oct – Feb",
    from: 3480,
    photo: "highlands",
    blurb:
      "The full arc: the Christian north, the Rift lakes, and the Omo. Sixteen days, one guide, no handovers between operators.",
    route: ["Addis", "Bahir Dar", "Lalibela", "Aksum", "Arba Minch", "Omo"],
    itinerary: [
      {
        day: "01–06",
        place: "The Historic North",
        note: "Lake Tana, Gondar, Lalibela and Aksum, at the pace of the itinerary above.",
      },
      {
        day: "07–08",
        place: "Simien",
        note: "Two days on the escarpment — Sankaber to Imet Gogo and back.",
      },
      {
        day: "09–10",
        place: "Rift Valley",
        note: "Langano, Abijatta-Shalla, and the flamingo shallows on the drive south.",
      },
      {
        day: "11–15",
        place: "Lower Omo",
        note: "Konso, Turmi, Omorate and the Dimeka market week.",
      },
      {
        day: "16",
        place: "Addis Ababa",
        note: "Tomoca coffee, the Mercato, and a farewell dinner at Yod Abyssinia.",
      },
    ],
  },
];
