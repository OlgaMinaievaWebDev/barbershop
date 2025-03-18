import { Link } from "react-router-dom";
import logo from "../assets/barbershop-logo.jpg";

function Header() {
  return (
    <header className="h-20 flex justify-between items-center p-6 fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
      <div className="flex gap-2 items-center font-bold">
        <img src={logo} alt="logo" className="h-20" />
        <Link to="/" className="text-black text-2xl font-bold">
          <span className="uppercase text-accent font-black font-stretch-ultra-expanded">
            Noir
          </span>
        </Link>
      </div>
      <nav className="flex items-center gap-4">
        <Link
          to="/about"
          className="text-black text-xl font-bold hover:text-accent"
        >
          About
        </Link>
        <Link
          to="/services"
          className="text-black text-xl font-bold hover:text-accent"
        >
          Services
        </Link>
        <Link
          to="/location"
          className="text-black text-xl font-bold hover:text-accent"
        >
          Contacts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
