User Collection Database Design
{
"\_id": ObjectId,
"name": "Md Hossahin",
"email": "hossahin@example.com",
"password": "hashed_password",
"role": "User | Guideer | Admin",
"profileImage": "https://example.com/avatar.jpg",
"wishlist": [ObjectId("..."), ObjectId("...")], // references TourismPackages
"emergencyContact": "+8801987654321",
"travelProfile": {
"favoriteDestinations": ["Cox's Bazar", "Sundarbans"],
},
"languages": ["English", "Bengali"], // useful for Guideer
"assignedPackages": [ObjectId("...")], // for Guideer role
"travelHistory": [
{
"packageId": ObjectId("..."), // reference to TourismPackages
"guideerId": ObjectId("..."), // optional: the guide who assisted
"startDate": "2025-09-01",
"endDate": "2025-09-03",
"status": "completed | cancelled | upcoming",
"ratingGiven": 4, // optional, if user gave review
"reviewId": ObjectId("...") // reference to Reviews collection
}
],
"createdAt": "2025-09-25T08:00:00Z",
"updatedAt": "2025-09-25T08:00:00Z"
}
