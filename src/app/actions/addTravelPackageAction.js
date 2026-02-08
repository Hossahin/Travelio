"use server";

import { addTravelPackage } from "@/lib/addTravelPackage";

/**
 * Server Action: wraps addTravelPackage
 */
export async function createPackage(data) {
  return await addTravelPackage(data);
}
