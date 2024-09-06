'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ExploreSection from '../components/ExploreSection';
import Card from '../components/Card';  // Import the Card component

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative">
          <img src="/images/herobg.png" alt="Hero Background" className="w-full object-cover h-[600px]" />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center space-y-6">
            <img src="/images/homelogo.png" alt="Logo" className="h-20" />
            
            
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              Explore Sri Lanka
            </button>
          </div>
        </section>

        {/* Must Visit Locations Section */}
        <section className="py-20 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">Must Visit Locations For You!</h2>
          <ExploreSection />
        </section>

        {/* Adventure Section */}
        <section className="py-20 bg-white">
          <h2 className="text-3xl font-bold text-center mb-10">Unforgettable Experiences Await You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-10">
            <Card
              title="Adventure & Nature"
              description="Trek through lush jungles, go on thrilling safaris, or dive into crystal-clear waters."
              image="/images/elephant.png"
              buttonText="Explore Adventures"
            />
            <Card
              title="Wellness & Relaxation"
              description="Rejuvenate your mind and body with wellness retreats and spa sessions."
              image="/images/card2.png"
              buttonText="Find Your Peace"
            />
            <Card
              title="Local Living & Culinary"
              description="Experience life like a local with home-stay visits and market tours."
              image="/images/card3.png"
              buttonText="Live Like a Local"
            />
            <Card
              title="Cultural & Historical"
              description="Explore ancient temples and timeless traditions of Sri Lanka."
              image="/images/temple.png"
              buttonText="Discover Culture"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
