import {
  ArrowDown,
  CalendarDays,
  Clock3,
  MapPin,
  Route,
  Users,
} from "lucide-react";

import Card from "@/components/ui/Card";
import { VEHICLE_MAP } from "@/constants/vehicles";

export default function RidePreview({
  from,
  to,
  date,
  time,
  vehicle,
  total,
  available,
}) {
  const currentVehicle =
    VEHICLE_MAP[vehicle];

  const VehicleIcon =
    currentVehicle?.icon;

  return (
    <Card
      variant="glass"
      className="sticky top-8 overflow-hidden"
    >
      <div
        className="
        absolute
        right-0
        top-0
        h-60
        w-60
        rounded-full
        bg-blue-500/10
        blur-3xl
      "
      />

      <div className="relative">

        <div className="flex items-center justify-between">

          <div>

            <p className="text-xs uppercase tracking-[0.25em] text-blue-400">
              Live Preview
            </p>

            <h2 className="mt-2 text-2xl font-bold text-white">
              Your Ride
            </h2>

          </div>

          {VehicleIcon && (
            <div
              className={`
              flex
              h-16
              w-16
              items-center
              justify-center

              rounded-3xl

              bg-gradient-to-br
              ${currentVehicle.color}
            `}
            >
              <VehicleIcon className="h-8 w-8 text-white" />
            </div>
          )}

        </div>

        <div className="mt-10 flex gap-5">

          <div
            className="
            flex
            flex-col
            items-center
          "
          >
            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full
              bg-blue-600
            "
            >
              <MapPin className="h-5 w-5 text-white" />
            </div>

            <div className="h-12 border border-dashed border-slate-700" />

            <div
              className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full
              bg-emerald-600
            "
            >
              <Route className="h-5 w-5 text-white" />
            </div>

          </div>

          <div className="flex-1 space-y-10">

            <div>

              <p className="text-xs uppercase tracking-widest text-slate-500">
                Pickup
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {from || "Pickup Location"}
              </h3>

            </div>

            <div>

              <p className="text-xs uppercase tracking-widest text-slate-500">
                Destination
              </p>

              <h3 className="mt-2 text-lg font-semibold text-white">
                {to || "Destination"}
              </h3>

            </div>

          </div>

        </div>

        <div className="my-8 h-px bg-slate-800" />

        <div className="grid grid-cols-2 gap-5">

          <div className="rounded-2xl bg-slate-900/70 p-5">

            <div className="flex items-center gap-3">

              <CalendarDays className="h-5 w-5 text-blue-400" />

              <span className="text-sm text-slate-400">
                Date
              </span>

            </div>

            <p className="mt-3 text-white font-semibold">
              {date || "--"}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-900/70 p-5">

            <div className="flex items-center gap-3">

              <Clock3 className="h-5 w-5 text-blue-400" />

              <span className="text-sm text-slate-400">
                Time
              </span>

            </div>

            <p className="mt-3 text-white font-semibold">
              {time || "--"}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-900/70 p-5">

            <div className="flex items-center gap-3">

              <Users className="h-5 w-5 text-blue-400" />

              <span className="text-sm text-slate-400">
                Total Seats
              </span>

            </div>

            <p className="mt-3 text-white font-semibold">
              {total || "--"}
            </p>

          </div>

          <div className="rounded-2xl bg-slate-900/70 p-5">

            <div className="flex items-center gap-3">

              <ArrowDown className="h-5 w-5 text-blue-400" />

              <span className="text-sm text-slate-400">
                Available
              </span>

            </div>

            <p className="mt-3 text-white font-semibold">
              {available || "--"}
            </p>

          </div>

        </div>

        <div className="mt-10">

          <div className="mb-3 flex justify-between">

            <span className="text-sm text-slate-400">
              Seat Occupancy
            </span>

            <span className="text-sm font-medium text-blue-400">
              {available && total
                ? `${available}/${total}`
                : "--"}
            </span>

          </div>

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500"
              style={{
                width:
                  total && available
                    ? `${
                        (available / total) *
                        100
                      }%`
                    : "0%",
              }}
            />

          </div>

        </div>

      </div>

    </Card>
  );
}