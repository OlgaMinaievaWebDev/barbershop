import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/barbershop-logo.jpg";

function Header() {
  const location = useLocation();
  const isBookingPage = location.pathname === "/booking";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="flex justify-between items-center p-2 sm:p-4">
        {/* Logo Section */}
        <div className="flex gap-2 items-center">
          <Link
            to="/"
            onClick={handleLogoClick}
            className="flex items-center gap-2"
          >
            <img src={logo} alt="logo" className="h-16 sm:h-20" />
            <span className="uppercase text-accent text-2xl sm:text-3xl font-black font-stretch-ultra-expanded">
              Noir
            </span>
          </Link>
        </div>

        {/* Burger Menu Button (Visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="sm:hidden flex items-center justify-center p-2"
        >
          <span className="text-2xl">&#9776;</span>
        </button>

        {/* Navigation Links */}
        <nav
          className={`sm:flex ${
            isMenuOpen ? "block" : "hidden"
          } sm:mt-0 flex-col sm:flex-row items-center sm:gap-6`}
        >
          {isBookingPage ? (
            <Link
              to="/"
              className="text-white bg-accent rounded-md px-4 py-2 text-xl font-bold shadow-md hover:bg-accent-dark transition-all"
            >
              Home
            </Link>
          ) : (
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-6">
              <a
                href="#about"
                className="text-black text-lg sm:text-xl font-bold hover:text-accent"
              >
                About
              </a>
              <a
                href="#services"
                className="text-black text-lg sm:text-xl font-bold hover:text-accent"
              >
                Services
              </a>
              <a
                href="#location"
                className="text-black text-lg sm:text-xl font-bold hover:text-accent"
              >
                Contacts
              </a>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
