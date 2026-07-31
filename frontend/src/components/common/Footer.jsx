import { Link } from "react-router-dom";
import { CarFront, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-10 md:flex-row md:justify-between">

        {/* Logo & Description */}
        <div className="max-w-sm">
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-blue-600"
          >
            <CarFront size={30} />
            CampusPool
          </Link>

          <p className="mt-4 text-gray-600 leading-7">
            CampusPool is a trusted campus ride-sharing platform where
            students can offer or find rides safely, save time, reduce travel
            costs, and build a stronger campus community.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>

            <li>
              <Link to="/find-lift" className="hover:text-blue-600">
                Find Lift
              </Link>
            </li>

            <li>
              <Link to="/offer-lift" className="hover:text-blue-600">
                Offer Lift
              </Link>
            </li>

            <li>
              <Link to="/login" className="hover:text-blue-600">
                Login
              </Link>
            </li>

            <li>
              <Link to="/register" className="hover:text-blue-600">
                Register
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-gray-800">
            Connect With Us
          </h3>

          <div className="flex items-center gap-5 text-2xl text-gray-700">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-600"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-600"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:campuspool@gmail.com"
              className="transition hover:text-blue-600"
            >
              <Mail size={22} />
            </a>

          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} CampusPool. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;