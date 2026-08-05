import { motion } from "framer-motion";
import { ArrowRight, LoaderCircle } from "lucide-react";

export default function AuthButton({
  children,
  loading = false,
  loadingText = "Loading....",
  type = "submit",
}) {
  return (
    <motion.button
      whileHover={{
        y: -2,
        scale: 1.01,
      }}
      whileTap={{
        scale: 0.98,
      }}
      disabled={loading}
      type={type}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        bg-gradient-to-r
        from-indigo-600
        via-blue-600
        to-cyan-500
        py-4
        font-semibold
        text-white
        shadow-[0_20px_50px_rgba(79,70,229,0.35)]
        transition-all
        duration-300
        hover:shadow-[0_30px_70px_rgba(79,70,229,0.45)]
        disabled:cursor-not-allowed
        disabled:opacity-70
      "
    >

      {/* Shine Effect */}

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
          group-hover:translate-x-full
        "
      />

      <span
        className="
          relative
          z-10
          flex
          items-center
          justify-center
          gap-2
        "
      >

        {loading ? (
          <>
            <LoaderCircle
              size={20}
              className="animate-spin"
            />

            {loadingText}

          </>
        ) : (
          <>
            {children}

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </>
        )}

      </span>

    </motion.button>
  );
}