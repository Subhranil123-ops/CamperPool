import {
    ArrowLeft,
    CalendarDays,
    Clock3,
    MapPin,
    Route,
} from "lucide-react";
import { Link } from "react-router-dom";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import VehicleIcon from "./VehicleIcon";
import StatusBadge from "./StatusBadge";

export default function RideHero({ ride }) {
    const formattedDate = ride?.date
        ? new Date(ride.date).toLocaleDateString(undefined, {
              weekday: "short",
              day: "numeric",
              month: "short",
              year: "numeric",
          })
        : "Date unavailable";

    return (
        <Card
            className="
                relative overflow-hidden rounded-[36px]
                border border-slate-800
                bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950
                p-7 shadow-[0_25px_70px_rgba(0,0,0,.35)]
                sm:p-9
            "
        >
            <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-500/10 blur-[90px]" />
            <div className="absolute -bottom-32 -right-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[110px]" />

            <div className="relative z-10">
                <Link to="/find-lift">
                    <Button variant="ghost" className="mb-8 gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to rides
                    </Button>
                </Link>

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex items-center gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-cyan-500/20 bg-cyan-500/10">
                            <VehicleIcon
                                vehicle={ride.vehicle}
                                className="h-8 w-8 text-cyan-400"
                            />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                                Ride Details
                            </p>

                            <h1 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                                {ride.from}{" "}
                                <span className="text-cyan-400">→</span>{" "}
                                {ride.to}
                            </h1>

                            <p className="mt-2 text-sm text-slate-400">
                                {ride.vehicle} • {ride.time}
                            </p>
                        </div>
                    </div>

                    <StatusBadge status={ride.status} />
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                        <div className="flex items-center gap-3 text-slate-400">
                            <CalendarDays className="h-5 w-5 text-cyan-400" />
                            <span className="text-sm">Travel Date</span>
                        </div>

                        <p className="mt-3 font-bold text-white">
                            {formattedDate}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5">
                        <div className="flex items-center gap-3 text-slate-400">
                            <Clock3 className="h-5 w-5 text-blue-400" />
                            <span className="text-sm">Departure</span>
                        </div>

                        <p className="mt-3 font-bold text-white">
                            {ride.time || "Time unavailable"}
                        </p>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-3 text-slate-400">
                            <Route className="h-5 w-5 text-emerald-400" />
                            <span className="text-sm">Route</span>
                        </div>

                        <p className="mt-3 truncate font-bold text-white">
                            {ride.from} → {ride.to}
                        </p>
                    </div>
                </div>

                <div className="mt-8 grid gap-4 md:grid-cols-[1fr_auto_1fr]">
                    <div className="rounded-3xl border border-cyan-500/10 bg-slate-900/60 p-6">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                            <MapPin className="h-4 w-4" />
                            Pickup
                        </div>

                        <h2 className="mt-3 text-xl font-bold text-white">
                            {ride.from}
                        </h2>
                    </div>

                    <div className="hidden items-center justify-center md:flex">
                        <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_18px_rgba(34,211,238,.7)]" />
                            <div className="h-px w-16 bg-gradient-to-r from-cyan-400/60 to-emerald-400/60" />
                            <Route className="h-5 w-5 text-slate-500" />
                            <div className="h-px w-16 bg-gradient-to-r from-emerald-400/60 to-cyan-400/60" />
                            <div className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,.7)]" />
                        </div>
                    </div>

                    <div className="rounded-3xl border border-emerald-500/10 bg-slate-900/60 p-6">
                        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400">
                            <Route className="h-4 w-4" />
                            Destination
                        </div>

                        <h2 className="mt-3 text-xl font-bold text-white">
                            {ride.to}
                        </h2>
                    </div>
                </div>
            </div>
        </Card>
    );
}