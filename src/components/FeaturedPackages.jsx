import Image from "next/image";

export default function FeaturedPackages() {
  // Mock data (DB theke fetch korle replace kore dio)
  const packages = [
    {
      id: 1,
      title: "Maldives Getaway",
      description: "Enjoy 5 nights in the Maldives with luxury stay.",
      price: 1200,
      image: "/image/img1.jpg",
    },
    {
      id: 2,
      title: "Paris Adventure",
      description: "3 nights in Paris with guided city tour.",
      price: 900,
      image: "/image/img2.jpg",
    },
    {
      id: 3,
      title: "Bangkok Escape",
      description: "4 days exploring Bangkok’s culture & nightlife.",
      price: 700,
      image: "/image/img3.jpg",
    },
    {
      id: 4,
      title: "Bali Retreat",
      description: "Relax in Bali for 6 days with spa & activities.",
      price: 1100,
      image: "/image/img3.jpg",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-400">
            Featured Packages
          </h2>
          <p className="mt-2 text-gray-600">
            Discover our latest 4 travel packages, handpicked for you.
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition"
            >
              <div className="relative h-48 w-full">
                <Image
                
                  src={pkg.image}
                  alt={pkg.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-2xl"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {pkg.description}
                </p>
                <p className="text-blue-400 font-bold mt-3">${pkg.price}</p>
                <button className="mt-4 w-full bg-blue-400 text-white font-medium py-2 rounded-xl hover:bg-blue-500 transition">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}