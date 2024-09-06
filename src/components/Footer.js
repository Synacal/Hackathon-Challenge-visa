export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="flex justify-center space-x-12">
        <a href="#" className="hover:underline">Explore</a>
        <a href="#" className="hover:underline">Trip Planner</a>
        <a href="#" className="hover:underline">My Trips</a>
        <a href="#" className="hover:underline">Mobile App</a>
      </div>
      <div className="flex justify-center mt-6 space-x-4">
        <img src="/images/logo.png" alt="Logo" className="h-10" />
      </div>
      <p className="text-center mt-4">&copy; 2024 Ceylon 360 | All Rights Reserved</p>
    </footer>
  );
}
