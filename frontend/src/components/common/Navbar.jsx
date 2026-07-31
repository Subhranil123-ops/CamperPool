import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, CarFront } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Find Lift", path: "/find-lift" },
  { name: "Offer Lift", path: "/offer-lift" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-xl font-bold text-blue-600"
        >
          <CarFront size={28} />
          CampusPool
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <NavLink
            to="/login"
            className="rounded-lg border border-blue-600 px-4 py-2 font-medium text-blue-600 transition hover:bg-blue-50"
          >
            Login
          </NavLink>

          <NavLink
            to="/register"
            className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          >
            Register
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="flex flex-col p-4">

            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-3 ${
                    isActive
                      ? "bg-blue-50 font-semibold text-blue-600"
                      : "hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <hr className="my-4" />

            <NavLink
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg border border-blue-600 px-3 py-2 text-center font-medium text-blue-600"
            >
              Login
            </NavLink>

            <NavLink
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="mt-3 rounded-lg bg-blue-600 px-3 py-2 text-center font-medium text-white"
            >
              Register
            </NavLink>

          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;