import { EyeIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const trips = [
  {
    name: "Trip to Sigiriya Ayugiri Wellness Resort",
    travelers: 2,
    startDate: "30.08.2024",
    endDate: "01.09.2024",
  },
  {
    name: "Trip to Sigiriya Ayugiri Wellness Resort",
    travelers: 2,
    startDate: "30.08.2024",
    endDate: "01.09.2024",
  },
  {
    name: "Trip to Sigiriya Ayugiri Wellness Resort",
    travelers: 2,
    startDate: "30.08.2024",
    endDate: "01.09.2024",
  },
];

export default function TripList() {
  return (
    <div className="space-y-6">
      {trips.map((trip, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
          <div>
            <p className="font-semibold text-lg">{trip.name}</p>
            <p className="text-gray-600">Number of Travelers: {trip.travelers}</p>
            <p className="text-gray-600">Start Date: {trip.startDate}</p>
            <p className="text-gray-600">End Date: {trip.endDate}</p>
          </div>
          <div className="flex space-x-4 text-gray-500">
            <EyeIcon className="h-6 w-6 hover:text-blue-500 cursor-pointer" />
            <PencilIcon className="h-6 w-6 hover:text-yellow-500 cursor-pointer" />
            <TrashIcon className="h-6 w-6 hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      ))}
    </div>
  );
}
