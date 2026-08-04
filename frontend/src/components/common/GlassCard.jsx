import { motion } from "framer-motion";

export default function GlassCard({

    children,

    className = "",

    hover = true,

}) {

    return (

        <motion.div

            whileHover={
                hover
                    ? {
                        y: -4,
                        scale: 1.01,
                    }
                    : {}
            }

            transition={{
                duration: .25,
            }}

            className={`
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-2xl
                shadow-[0_25px_70px_rgba(0,0,0,.35)]
                transition-all
                duration-300
                hover:border-indigo-500/20
                hover:shadow-[0_35px_90px_rgba(79,70,229,.18)]

                ${className}
            `}
        >

            {/* Top Reflection */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-0
                    h-28
                    bg-gradient-to-b
                    from-white/10
                    to-transparent
                "
            />

            {/* Bottom Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    -bottom-24
                    left-1/2
                    h-48
                    w-48
                    -translate-x-1/2
                    rounded-full
                    bg-indigo-500/10
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                "
            />

            {/* Border Glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    rounded-3xl
                    border
                    border-white/5
                "
            />

            {/* Content */}

            <div className="relative z-10">

                {children}

            </div>

        </motion.div>

    );

}