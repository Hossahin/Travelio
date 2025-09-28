import FeaturedPackages from "@/components/FeaturedPackages";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar top */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main className="flex-1 w-full max-w-screen-2xl mx-auto">
        <HeroSection />
        <FeaturedPackages />
        {/* More content can go here */}
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
