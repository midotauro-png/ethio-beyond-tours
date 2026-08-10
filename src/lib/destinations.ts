import type { PhotoKey } from "./photos";

export type Destination = {
  slug: string;
  n: string;
  name: string;
  geez: string;
  region: string;
  elevation: string;
  bestSeason: string;
  photo: PhotoKey;
  gallery: PhotoKey[];
  meta: string;
  note: string;
  intro: string[];
  highlights: string[];
  relatedTourNos: string[];
};

export const destinations: Destination[] = [
  {
    slug: "lalibela",
    n: "01",
    name: "Lalibela",
    geez: "ላሊበላ",
    region: "Amhara",
    elevation: "2,500 m",
    bestSeason: "Oct – Mar",
    photo: "deacon",
    gallery: ["lalibela", "pilgrim", "path"],
    meta: "2,500 m · Amhara",
    note: "Eleven churches cut downward into the tuff in the 12th century, still in daily liturgical use. Go at first light or at Genna.",
    intro: [
      "Eleven churches, carved down into living rock rather than built up from it, still stand exactly where twelfth-century masons quarried them — and they are still in daily use, not a museum piece.",
      "Arrive before the tour buses. The northern cluster at dawn is close to empty; deacons cross the courtyards in saffron, and the only sound is the scrape of a mule track outside the trench walls.",
    ],
    highlights: [
      "Bete Giyorgis, the monolithic Church of St. George, from the trench rim",
      "The northern cluster at first light — Bete Medhane Alem, Bete Maryam",
      "Genna (Ethiopian Christmas, 7 January) and Timkat pilgrimage season",
      "A mule track up to the cliffside monastery at Asheton Maryam",
    ],
    relatedTourNos: ["01", "06"],
  },
  {
    slug: "simien",
    n: "02",
    name: "Simien",
    geez: "ስሜን ተራሮች",
    region: "North Gondar",
    elevation: "4,550 m",
    bestSeason: "Sep – Mar",
    photo: "gelada",
    gallery: ["simien", "shepherd", "overlook"],
    meta: "4,550 m · Gondar",
    note: "A collapsed volcanic massif with a thousand-metre escarpment. Gelada, walia ibex, and the highest ground in the country.",
    intro: [
      "A collapsed shield volcano left a thousand-metre escarpment along the roof of Africa — walked over several days, not glimpsed from a viewpoint car park.",
      "Gelada troops graze the cliff edge in the hundreds, entirely unbothered by people on foot. Walia ibex and, with luck, an Ethiopian wolf, live higher up toward Ras Dashen.",
    ],
    highlights: [
      "Imet Gogo, a 3,926 m promontory with the escarpment on three sides",
      "Gelada troops grazing within ten metres of the path",
      "Ras Dashen, 4,550 m — the highest ground in Ethiopia",
      "Lammergeier riding the thermals off the escarpment edge",
    ],
    relatedTourNos: ["02", "06"],
  },
  {
    slug: "danakil",
    n: "03",
    name: "Danakil",
    geez: "ዳናኪል",
    region: "Afar",
    elevation: "−125 m",
    bestSeason: "Nov – Feb",
    photo: "dallol",
    gallery: ["dallol", "afar"],
    meta: "−125 m · Afar",
    note: "Sulphur springs, potash flats and one of the few permanent lava lakes on earth. Only travelled November to February.",
    intro: [
      "The lowest, hottest inhabited place on earth — sulphur and potash terraces at Dallol, salt flats worked by hand, and a lava lake at Erta Ale that has been erupting since 1906.",
      "This is expedition travel, not a resort. We only run it November to February, with a support vehicle, a scout and enough water for the return.",
    ],
    highlights: [
      "Sulphur and potash terraces at Dallol, best at sunrise",
      "A night ascent to the Erta Ale caldera rim and its lava lake",
      "Afar salt caravans still cutting slabs by hand at Lake Assal",
      "A float in the mineral lake at Afdera before the road north",
    ],
    relatedTourNos: ["03"],
  },
  {
    slug: "lower-omo",
    n: "04",
    name: "Lower Omo",
    geez: "ደቡብ ኦሞ",
    region: "SNNPR",
    elevation: "500 m",
    bestSeason: "Jun – Sep, Dec – Feb",
    photo: "omoVillage",
    gallery: ["omo", "omoVillage", "market"],
    meta: "500 m · SNNPR",
    note: "Sixteen peoples along one river. Visited with introductions and consent, never as a photo safari.",
    intro: [
      "Sixteen distinct peoples live inside one river basin — Hamar, Mursi, Dassanech, Konso and others — each with its own language, dress and calendar of markets and ceremonies.",
      "We travel slowly here, with introductions made in advance through people we already know. Nothing is photographed without asking first.",
    ],
    highlights: [
      "The walled terrace towns of Konso, a UNESCO cultural landscape",
      "Turmi and a Hamar bull-jumping ceremony, calendar permitting",
      "Crossing the Omo by boat to a Dassanech village at Omorate",
      "Dimeka's Monday market — the largest, least staged gathering in the south",
    ],
    relatedTourNos: ["04", "06"],
  },
  {
    slug: "harar",
    n: "05",
    name: "Harar Jugol",
    geez: "ሐረር ጁጎል",
    region: "Harari",
    elevation: "1,885 m",
    bestSeason: "Year round",
    photo: "harar",
    gallery: ["harar", "market"],
    meta: "1,885 m · Harari",
    note: "A walled Muslim city of 368 alleys and 82 mosques. Coffee, chat, and the hyena man at the Fallana gate.",
    intro: [
      "A sixteenth-century walled city of 368 alleys and 82 mosques, one of the oldest Muslim settlements in Africa, and a UNESCO World Heritage site since 2006.",
      "Travelled on foot: Rimbaud's old house, the Harari interiors with their raised platforms and woven baskets, and — after dark — a man who has fed the resident hyenas by hand for decades.",
    ],
    highlights: [
      "The old town on foot: Rimbaud's house and the Harari interiors",
      "The hyena man at the Fallana gate, after dark",
      "Koremi, a dry-stone Argobba village nearby",
      "The dawn chat market and the old French railway quarter in Dire Dawa",
    ],
    relatedTourNos: ["05"],
  },
  {
    slug: "lake-tana",
    n: "06",
    name: "Lake Tana",
    geez: "ጣና ሐይቅ",
    region: "Amhara",
    elevation: "1,788 m",
    bestSeason: "Oct – Mar",
    photo: "falls",
    gallery: ["falls", "coffee"],
    meta: "1,788 m · Amhara",
    note: "The source of the Blue Nile, ringed by island monasteries reached by papyrus boat.",
    intro: [
      "Ethiopia's largest lake, and the source of the Blue Nile, ringed by island and peninsula monasteries — some dating to the fourteenth century — reached only by papyrus tankwa or small boat.",
      "Downstream, Tis Issat drops the young Blue Nile over a basalt escarpment; the light is best in the afternoon.",
    ],
    highlights: [
      "Papyrus tankwa out to the island monasteries",
      "Tis Issat, the Blue Nile falls, in afternoon light",
      "Manuscript and mural painting inside the peninsula churches",
      "A coffee ceremony on the Bahir Dar waterfront",
    ],
    relatedTourNos: ["01", "06"],
  },
  {
    slug: "aksum",
    n: "07",
    name: "Aksum",
    geez: "አክሱም",
    region: "Tigray",
    elevation: "2,131 m",
    bestSeason: "Oct – Mar",
    photo: "highlands",
    gallery: ["highlands", "dusk"],
    meta: "2,131 m · Tigray",
    note: "Granite stelae up to 33 metres, subterranean tombs, and the chapel that claims the Ark of the Covenant.",
    intro: [
      "Capital of the ancient Aksumite Empire, and by tradition the resting place of the Ark of the Covenant — granite stelae up to 33 metres tall stand over tombs cut into the bedrock beneath them.",
      "The chapel that claims the Ark sits apart, guarded by a single monk who alone may enter it — you will not go inside, but you will stand where the claim has stood for centuries.",
    ],
    highlights: [
      "The stelae field and the fallen Great Stele, once the largest single stone ever erected",
      "The subterranean tombs of King Kaleb and King Gebre Meskel",
      "The chapel of the Tabot, said to hold the Ark of the Covenant",
      "The Queen of Sheba's bath and the ruins of her palace at Dungur",
    ],
    relatedTourNos: ["01", "06"],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}
