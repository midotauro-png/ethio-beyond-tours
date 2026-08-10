// Verified Unsplash photographs — each one visually checked before use.
const BASE = "https://images.unsplash.com/photo-";
const PLUS = "https://plus.unsplash.com/premium_photo-";
const FLAGGED = "https://images.unsplash.com/flagged/photo-";

export const photo = {
  // Worshippers at a rock-hewn church in the Lalibela complex
  lalibela: `${FLAGGED}1572644973628-e9be84915d59`,
  // Deacon in saffron robes against a hewn church wall
  deacon: `${BASE}1782283849015-df78517d4765`,
  // Pilgrim wrapped in a natala against tuff stone
  pilgrim: `${BASE}1782283034357-47f4185af8f8`,
  // Timkat procession, white robes, ceremonial umbrellas
  timkat: `${BASE}1549687880-f68be654594c`,
  // Meskel / feast crowd, monochrome
  crowd: `${BASE}1564101183558-eacfd7e02d4f`,
  // Terraced escarpment of the northern highlands
  highlands: `${BASE}1572888195250-3037a59d3578`,
  // Simien massif
  simien: `${PLUS}1666872507875-d02ee42e8564`,
  // Gelada on the escarpment edge
  gelada: `${PLUS}1661961289299-b80fa2b2cf91`,
  // Dallol sulphur pools, Danakil Depression
  dallol: `${BASE}1564101151838-630e722d7b1f`,
  // Afar badlands
  afar: `${BASE}1571946080923-a81668948f52`,
  // Omo Valley — young woman, Lower Omo
  omo: `${BASE}1524734627574-bbb084c4ee66`,
  // Omo Valley — village elders, thatched compound
  omoVillage: `${BASE}1530313292289-fa316f332666`,
  // Blue Nile / highland falls
  falls: `${BASE}1626197626028-46c0cf75813f`,
  // Jebena pouring, coffee ceremony
  coffee: `${BASE}1774529233247-d3f34ed11994`,
  // Spice trader, open market
  market: `${BASE}1778079247396-9c0e01c83c8b`,
  // Walled city — arcaded facade
  harar: `${BASE}1597807132214-cd7d59a77714`,
  // Pilgrims above a highland valley
  overlook: `${BASE}1646647690513-6570e797f7c2`,
  // Highland dusk over the escarpment road
  dusk: `${BASE}1580320209809-a0c51e645872`,
  // Shepherd boy on the rock, highland rim
  shepherd: `${BASE}1508914127305-fa5114b81b3f`,
  // Path to the rock churches, red tuff
  path: `${BASE}1646647689051-ed33eecf1c21`,
  // Eskista — traditional dance
  dance: `${BASE}1764145144753-922ae256714b`,
} as const;

export type PhotoKey = keyof typeof photo;

export function src(key: PhotoKey, w = 1600, q = 78) {
  return `${photo[key]}?auto=format&fit=crop&w=${w}&q=${q}`;
}
