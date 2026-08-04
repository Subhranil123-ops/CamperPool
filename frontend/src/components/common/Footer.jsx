import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../common/Logo";

const productLinks = [
  {
    name: "Find Lift",
    path: "/find-lift",
  },
  {
    name: "Offer Lift",
    path: "/offer-lift",
  },
  {
    name: "Login",
    path: "/login",
  },
  {
    name: "Register",
    path: "/register",
  },
];

const companyLinks = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Privacy Policy",
    path: "/privacy",
  },
  {
    name: "Terms of Service",
    path: "/terms",
  },
];

export default function Footer() {

  return (

    <footer
      className="
                mt-28
                border-t
                border-slate-200
                bg-slate-50
            "
    >

      <div
        className="
                    mx-auto
                    grid
                    max-w-7xl
                    gap-14
                    px-6
                    py-16
                    lg:grid-cols-4
                "
      >

        {/* Brand */}

        {/* Brand */}

        <div className="max-w-sm">

          <Logo
            showTagline={false}
          />

          <span
            className="
            mt-4
            inline-flex
            rounded-full
            bg-blue-50
            px-3
            py-1
            text-xs
            font-semibold
            tracking-wide
            text-blue-700
        "
          >

            SAFE CAMPUS MOBILITY

          </span>

          <h2
            className="
            mt-5
            text-3xl
            font-bold
            leading-tight
            text-slate-900
        "
          >

            Smarter rides.

            <br />

            Better campus life.

          </h2>

          <p
            className="
            mt-5
            leading-8
            text-slate-600
        "
          >

            CampusPool connects students and
            drivers travelling around the university.
            Share rides, reduce travel costs,
            and make every commute safer.

          </p>

          <div
            className="
            mt-8
            flex
            items-center
            gap-4
        "
          >

            {

              [
                {
                  icon: FaGithub,
                  href: "https://github.com/",
                },
                {
                  icon: FaLinkedin,
                  href: "https://linkedin.com/",
                },
              ].map(({ icon: Icon, href }, index) => (

                <motion.a

                  key={index}

                  href={href}

                  target="_blank"

                  rel="noreferrer"

                  whileHover={{
                    y: -4,
                    scale: 1.05,
                  }}

                  whileTap={{
                    scale: .95,
                  }}

                  className="
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        text-slate-600
                        shadow-sm
                        transition-all
                        duration-300
                        hover:border-blue-500
                        hover:bg-blue-600
                        hover:text-white
                    "

                >

                  <Icon size={20} />

                </motion.a>

              ))

            }

          </div>

        </div>

        {/* Product */}

        {/* Product */}

        <div>

          <h3
            className="
            text-lg
            font-bold
            text-slate-900
        "
          >
            Product
          </h3>

          <ul
            className="
            mt-6
            space-y-4
        "
          >

            {

              productLinks.map((item) => (

                <li
                  key={item.path}
                >

                  <Link

                    to={item.path}

                    className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            text-slate-600
                            transition-all
                            duration-300
                            hover:text-blue-600
                        "

                  >

                    <span
                      className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-slate-300
                                transition-all
                                duration-300
                                group-hover:bg-blue-600
                            "
                    />

                    {item.name}

                  </Link>

                </li>

              ))

            }

          </ul>

        </div>

        {/* Company */}

        {/* Company */}

        <div>

          <h3
            className="
            text-lg
            font-bold
            text-slate-900
        "
          >
            Company
          </h3>

          <ul
            className="
            mt-6
            space-y-4
        "
          >

            {

              companyLinks.map((item) => (

                <li
                  key={item.path}
                >

                  <Link

                    to={item.path}

                    className="
                            group
                            inline-flex
                            items-center
                            gap-2
                            text-slate-600
                            transition-all
                            duration-300
                            hover:text-blue-600
                        "

                  >

                    <span
                      className="
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-slate-300
                                transition-all
                                duration-300
                                group-hover:bg-blue-600
                            "
                    />

                    {item.name}

                  </Link>

                </li>

              ))

            }

          </ul>

        </div>

        {/* Contact */}

        {/* Contact */}

        <div>

          <h3
            className="
            text-lg
            font-bold
            text-slate-900
        "
          >

            Contact

          </h3>

          <div
            className="
            mt-6
            space-y-5
        "
          >

            {/* Email */}

            <motion.div

              whileHover={{
                x: 6,
              }}

              className="
                flex
                items-start
                gap-4
            "

            >

              <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                "
              >

                <Mail size={20} />

              </div>

              <div>

                <p
                  className="
                        font-semibold
                        text-slate-900
                    "
                >

                  Email

                </p>

                <a

                  href="mailto:support@campuspool.in"

                  className="
                        mt-1
                        block
                        text-slate-600
                        transition
                        hover:text-blue-600
                    "

                >

                  support@campuspool.in

                </a>

              </div>

            </motion.div>

            {/* Phone */}

            <motion.div

              whileHover={{
                x: 6,
              }}

              className="
                flex
                items-start
                gap-4
            "

            >

              <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                "
              >

                <Phone size={20} />

              </div>

              <div>

                <p
                  className="
                        font-semibold
                        text-slate-900
                    "
                >

                  Phone

                </p>

                <p
                  className="
                        mt-1
                        text-slate-600
                    "
                >

                  +91 XXXXX XXXXX

                </p>

              </div>

            </motion.div>

            {/* Location */}

            <motion.div

              whileHover={{
                x: 6,
              }}

              className="
                flex
                items-start
                gap-4
            "

            >

              <div
                className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    bg-blue-50
                    text-blue-600
                "
              >

                <MapPin size={20} />

              </div>

              <div>

                <p
                  className="
                        font-semibold
                        text-slate-900
                    "
                >

                  Campus

                </p>

                <p
                  className="
                        mt-1
                        leading-7
                        text-slate-600
                    "
                >

                  Jawaharlal Nehru University

                  <br />

                  New Delhi

                </p>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

      <div
        className="
                    border-t
                    border-slate-200
                "
      >

        <div
          className="
                        mx-auto
                        flex
                        max-w-7xl
                        flex-col
                        items-center
                        justify-between
                        gap-4
                        px-6
                        py-6
                        text-sm
                        text-slate-500
                        md:flex-row
                    "
        >

          <p>

            © {new Date().getFullYear()} CampusPool.

            All rights reserved.

          </p>

          <p>

            Built for safer, smarter and more affordable campus transportation.

          </p>

        </div>

      </div>

    </footer>

  );

}