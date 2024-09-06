export default function Feedback() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">We Value Your Feedback!</h2>
      <p className="text-lg text-gray-600 mb-6">How was your trip planning experience?</p>
      <div className="flex justify-center space-x-6 mb-6">
        <div className="text-6xl">😀</div>
        <div className="text-6xl">😐</div>
        <div className="text-6xl">🙁</div>
      </div>
      <form className="max-w-md mx-auto">
        <textarea
          placeholder="We'd love to hear from you..."
          className="w-full p-4 border border-gray-300 rounded-lg mb-4"
        />
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 w-full">
          Submit
        </button>
      </form>
    </div>
  );
}
