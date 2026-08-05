import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff } from "lucide-react";

export default function PasswordField({
    label,
    placeholder,
    autoComplete,
    error,
    ...props
}) {

    const [showPassword, setShowPassword] = useState(false);

    return (

        <div className="space-y-2">

            <label
                htmlFor={props.name || props.id}
                className="text-sm font-medium tracking-wide text-slate-300"
            >
                {label}
            </label>

            <motion.div

                whileHover={{
                    scale: 1.01,
                }}

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
                    focus-within:shadow-[0_0_35px_rgba(99,102,241,.25)]
                "

            >

                {/* Focus Glow */}

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

                {/* Lock Icon */}

                <Lock

                    size={18}

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

                />

                {/* Password Input */}

                <input
                    {...props}
                    id={props.name || props.id}

                    type={
                        showPassword
                            ? "text"
                            : "password"
                    }

                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className="
                        w-full
                        bg-transparent
                        py-4
                        pl-14
                        pr-14
                        text-white
                        placeholder:text-slate-500
                        outline-none
                    "
                />

                {/* Eye Button */}

                <button

                    type="button"

                    onClick={() =>
                        setShowPassword(!showPassword)
                    }

                    className="
                        absolute
                        right-5
                        top-1/2
                        -translate-y-1/2
                        text-slate-500
                        transition-all
                        duration-300
                        hover:text-white
                    "

                >

                    {
                        showPassword
                            ? <EyeOff size={19} />
                            : <Eye size={19} />
                    }

                </button>

            </motion.div>
            {
                error && (
                    <p className="mt-2 text-sm text-red-400">
                        {error}
                    </p>
                )
            }
        </div>

    );

}