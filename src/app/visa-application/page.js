'use client';  // Mark this as a client component

import { useState } from 'react';

export default function VisaApplication() {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    nationality: '',
    passportBio: null,
    passportPhoto: null,
    travelHistory: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);  // For now, simply log the form data. You can add backend integration here.
  };

  return (
    <div className="min-h-screen bg-white py-16">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Visa Application Form</h1>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Nationality</label>
            <input
              type="text"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Passport Bio Page</label>
            <input
              type="file"
              name="passportBio"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Passport Size Photo</label>
            <input
              type="file"
              name="passportPhoto"
              onChange={handleFileChange}
              className="w-full p-3 border rounded-lg"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Travel History (Last 12 months)</label>
            <textarea
              name="travelHistory"
              value={formData.travelHistory}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
              rows="4"
              placeholder="Enter details about your travel history in the last 12 months."
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600">
            Submit Visa Application
          </button>
        </form>
      </div>
    </div>
  );
}
