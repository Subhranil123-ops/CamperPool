import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Main Gradient */}

      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-[#09090B]
          via-[#0F172A]
          to-[#09090B]
        "
      />

      {/* Aurora 1 */}

      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-40, 40, -40],
          rotate: [0, 15, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-52
          -left-40
          h-[520px]
          w-[520px]
          rounded-full
          bg-indigo-600/20
          blur-[130px]
        "
      />

      {/* Aurora 2 */}

      <motion.div
        animate={{
          x: [120, -100, 120],
          y: [20, -30, 20],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-160px]
          top-16
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/20
          blur-[140px]
        "
      />

      {/* Aurora 3 */}

      <motion.div
        animate={{
          x: [-40, 80, -40],
          y: [60, -60, 60],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-200px]
          left-1/3
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/15
          blur-[160px]
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Floating Orb */}

      <motion.div
        animate={{
          y: [-25, 25, -25],
          x: [-15, 15, -15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/4
          top-1/3
          h-5
          w-5
          rounded-full
          bg-cyan-400
          shadow-[0_0_35px_#22d3ee]
        "
      />

      {/* Floating Orb */}

      <motion.div
        animate={{
          y: [20, -20, 20],
          x: [10, -10, 10],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-1/4
          bottom-1/4
          h-4
          w-4
          rounded-full
          bg-indigo-400
          shadow-[0_0_30px_#818cf8]
        "
      />

    </div>
  );
}