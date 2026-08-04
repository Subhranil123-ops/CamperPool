import { motion } from "framer-motion";
import AnimatedBackground from "./AnimatedBackground";
import NoiseOverlay from "./NoiseOverlay";
import FeatureItem from "./FeatureItem";
import Logo from "../../components/common/Logo";

import {
    ShieldCheck,
    Route,
    GraduationCap,
} from "lucide-react";

export default function AuthLayout({
    title,
    subtitle,
    children,
}) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#09090B]">

            <AnimatedBackground />

            <NoiseOverlay />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl">

                {/* LEFT */}

                <motion.div
                    initial={{
                        opacity: 0,
                        x: -40,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: .8,
                    }}
                    className="
            hidden
            lg:flex
            w-1/2
            flex-col
            justify-center
            px-16
          "
                >

                    <Logo />
                    <h1
                        className="
              mt-6
              text-6xl
              font-black
              leading-tight
              text-white
            "
                    >
                        Safe Ride
                        <br />

                        Sharing
                        <span
                            className="
                block
                bg-gradient-to-r
                from-indigo-400
                via-cyan-400
                to-blue-400
                bg-clip-text
                text-transparent
              "
                        >
                            For Students
                        </span>
                    </h1>

                    <p
                        className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-slate-400
            "
                    >
                        Built exclusively for university students.

                        Drivers can travel from anywhere,
                        while passengers safely join and
                        leave rides inside the campus.
                    </p>

                    <div className="mt-14 space-y-7">

                        <FeatureItem
                            icon={
                                <ShieldCheck className="h-6 w-6 text-indigo-400" />
                            }
                            title="Campus Safe"
                            description="Students board and exit rides only inside the campus."
                            delay={0.1}
                        />

                        <FeatureItem
                            icon={
                                <Route className="h-6 w-6 text-cyan-400" />
                            }
                            title="Route Based Matching"
                            description="Find drivers already travelling along your route."
                            delay={0.25}
                        />

                        <FeatureItem
                            icon={
                                <GraduationCap className="h-6 w-6 text-emerald-400" />
                            }
                            title="Verified Community"
                            description="Built specifically for students."
                            delay={0.4}
                        />

                    </div>

                </motion.div>

                {/* RIGHT */}

                <div
                    className="
            flex
            w-full
            items-center
            justify-center
            px-6
            py-10
            lg:w-1/2
          "
                >
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 40,
                            scale: .96,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                        }}
                        transition={{
                            duration: .6,
                        }}
                        className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              shadow-[0_25px_80px_rgba(0,0,0,.45)]
            "
                    >

                        {/* Glass Reflection */}

                        <div
                            className="
                pointer-events-none
                absolute
                inset-x-0
                top-0
                h-24
                bg-gradient-to-b
                from-white/10
                to-transparent
              "
                        />

                        {/* Border Glow */}

                        <div
                            className="
                absolute
                inset-0
                rounded-[32px]
                border
                border-indigo-500/10
              "
                        />

                        <div className="relative z-10 p-10">

                            <motion.h2
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: .25,
                                }}
                                className="
                  text-center
                  text-4xl
                  font-bold
                  tracking-tight
                  text-white
                "
                            >
                                {title}
                            </motion.h2>

                            <p
                                className="
                  mt-3
                  text-center
                  text-slate-400
                  leading-7
                "
                            >
                                {subtitle}
                            </p>

                            <div className="mt-10">

                                {children}

                            </div>

                        </div>

                    </motion.div>

                </div>

            </div>

        </div>
    );
}