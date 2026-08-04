import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Logo from "../common/Logo";

const navLinks = [
    {
        name: "Home",
        path: "/",
    },
    {
        name: "Find Lift",
        path: "/find-lift",
    },
    {
        name: "Offer Lift",
        path: "/offer-lift",
    },
];

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header
            className="
                sticky
                top-0
                z-50
                border-b
                border-slate-200
                bg-white/90
                backdrop-blur-xl
            "
        >

            <nav
                className="
                    mx-auto
                    flex
                    h-20
                    max-w-7xl
                    items-center
                    justify-between
                    px-6
                "
            >

                {/* Logo */}

                <Logo
                    showTagline={false}
                />

                {/* Desktop Navigation */}

                <div
                    className="
                        hidden
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        p-2
                        lg:flex
                    "
                >

                    {

                        navLinks.map((item)=>(

                            <NavLink

                                key={item.path}

                                to={item.path}

                                className={({isActive})=>

                                    `
                                        rounded-full
                                        px-5
                                        py-2.5
                                        text-sm
                                        font-semibold
                                        transition-all
                                        duration-300

                                        ${

                                            isActive

                                            ?

                                            "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"

                                            :

                                            "text-slate-600 hover:bg-white hover:text-slate-900"

                                        }

                                    `

                                }

                            >

                                {item.name}

                            </NavLink>

                        ))

                    }

                </div>

                {/* Desktop Buttons */}

                <div
                    className="
                        hidden
                        items-center
                        gap-3
                        lg:flex
                    "
                >

                    <motion.div

                        whileHover={{
                            y:-2,
                        }}

                        whileTap={{
                            scale:.97,
                        }}

                    >

                        <Link

                            to="/login"

                            className="
                                rounded-xl
                                border
                                border-slate-300
                                px-5
                                py-2.5
                                font-semibold
                                text-slate-700
                                transition-all
                                duration-300
                                hover:border-blue-500
                                hover:bg-blue-50
                                hover:text-blue-700
                            "

                        >

                            Login

                        </Link>

                    </motion.div>

                    <motion.div

                        whileHover={{
                            y:-2,
                        }}

                        whileTap={{
                            scale:.97,
                        }}

                    >

                        <Link

                            to="/register"

                            className="
                                rounded-xl
                                bg-gradient-to-r
                                from-blue-600
                                to-cyan-500
                                px-6
                                py-2.5
                                font-semibold
                                text-white
                                shadow-lg
                                shadow-blue-500/25
                                transition-all
                                duration-300
                                hover:shadow-blue-500/40
                            "

                        >

                            Get Started

                        </Link>

                    </motion.div>

                </div>

                {/* Mobile Button */}

                <motion.button

                    whileTap={{
                        scale:.9,
                    }}

                    onClick={()=>
                        setMenuOpen(!menuOpen)
                    }

                    className="
                        rounded-xl
                        border
                        border-slate-300
                        bg-white
                        p-3
                        text-slate-700
                        shadow-sm
                        lg:hidden
                    "

                >

                    {

                        menuOpen

                        ?

                        <X size={24}/>

                        :

                        <Menu size={24}/>

                    }

                </motion.button>

            </nav>

                        <AnimatePresence>

                {

                    menuOpen && (

                        <motion.div

                            initial={{
                                opacity: 0,
                                y: -15,
                            }}

                            animate={{
                                opacity: 1,
                                y: 0,
                            }}

                            exit={{
                                opacity: 0,
                                y: -15,
                            }}

                            transition={{
                                duration: .25,
                            }}

                            className="
                                border-t
                                border-slate-200
                                bg-white
                                lg:hidden
                            "

                        >

                            <div
                                className="
                                    mx-auto
                                    flex
                                    max-w-7xl
                                    flex-col
                                    gap-2
                                    px-6
                                    py-6
                                "
                            >

                                {

                                    navLinks.map((item) => (

                                        <NavLink

                                            key={item.path}

                                            to={item.path}

                                            onClick={() =>
                                                setMenuOpen(false)
                                            }

                                            className={({ isActive }) =>

                                                `
                                                    rounded-xl
                                                    px-4
                                                    py-3
                                                    font-medium
                                                    transition-all
                                                    duration-300

                                                    ${

                                                        isActive

                                                        ?

                                                        "bg-gradient-to-r from-blue-600 to-cyan-500 text-white"

                                                        :

                                                        "text-slate-700 hover:bg-slate-100"

                                                    }

                                                `

                                            }

                                        >

                                            {item.name}

                                        </NavLink>

                                    ))

                                }

                                <div
                                    className="
                                        my-3
                                        h-px
                                        bg-slate-200
                                    "
                                />

                                <Link

                                    to="/login"

                                    onClick={() =>
                                        setMenuOpen(false)
                                    }

                                    className="
                                        rounded-xl
                                        border
                                        border-slate-300
                                        px-4
                                        py-3
                                        text-center
                                        font-semibold
                                        text-slate-700
                                        transition-all
                                        duration-300
                                        hover:border-blue-500
                                        hover:bg-blue-50
                                        hover:text-blue-700
                                    "

                                >

                                    Login

                                </Link>

                                <Link

                                    to="/register"

                                    onClick={() =>
                                        setMenuOpen(false)
                                    }

                                    className="
                                        mt-2
                                        rounded-xl
                                        bg-gradient-to-r
                                        from-blue-600
                                        to-cyan-500
                                        px-4
                                        py-3
                                        text-center
                                        font-semibold
                                        text-white
                                        shadow-lg
                                        shadow-blue-500/25
                                        transition-all
                                        duration-300
                                        hover:shadow-blue-500/40
                                    "

                                >

                                    Get Started

                                </Link>

                            </div>

                        </motion.div>

                    )

                }

            </AnimatePresence>

        </header>

    );

}