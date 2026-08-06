import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "relative overflow-hidden rounded-3xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default:
          "border-slate-800 bg-slate-900/80 backdrop-blur-xl shadow-[0_10px_60px_rgba(0,0,0,.35)]",

        glass:
          "border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_20px_80px_rgba(0,0,0,.45)]",

        gradient:
          "border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 shadow-[0_20px_80px_rgba(0,0,0,.45)]",
      },

      padding: {
        none: "p-0",
        sm: "p-5",
        md: "p-7",
        lg: "p-9",
        xl: "p-12",
      },

      hover: {
        true: "hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(37,99,235,.15)]",
        false: "",
      },
    },

    defaultVariants: {
      variant: "default",
      padding: "lg",
      hover: true,
    },
  }
);

export default function Card({
  className,
  variant,
  padding,
  hover,
  children,
  ...props
}) {
  return (
    <div
      className={cn(
        cardVariants({
          variant,
          padding,
          hover,
        }),
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.08),transparent_35%)]" />

      <div className="relative z-10">{children}</div>
    </div>
  );
}