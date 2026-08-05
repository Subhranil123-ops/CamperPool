import { motion } from "framer-motion";

export default function AuthInput({
  label,
  icon,
  type = "text",
  placeholder,
  required = true,
  autoComplete = "off",
  ...props
}) {
  return (
    <div className="space-y-2">

      <label
        htmlFor={props.name || props.id}
        className="text-sm font-medium tracking-wide text-slate-300"
      >
        {label}
      </label>

      <motion.div
        whileFocus={{ scale: 1.01 }}
        className="
          group
          relative
          overflow-hidden
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
          transition-all
          duration-300
          hover:border-indigo-500/30
          focus-within:border-indigo-500
          focus-within:shadow-[0_0_35px_rgba(99,102,241,0.25)]
        "
      >

        {/* Glow */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            opacity-0
            transition
            duration-500
            group-focus-within:opacity-100
            bg-gradient-to-r
            from-indigo-500/10
            via-cyan-500/10
            to-indigo-500/10
          "
        />

        {icon && (
          <div
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              text-slate-500
              transition-colors
              duration-300
              group-focus-within:text-indigo-400
            "
          >
            {icon}
          </div>
        )}

        <input
          {...props}
          id={props.name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={placeholder}
          className="
            relative
            w-full
            bg-transparent
            py-4
            pr-5
            text-white
            placeholder:text-slate-500
            outline-none
            transition-all
            duration-300
          "
          style={{
            paddingLeft: icon ? "56px" : "20px",
          }}
        />

      </motion.div>

    </div>
  );
}