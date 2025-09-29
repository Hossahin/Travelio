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

  const userData = {
    ...payload,
    role: "user",
    emergencyContact: null,
    dateOfBirth: null,
    languages: [],

    // --- User Specific ---
    travelProfile: {
      favoriteDestinations: [],
      bio: null,
      budgetRange: null,
      wishlist: [],
      bookings: [],
      travelHistory: [],
    },

    // --- Guideer/Agency Specific ---
    guideerInfo: {
      isVerified: true,
      bio: null,
      location: null,
      yearsOfExperience: null,
      assignedPackages: [],
      postedPackages: [],
      earnings: {
        totalEarned: 0,
        pendingPayments: 0,
        completedPayments: 0,
      },
      completedTours: 0,
      averageRating: 0,
      totalReviews: 0,
      guideerStatus: "Active",
    },

    // --- Social Links ---
    socialLinks: {
      facebook: null,
      instagram: null,
    },
    createdAt: new Date(),
  };

  const result = await userCollection.insertOne(userData);

  if (result.acknowledged) {
    return {
      success: true,
      message: "Registration successful",
      userId: result.insertedId.toString(),
    };
  }

  return { success: false, message: "Database insert failed" };
};
