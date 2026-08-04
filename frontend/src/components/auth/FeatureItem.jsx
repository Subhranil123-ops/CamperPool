import { motion } from "framer-motion";

export default function FeatureItem({
    icon,
    title,
    description,
    delay = 0,
}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
                duration: 0.5,
                delay,
            }}
            className="flex items-start gap-4"
        >
            {/* Icon */}

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                {icon}
            </div>

            {/* Text */}

            <div>

                <h3 className="text-base font-semibold text-white">
                    {title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-gray-400">
                    {description}
                </p>

            </div>

        </motion.div>
    );
}