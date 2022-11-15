import { NavLink } from "react-router-dom";
import { FaCodepen, FaHome, FaInfoCircle } from "react-icons/fa";
import { MdComputer, MdEmail } from "react-icons/md";

const Navbar = () => {
  return (
    <header className="h-[8vh] md:h-[10vh] flex flex-col items-center justify-center">
      <nav className="text-lg font-semibold mt-2">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary scale-110 p-1 rounded-lg inline-block duration-300 my-shadow2 "
              : "  p-1 rounded-lg inline-block duration-300 my-shadow2"
          }
        >
          <FaHome className="text-xl md:text-2xl" />
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary scale-110 duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
              : " duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
          }
        >
          <FaInfoCircle className="text-xl md:text-2xl" />
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary scale-110 duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
              : " duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
          }
        >
          <MdComputer className="text-xl md:text-2xl" />
        </NavLink>
        <NavLink
          to="projects"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary scale-110 duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
              : " duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
          }
        >
          <FaCodepen className="text-xl md:text-2xl" />
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white bg-primary scale-110 duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
              : " duration-300 ml-6 lg:ml-10 p-1 rounded-lg inline-block my-shadow2"
          }
        >
          <MdEmail className="text-xl md:text-2xl" />
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
