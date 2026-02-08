import dbConnect, { collectionNameObj } from "./dbConnect";

/**
 * Insert a new travel package into MongoDB
 * @param {Object} data - travel package data from form
 */
export async function addTravelPackage(data) {
  try {
    const collection = dbConnect(collectionNameObj.travelPackageCollection);

    const result = await collection.insertOne({
      ...data,
      createdAt: new Date(),
    });

    return { success: true, id: result.insertedId };
  } catch (error) {
    console.error("Failed to insert travel package:", error);
    return { success: false, error: error.message };
  }
}
