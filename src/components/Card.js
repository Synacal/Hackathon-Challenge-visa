export default function Card({ title, description, image, buttonText }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 text-center space-y-4">
      <img src={image} alt={title} className="w-full h-40 object-cover rounded-md" />
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">{buttonText}</button>
    </div>
  );
}
