import { NavLink } from "react-router-dom"
import logo from '../assets/barbershop-logo.jpg'
 function Header() {
  return (
    <header className="h-20 flex justify-between items-center p-6">
      <div className="flex gap-2 items-center font-bold">
        <img src={logo} alt="logo" className="h-20" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-accent text-2xl font-bold"
              : "text-black text-2xl font-bold"
          }
          end
        >
          Noir
        </NavLink>
      </div>
      <nav className="flex items-center gap-4">
        <NavLink
          to="services"
          className={({ isActive }) =>
            isActive
              ? "text-accent text-xl font-bold"
              : "text-black text-xl font-bold"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive
              ? "text-accent text-xl font-bold"
              : "text-black text-xl font-bold"
          }
        >
          About
        </NavLink>
        <NavLink
          to="location"
          className={({ isActive }) =>
            isActive
              ? "text-accent text-xl font-bold"
              : "text-black text-xl font-bold"
          }
        >
          Location
        </NavLink>
      </nav>
    </header>
  );
 }
 
 export default Header
 