import { Link, useLocation } from "react-router-dom";
import logo from "../assets/barbershop-logo.jpg";

function Header() {
  const location = useLocation();
  const isBookingPage = location.pathname === "/booking";

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <header className="h-20 flex justify-between items-center p-6 fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="flex gap-2 items-center font-bold">
        <Link
          to="/"
          onClick={handleLogoClick}
          className="flex items-center gap-2"
        >
          <img src={logo} alt="logo" className="h-20" />
          <span className="uppercase text-accent text-2xl font-black font-stretch-ultra-expanded">
            Noir
          </span>
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        {isBookingPage ? (
          <Link
            to="/"
            className="text-white bg-accent rounded-md px-4 py-2 text-xl font-bold shadow-md hover:bg-accent-dark transition-all"
          >
            Home
          </Link>
        ) : (
          <>
            <a
              href="#about"
              className="text-black text-xl font-bold hover:text-accent"
            >
              About
            </a>
            <a
              href="#services"
              className="text-black text-xl font-bold hover:text-accent"
            >
              Services
            </a>
            <a
              href="#location"
              className="text-black text-xl font-bold hover:text-accent"
            >
              Contacts
            </a>
          </>
        )}
      </nav>
    </header>
  );
}

export default Header;
