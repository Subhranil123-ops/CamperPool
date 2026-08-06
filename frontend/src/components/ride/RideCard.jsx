import { Link } from "react-router-dom";
import {
    MapPin,
    ArrowDown,
    Clock3,
    Bike,
    User,
    Users,
    ArrowRight,
} from "lucide-react";

export default function RideCard({ ride }) {
    return (
        <div
            className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
        shadow-lg
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-indigo-500/40
        hover:shadow-indigo-500/20
      "
        >
            {/* Top */}

            <div className="flex items-center justify-between">

                <span
                    className={`
          rounded-full
          px-3
          py-1
          text-xs
          font-semibold
          capitalize
          ${ride.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : ride.status === "full"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : "bg-red-500/20 text-red-400"
                        }
        `}
                >
                    {ride.status}
                </span>

                <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Users size={16} />
                    {ride.available}/{ride.total} Seats
                </div>
            </div>

            {/* Route */}

            <div className="mt-8 space-y-4">

                {/* From */}

                <div className="flex gap-4">

                    <div className="rounded-full bg-indigo-500/10 p-2">
                        <MapPin size={18} className="text-indigo-400" />
                    </div>

                    <div>

                        <p className="text-xs uppercase tracking-wider text-slate-400">
                            From
                        </p>

                        <h3 className="font-semibold text-white">
                            {ride.from}
                        </h3>

                    </div>

                </div>

                <div className="ml-5">

                    <ArrowDown
                        size={18}
                        className="text-slate-500"
                    />

                </div>

                {/* Destination */}

                <div className="flex gap-4">

                    <div className="rounded-full bg-pink-500/10 p-2">
                        <MapPin
                            size={18}
                            className="text-pink-400"
                        />
                    </div>

                    <div>

                        <p className="text-xs uppercase tracking-wider text-slate-400">
                            To
                        </p>

                        <h3 className="font-semibold text-white">
                            {ride.to}
                        </h3>

                    </div>

                </div>

            </div>

            {/* Divider */}

            <div className="my-6 border-t border-white/10"></div>

            {/* Ride Meta */}

            <div className="space-y-4">

                {/* Time */}

                <div className="flex items-center gap-3 text-slate-300">

                    <Clock3
                        size={18}
                        className="text-indigo-400"
                    />

                    <span>
                        {ride.date} • {ride.time}
                    </span>

                </div>

                {/* Vehicle */}

                <div className="flex items-center gap-3 text-slate-300">

                    <Bike
                        size={18}
                        className="text-indigo-400"
                    />

                    <span>{ride.vehicle}</span>

                </div>

                {/* Driver */}

                <div className="flex items-center gap-3 text-slate-300">

                    <User
                        size={18}
                        className="text-indigo-400"
                    />

                    <span>
                        {ride.driver?.username || "Unknown"}
                    </span>

                </div>

            </div>

            {/* Footer */}

            <div className="mt-6 border-t border-white/10 pt-5">

                <div className="flex items-center justify-between">

                    <p className="text-sm text-slate-400">
                        {ride.available > 0
                            ? "Seats Available"
                            : "Ride Full"}
                    </p>

                    <Link
                        to={`/rides/${ride._id}`}
                        className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-indigo-600
              px-4
              py-2
              text-sm
              font-medium
              text-white
              transition
              hover:bg-indigo-500
            "
                    >
                        View Ride

                        <ArrowRight
                            size={18}
                            className="
                transition-transform
                group-hover:translate-x-1
              "
                        />

                    </Link>

                </div>

            </div>

        </div>
    );
}