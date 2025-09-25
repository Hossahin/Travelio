"use server";

import dbConnect, { collectionNameObj } from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (payload) => {
  const userCollection = dbConnect(collectionNameObj.userCollection);
  const { email, name, password } = payload;

  if (!email || !name || !password) {
    return { success: false, message: "Missing required fields" };
  }

  const existingUser = await userCollection.findOne({ email });
  if (existingUser) {
    return { success: false, message: "Email already registered" };
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  payload.password = hashedPassword;

  const result = await userCollection.insertOne(payload);

  if (result.acknowledged) {
    return {
      success: true,
      message: "Registration successful",
      userId: result.insertedId.toString(),
    };
  }

  return { success: false, message: "Database insert failed" };
};
