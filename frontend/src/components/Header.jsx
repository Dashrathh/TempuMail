import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#111827] px-4 py-3 shadow-md flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0 sm:px-6 sm:py-4">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-100 text-center sm:text-left">
        <Link to="/">TempuMail</Link>
      </h1>

      <nav className="flex justify-center space-x-4 sm:space-x-6">
        <Link
          to="/aboutus"
          className="text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition duration-200 hover:bg-white hover:text-black text-sm sm:text-base"
        >
          About Us
        </Link>

        <Link
          to="/howitswork"
          className="text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg transition duration-200 hover:bg-white hover:text-black text-sm sm:text-base"
        >
          How It Works
        </Link>
      </nav>
    </header>
  );
};

export default Header;
