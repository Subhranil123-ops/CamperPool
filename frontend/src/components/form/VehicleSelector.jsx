import { Check } from "lucide-react";
import { VEHICLES } from "@/constants/vehicles";
import { cn } from "@/lib/utils";
import InputError from "@/components/ui/InputError";

export default function VehicleSelector({
  value,
  onChange,
  error,
}) {
  return (
    <div className="space-y-2">

      <label className="block text-sm font-semibold tracking-wide text-slate-200">
        Vehicle
      </label>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">

        {VEHICLES.map((vehicle) => {
          const Icon = vehicle.icon;

          const active = value === vehicle.id;

          return (
            <button
              key={vehicle.id}
              type="button"
              onClick={() =>
                onChange(vehicle.id)
              }
              className={cn(
                `
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                bg-slate-900/80
                p-5
                text-left
                backdrop-blur-xl

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-blue-500
                hover:shadow-[0_15px_40px_rgba(37,99,235,.18)]
                `,
                active
                  ? "border-blue-500 ring-4 ring-blue-500/15"
                  : "border-slate-700"
              )}
            >

              <div
                className={cn(
                  `
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  bg-gradient-to-br
                  `,
                  vehicle.color,
                  active && "opacity-10"
                )}
              />

              {active && (
                <div
                  className="
                  absolute
                  right-4
                  top-4

                  flex
                  h-7
                  w-7
                  items-center
                  justify-center

                  rounded-full
                  bg-blue-600
                  text-white
                "
                >
                  <Check className="h-4 w-4" />
                </div>
              )}

              <div className="relative z-10">

                <div
                  className={cn(
                    `
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center

                    rounded-2xl

                    bg-slate-800

                    transition-all
                    duration-300

                    group-hover:scale-110
                    `,
                    active &&
                      `bg-gradient-to-br ${vehicle.color}`
                  )}
                >
                  <Icon
                    className={cn(
                      "h-7 w-7",
                      active
                        ? "text-white"
                        : "text-slate-300"
                    )}
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-white">
                  {vehicle.label}
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  {vehicle.description}
                </p>

                <div className="mt-5 flex items-center justify-between">

                  <span
                    className="
                    rounded-full
                    border
                    border-slate-700
                    px-3
                    py-1
                    text-xs
                    font-medium
                    text-slate-300
                  "
                  >
                    Seats
                  </span>

                  <span className="text-sm font-semibold text-blue-400">
                    {vehicle.seats}
                  </span>

                </div>

              </div>

            </button>
          );
        })}

      </div>

      <InputError error={error} />

    </div>
  );
}