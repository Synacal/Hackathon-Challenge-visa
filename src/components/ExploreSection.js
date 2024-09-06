export default function ExploreSection() {
  return (
    <div className="flex justify-center space-x-6 px-6">
      <div className="flex flex-col items-center space-y-4">
        <img src="/images/card1.png" alt="Horton Plains" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        <p className="text-lg font-semibold">Horton Plains</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn More</button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img src="/images/card2.png" alt="Kandy" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        <p className="text-lg font-semibold">Kandy</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn More</button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img src="/images/card3.png" alt="Ella" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        <p className="text-lg font-semibold">Ella</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn More</button>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <img src="/images/card4.png" alt="Mirissa" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
        <p className="text-lg font-semibold">Mirissa</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Learn More</button>
      </div>
    </div>
  );
}
