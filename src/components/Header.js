export default function Header() {
  return (
    <header className="flex justify-between items-center px-10 py-6 bg-white shadow-lg">
      <img src="/images/logo.png" alt="Logo" className="h-10" />
      <nav className="space-x-6 text-lg">
        <a href="/" className="hover:text-blue-500">Home</a>
        <a href="/explore" className="hover:text-blue-500">Explore</a>
        <a href="/tripplanner" className="hover:text-blue-500">Trip Planner</a>
        <a href="/mytrips" className="hover:text-blue-500">My Trips</a>
      </nav>
    </header>
  );
}
