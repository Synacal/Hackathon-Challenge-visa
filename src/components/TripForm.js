export default function TripForm() {
    return (
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-around items-center text-lg font-semibold">
            <span className="text-blue-500">Planning</span>
            <span className="text-gray-400">Select Trip</span>
            <span className="text-gray-400">Final Trip</span>
          </div>
          <div className="mt-4 h-2 bg-gray-300 rounded-full">
            <div className="h-full w-1/3 bg-orange-500 rounded-full"></div>
          </div>
        </div>
  
        {/* Trip Preferences Form */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Budget Per Person</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Trip Duration</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Interests/Activities</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Number of People</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Transportation Preference</button>
          <button className="bg-gray-100 px-4 py-2 rounded-full text-gray-700">Climate Preference</button>
        </div>
  
        {/* Chat Box */}
        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <div className="space-y-4">
            <div className="flex space-x-2">
              <div className="bg-blue-500 text-white p-2 rounded-full">🤖</div>
              <div className="bg-white p-4 rounded-lg shadow-md text-gray-700">Hi there! Ready to explore Sri Lanka?</div>
            </div>
            <div className="flex space-x-2">
              <div className="bg-blue-500 text-white p-2 rounded-full">🤖</div>
              <div className="bg-white p-4 rounded-lg shadow-md text-gray-700">Perfect! What is the budget you are looking at?</div>
            </div>
            <div className="text-right">
              <div className="bg-blue-500 text-white p-4 rounded-lg inline-block">My Budget is below 10,000 LKR</div>
            </div>
          </div>
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full px-4 py-2 rounded-lg border border-gray-300"
            />
            <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg">Send</button>
          </div>
        </div>
      </div>
    );
  }
  