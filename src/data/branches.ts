import { z } from "zod";

export type BranchDetails = {
  name: string;
  lat: number;
  lon: number;
  addressLine1: string;
  addressLine2: string;
  postCode: string;
  county: string;
  phone: string;
  openingHours?: string;
  about?: string;
  orderOnlineUrl?: string;
  openPositions?: Vacancy[];
  facebookUrl: string;
  googleMapsUrl?: string;
  hasDeliveryService?: boolean;
  hasJavaRepublicCoffee?: boolean;
  canSkipQueue?: boolean;
  hasTimoneysIceCream?: boolean;
};

type Vacancy = {
  store: string;
  position: string;
  hours: string;
  details: string;
};

export const Branch = z.enum([
  "Armagh",
  "Banbridge",
  "Newry",
  "Warrenpoint",
  "Lurgan",
]);
export type Branch = z.infer<typeof Branch>;

export const Branches = new Map<Branch, BranchDetails>([
  [
    "Armagh",
    {
      name: "Armagh",
      lat: 54.3455963,
      lon: -6.654045348700119,
      addressLine1: "Armagh City Shopping Centre",
      addressLine2: "Dobbin Lane",
      county: "Armagh",
      phone: "028 375 15255",
      postCode: "BT61 7AE",
      openingHours: `Monday - Thurs: 10am - 12.30am </br>
      Fri & Sat: 10am - 02:30 </br>
      Sun:10am - 02:00`,
      facebookUrl: "https://www.facebook.com/friartucks.armagh/",
      googleMapsUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJt16j-GaTYEgRqnUTNOoBR_o&key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0`,
      canSkipQueue: true,
      hasJavaRepublicCoffee: true,
      about:
        "Opening in April 2006, this restaurant has taken Friar Tuck's to a new level in restaurant design. This stylish new concept restaurant provides a feeling of modern yet traditional interior surroundings.",
    },
  ],
  [
    "Banbridge",
    {
      name: "Banbridge",
      lat: 54.3501682,
      lon: -6.2689497,
      addressLine1: "57 Bridge Street",
      addressLine2: "Banbridge",
      county: "Down",
      postCode: "BT32 3JL",
      phone: "028 406 28282",
      openingHours: `Monday - Thurs: 10am - 12.30am </br>
      Fri & Sat: 10am - 02:30 </br>
      Sun:10am - 02:00`,
      facebookUrl: "https://www.facebook.com/FriarTucksBB/",
      googleMapsUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJufZW5VLhYEgRsHh40zie5iU&key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0`,
      canSkipQueue: true,
      hasJavaRepublicCoffee: true,
      hasDeliveryService: true,
      about:
        "Our Banbridge restaurant located on the main street in Banbridge was opened in 1990. It proves popular with locals and those commuting through the town.  There is free car parking to the rear of the restaurant.",
      orderOnlineUrl: "http://friartuckswp.touchtakeaway.net/",
    },
  ],
  [
    "Newry",
    {
      name: "Newry",
      lat: 54.1781187,
      lon: -6.336704510360805,
      addressLine1: "3-5 Sugar Island",
      addressLine2: "Newry",
      county: "Down",
      postCode: "BT35 6HT",
      phone: "028 302 69119",
      openingHours: `Monday - Thurs: 10am - 12.30am </br>
      Fri & Sat: 10am - 02:30 </br>
      Sun:10am - 02:00`,
      googleMapsUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJdwL1UVbbYEgR8MiwUDolhWI&key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0`,
      facebookUrl: "https://www.facebook.com/FriarTucksNewry/",
      about: `Our Sugar Island restaurant was opened in 1984. This was our second restaurant and now acts as head office for the Friar Tuck's chain.
      </br>
      The restaurant initially started off serving the original menu and has been updated over the years in line with market trends.
      </br>
      Our Sugar Island restaurant is where all deliveries are made from in the Newry and surrounding area.  
      <br/>
      Having undergone a recent refurbishment, we find that people come in to relax over a coffee just to look at our specially commissioned wallpaper.  It features some famous Irish people……..and we welcome you to pop in and see for yourself.`,
      hasDeliveryService: true,
      hasJavaRepublicCoffee: true,
      canSkipQueue: true,
    },
  ],
  [
    "Warrenpoint",
    {
      name: "Warrenpoint",
      lat: 54.1010042,
      lon: -6.2535537,
      addressLine1: "15 Church Street",
      addressLine2: "Warrenpoint",
      county: "Down",
      postCode: "BT34 3HN",
      phone: "028 417 54444",
      openingHours: `Monday - Sunday: 12 pm - Varies (COVID) </br>
      Please call ahead before traveling.`,
      facebookUrl: "https://www.facebook.com/friartuckswarrenpoint1/",
      googleMapsUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJD6sq4HbaYEgRQ1GlNfEOC2Q&key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0`,
      canSkipQueue: true,
      hasTimoneysIceCream: true,
      hasDeliveryService: true,
      orderOnlineUrl: "http://friartuckswp.touchtakeaway.net/",
    },
  ],
  [
    "Lurgan",
    {
      name: "Lurgan",
      lat: 54.4819877,
      lon: -6.3540333,
      addressLine1: "251 Lough Rd",
      addressLine2: "Lurgan",
      county: "Armagh",
      postCode: "BT67 6NQ",
      phone: "028 383 29336",
      openingHours: `Monday - Thurs: 10am - 12.30am </br>
      Fri & Sat: 10am - 02:30 </br>
      Sun:10am - 02:00`,
      googleMapsUrl: `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJnbsgvgP7YEgRJqoigGPMPp4&key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0`,
      facebookUrl: "https://www.facebook.com/profile.php?id=100057185660918",
      hasJavaRepublicCoffee: true,
      canSkipQueue: true,
    },
  ],
]);
