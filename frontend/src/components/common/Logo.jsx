import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CarFront } from "lucide-react";

export default function Logo({

    size = "default",

    showTagline = true,

}) {

    const iconSize = size === "large" ? 32 : 24;

    const titleClass =

        size === "large"

            ? "text-4xl"

            : "text-2xl";

    const subtitleClass =

        size === "large"

            ? "text-base"

            : "text-sm";

    return (

        <Link
            to="/"
            className="inline-flex items-center gap-4"
        >

            <motion.div

                whileHover={{
                    rotate: -6,
                    scale: 1.05,
                }}

                whileTap={{
                    scale: .96,
                }}

                transition={{
                    duration: .2,
                }}

                className="
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    overflow-hidden
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-600
                    via-blue-600
                    to-cyan-500
                    shadow-[0_15px_40px_rgba(79,70,229,.35)]
                "
            >

                {/* Shine */}

                <div
                    className="
                        absolute
                        inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        transition-transform
                        duration-1000
                        hover:translate-x-full
                    "
                />

                <CarFront

                    size={iconSize}

                    className="relative z-10 text-white"

                />

            </motion.div>

            <div>

                <motion.h1

                    initial={{
                        opacity: 0,
                        y: 6,
                    }}

                    animate={{
                        opacity: 1,
                        y: 0,
                    }}

                    transition={{
                        delay: .1,
                    }}

                    className={`
                        ${titleClass}
                        font-black
                        tracking-tight
                        text-white
                    `}
                >

                    Campus

                    <span
                        className="
                            bg-gradient-to-r
                            from-cyan-400
                            to-indigo-400
                            bg-clip-text
                            text-transparent
                        "
                    >
                        Pool
                    </span>

                </motion.h1>

                {

                    showTagline && (

                        <p
                            className={`
                                ${subtitleClass}
                                mt-1
                                tracking-wide
                                text-slate-400
                            `}
                        >

                            Smart Ride Sharing

                        </p>

                    )

                }

            </div>

        </Link>

    );

}