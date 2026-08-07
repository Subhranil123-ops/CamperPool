import {
    ArrowRight,
    CalendarDays,
    Clock3,
    MapPin,
    Route,
} from "lucide-react";
import { Link } from "react-router-dom";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

import VehicleIcon from "./VehicleIcon";
import DriverAvatar from "./DriverAvatar";
import StatusBadge from "./StatusBadge";
import SeatBadge from "./SeatBadge";

export default function RideCard({ ride }) {
    return (
        <Card
            className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-slate-800
                bg-slate-900/70
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-500/30
                hover:shadow-2xl
                hover:shadow-cyan-500/10
            "
        >
            {/* Glow */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/20" />

            <div className="relative z-10">

                {/* Top */}

                <div className="flex items-start justify-between">

                    <div className="flex items-center gap-4">

                        <VehicleIcon vehicle={ride.vehicle} />

                        <div>

                            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                                Vehicle
                            </p>

                            <h3 className="mt-1 text-xl font-bold text-white">
                                {ride.vehicle}
                            </h3>

                        </div>

                    </div>

                    <StatusBadge status={ride.status} />

                </div>

                {/* Driver */}

                <div className="mt-8">

                    <DriverAvatar
                        username={ride.driver?.username}
                    />

                </div>

                {/* Route */}

                <div className="my-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                    <div className="flex gap-4">

                        <div className="flex flex-col items-center">

                            <div className="rounded-full bg-blue-500/20 p-2">
                                <MapPin className="h-4 w-4 text-blue-400" />
                            </div>

                            <div className="h-12 border border-dashed border-slate-700" />

                            <div className="rounded-full bg-emerald-500/20 p-2">
                                <Route className="h-4 w-4 text-emerald-400" />
                            </div>

                        </div>

                        <div className="flex-1">

                            <div>

                                <p className="text-xs uppercase tracking-widest text-slate-500">
                                    Pickup
                                </p>

                                <h4 className="mt-1 text-lg font-semibold text-white">
                                    {ride.from}
                                </h4>

                            </div>

                            <div className="mt-8">

                                <p className="text-xs uppercase tracking-widest text-slate-500">
                                    Destination
                                </p>

                                <h4 className="mt-1 text-lg font-semibold text-white">
                                    {ride.to}
                                </h4>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Info */}

                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-slate-800/60 p-4">

                        <div className="flex items-center gap-2 text-slate-400">
                            <CalendarDays className="h-4 w-4 text-cyan-400" />
                            <span className="text-xs uppercase tracking-wider">
                                Date
                            </span>
                        </div>

                        <p className="mt-3 font-semibold text-white">
                            {new Date(ride.date).toLocaleDateString()}
                        </p>

                    </div>

                    <div className="rounded-2xl bg-slate-800/60 p-4">

                        <div className="flex items-center gap-2 text-slate-400">
                            <Clock3 className="h-4 w-4 text-cyan-400" />
                            <span className="text-xs uppercase tracking-wider">
                                Time
                            </span>
                        </div>

                        <p className="mt-3 font-semibold text-white">
                            {ride.time}
                        </p>

                    </div>

                </div>

                {/* Seats */}

                <div className="mt-6">

                    <SeatBadge
                        available={ride.available}
                        total={ride.total}
                    />

                </div>

                {/* CTA */}

                <Link
                    to={`/rides/${ride._id}`}
                    className="mt-8 block"
                >
                    <Button
                        className="
                            w-full
                            justify-center
                            gap-2
                            text-base
                            group-hover:gap-4
                        "
                    >
                        View Ride
                        <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                </Link>

            </div>

        </Card>
    );
}