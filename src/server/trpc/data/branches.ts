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
};

type Vacancy = {
  store: string;
  position: string;
  hours: string;
  details: string;
};

export const Branch = {
  Armagh: "armagh",
  Banbridge: "banbridge",
  Newry: "newry",
  Warrenpoint: "warrenpoint",
  Lurgan: "lurgan",
};

type BranchType = typeof Branch[keyof typeof Branch];

export const Branches = new Map<BranchType, BranchDetails>([
  [
    "armagh",
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
    },
  ],
  [
    "banbridge",
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
    },
  ],
  [
    "newry",
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
    },
  ],
  [
    "warrenpoint",
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
      googleMapsUrl: `https://www.google.com/maps/embed/v1/streetview?location=54.1010%2C-6.2535&key=AIzaSyBN6PrFQIW38viBGwecW9OGXQbL0luCsG0`,
    },
  ],
  [
    "lurgan",
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
    },
  ],
]);
