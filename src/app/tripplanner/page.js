'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TripForm from '../../components/TripForm';
import Feedback from '../../components/Feedback';

export default function TripPlanner() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row justify-center items-center py-16 bg-white relative">
          <div className="md:w-1/2 flex justify-center">
            <img src="/images/robo.png" alt="Robot Guide" className="w-72" />
          </div>
          <div className="md:w-1/2 text-center md:text-left px-6">
            <h1 className="text-4xl font-bold text-gray-800">Plan Your Perfect Sri Lankan Adventure.</h1>
            <p className="text-lg text-gray-600 mt-4">
              Let our AI-powered trip planner guide you to Sri Lanka’s top experiences, hidden treasures, and unforgettable moments, making your adventure truly special.
            </p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
              Start Planning
            </button>
          </div>
        </section>

        {/* Visa Reminder Section */}
        <section className="bg-blue-100 py-8">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl font-semibold text-gray-800">
              Before you plan your trip, make sure you submit your visa application!
            </h2>
            <p className="text-gray-600 mt-2">Click below to apply for a Sri Lankan visa if you haven’t already.</p>
            <a href="/visa-application">
              <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600">
                Apply for Visa
              </button>
            </a>
          </div>
        </section>

        {/* Trip Form Section */}
        <section className="bg-blue-100 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Plan Your Perfect Sri Lankan Adventure.
            </h2>
            <TripForm />
          </div>
        </section>

        {/* Feedback Section */}
        <section className="bg-white py-16">
          <Feedback />
        </section>
      </main>
      <Footer />
    </div>
  );
}
