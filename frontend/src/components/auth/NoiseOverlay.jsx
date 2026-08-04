import { motion } from "framer-motion";

export default function NoiseOverlay() {
  return (
    <>
      {/* Noise Texture */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.08 }}
        transition={{ duration: 1.2 }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          opacity-10
          mix-blend-soft-light
        "
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255,255,255,.08) 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, rgba(255,255,255,.08) 1px, transparent 1px)
          `,
          backgroundSize: "14px 14px",
        }}
      />

      {/* Vignette */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,.35))]
        "
      />
    </>
  );
}