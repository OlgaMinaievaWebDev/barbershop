import { NavLink } from "react-router-dom";
import logo from "../assets/barbershop-logo.jpg";

function Header() {
  return (
    <header className="h-20 flex justify-between items-center p-6">
      <div className="flex gap-2 items-center font-bold">
        <img src={logo} alt="logo" className="h-20" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-accent text-2xl font-bold uppercase"
              : "text-black text-2xl font-bold uppercase"
          }
          end
        >
          Noir
        </NavLink>
      </div>

      {/* NavBar component dynamically maps over links  */}
      <nav className="flex items-center gap-4">
        {["services", "about", "location"].map((link) => (
          <NavLink
            key={link}
            to={link}
            className={({ isActive }) =>
              isActive
                ? "text-accent text-xl font-bold"
                : "text-black text-xl font-bold"
            }
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default Header;
