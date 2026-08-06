import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import InputError from "@/components/ui/InputError";

const Field = forwardRef(
  (
    {
      id,
      label,
      icon: Icon,

      error,

      textarea = false,
      select = false,

      helper,

      className,

      children,

      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">

        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-semibold tracking-wide text-slate-200"
          >
            {label}
          </label>
        )}

        <div
          className={cn(
            `
            group
            relative
            rounded-2xl
            border
            transition-all
            duration-300

            ${
              error
                ? "border-rose-500/70 ring-4 ring-rose-500/10"
                : "border-slate-700 hover:border-blue-500/60 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10"
            }

            bg-slate-900/80
            backdrop-blur-xl
            `,
            className
          )}
        >

          {Icon && (
            <Icon
              className="
                pointer-events-none
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                h-5
                w-5
                text-slate-500
                transition-colors
                duration-300
                group-focus-within:text-blue-400
              "
            />
          )}

          {textarea ? (
            <textarea
              ref={ref}
              id={id}
              className="
                min-h-[150px]
                w-full
                resize-none
                bg-transparent
                py-4
                pr-5
                outline-none

                text-slate-100
                placeholder:text-slate-500

                transition-all

                pl-14
              "
              {...props}
            />
          ) : select ? (
            children
          ) : (
            <input
              ref={ref}
              id={id}
              className="
                h-14
                w-full
                bg-transparent
                pr-5
                outline-none

                text-slate-100
                placeholder:text-slate-500

                transition-all

                pl-14
              "
              {...props}
            />
          )}
        </div>

        {helper && !error && (
          <p className="text-xs text-slate-500">
            {helper}
          </p>
        )}

        <InputError error={error} />

      </div>
    );
  }
);

Field.displayName = "Field";

export default Field;