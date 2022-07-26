import { initTRPC } from "@trpc/server";
import type { Context } from "./context";
import superjson from "superjson";

export const t = initTRPC<{ ctx: Context }>()({
  transformer: superjson,
  errorFormatter({ shape }) {
    return shape;
  },
});

export const calculateCrowDistance = (
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) => {
  const R = 6371; // km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const lat1s = lat1 * (Math.PI / 180);
  const lat2s = lat2 * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1s) * Math.cos(lat2s);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

export interface IPBreakdown {
  status: string;
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
  query: string;
}

export const retrieveIPBreakdown = async (ip: string): Promise<IPBreakdown> => {
  console.log(ip);
  let ipAddress = ip === "" || ip.includes("::") ? "86.136.170.246" : ip;
  const url = `http://ip-api.com/json/${ipAddress}`;
  const response = await fetch(url);
  return response.json();
};
