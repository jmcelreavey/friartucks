export type BranchDetail = {
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

export const Branches = new Map<BranchType, BranchDetail>([
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
      openingHours: `Monday - Thurs: 10am - 12.30am \n
      Fri & Sat: 10am - 02:30 \n
      Sun:10am - 02:00`,
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
      openingHours: `Monday - Thurs: 10am - 12.30am \n
      Fri & Sat: 10am - 02:30 \n
      Sun:10am - 02:00`,
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
      openingHours: `Monday - Thurs: 10am - 12.30am \n
      Fri & Sat: 10am - 02:30 \n
      Sun:10am - 02:00`,
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
      openingHours: `Monday - Sunday: 12 pm - Varies (COVID) \n
      Please call ahead before traveling.`,
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
      openingHours: `Monday - Thurs: 10am - 12.30am \n
      Fri & Sat: 10am - 02:30 \n
      Sun:10am - 02:00`,
    },
  ],
]);
