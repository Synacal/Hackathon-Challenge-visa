'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import CardGrid from '../../components/CardGrid';

export default function Explore() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Carousel Section */}
        <section className="bg-gradient-to-b from-blue-100 to-blue-200 py-16">
          <Carousel />
        </section>

        {/* Explore Sri Lanka Section */}
        <section className="py-16 bg-white">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Explore Sri Lanka</h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover the beauty of Sri Lanka by exploring its diverse landscapes, rich culture, and thrilling adventures.
            </p>
          </div>

          <CardGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}
