import { NavLink } from "react-router-dom"
import logo from '../assets/barbershop-logo.jpg'
 function Header() {
  return (
    <header className="h-20 flex justify-between items-center p-4 ">
      <div className="flex gap-2 items-center">
        <img src={logo} alt="logo" className="h-20" />
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-redish" : "text-black"
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
            isActive ? "text-redish" : "text-black"
          }
        >
          Services
        </NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="location">Location</NavLink>
      </nav>
    </header>
  );
 }
 
 export default Header
 