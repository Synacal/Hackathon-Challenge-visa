'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TripList from '../../components/TripList';

export default function MyTrips() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">My Trips</h1>
          <p className="text-gray-600 mt-4">Your saved trips are here. Review, modify, or book your next adventure.</p>
        </div>

        {/* Visa Status Section */}
        <section className="bg-blue-50 py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Visa Application Status</h2>
            <p className="text-gray-600 mt-2">You have a pending visa application for your upcoming trip.</p>
            <a href="/visa-application-status">
              <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
                Track Visa Application
              </button>
            </a>
          </div>
        </section>

        <section className="mt-10 container mx-auto">
          <TripList />
        </section>
      </main>
      <Footer />
    </div>
  );
}
