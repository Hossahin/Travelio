const user = {
  _id: ObjectId,
  name: String,
  email: String,
  password: String, // hashed
  role: "user", // "user" | "guideer" | "admin"
  phone: null,
  dateOfBirth: null,
  languages: [],
  socialLinks: {
    facebook: null,
    instagram: null,
  },

  // --- User Specific ---
  wishlist: [],
  bookings: [],
  travelHistory: [],

  // --- Guideer/Agency Specific (default null) ---
  guideerInfo: {
    bio: null,
    location: null,
    specialization: [],
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
    guideerStatus: "Pending", // Pending | Active | Suspended
  },

  // --- Admin Specific ---
  permissions: [],

  // Common
  isVerified: false, // Admin will verify
  createdAt: new Date(),
  updatedAt: new Date(),
};
