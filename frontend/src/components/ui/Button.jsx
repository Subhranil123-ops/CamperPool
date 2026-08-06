import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  `
  inline-flex
  items-center
  justify-center
  gap-2
  rounded-2xl
  font-semibold
  transition-all
  duration-300

  disabled:pointer-events-none
  disabled:opacity-60

  focus:outline-none
  focus:ring-2
  focus:ring-blue-500/30
  `,
  {
    variants: {
      variant: {
        primary: `
          bg-gradient-to-r
          from-blue-600
          to-cyan-500

          text-white

          hover:scale-[1.02]
          hover:shadow-xl
          hover:shadow-blue-600/30
        `,

        secondary: `
          bg-slate-800
          border
          border-slate-700

          text-slate-200

          hover:bg-slate-700
        `,

        outline: `
          border
          border-slate-700

          bg-transparent

          text-slate-200

          hover:border-blue-500
          hover:bg-slate-900
        `,

        ghost: `
          bg-transparent

          text-slate-300

          hover:bg-slate-800
        `,

        danger: `
          bg-gradient-to-r
          from-rose-600
          to-red-600

          text-white

          hover:shadow-lg
          hover:shadow-red-500/30
        `,
      },

      size: {
        sm: "h-10 px-4 text-sm",

        md: "h-12 px-5",

        lg: "h-14 px-8 text-base",

        icon: "h-12 w-12 p-0",
      },
    },

    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export default function Button({
  className,
  variant,
  size,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}