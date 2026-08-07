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

    return (
        <Card
            className="
                relative
                overflow-hidden
                rounded-[36px]
                border
                border-slate-800
                bg-gradient-to-br
                from-slate-950
                via-slate-900
                to-slate-950
                p-8
                shadow-[0_25px_70px_rgba(0,0,0,.35)]
            "
        >

            {/* Glow */}

            <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">

                {/* Back */}

                <Link to="/find-lift">

                    <Button
                        variant="ghost"
                        className="mb-8 gap-2"
                    >
                        <ArrowLeft className="h-4 w-4" />

                        Back

                    </Button>

                </Link>

                {/* Header */}

                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

                    <div className="flex items-center gap-5">

                        <VehicleIcon
                            vehicle={ride.vehicle}
                            className="h-8 w-8"
                        />

                        <div>

                            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">

                                Ride Details

                            </p>

                            <h1 className="mt-2 text-4xl font-black text-white">

                                {ride.vehicle} Ride

                            </h1>

                        </div>

                    </div>

                    <StatusBadge status={ride.status} />

                </div>

                {/* Route */}

                <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_auto_1fr]">

                    {/* Pickup */}

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

                        <p className="flex items-center gap-2 text-sm uppercase tracking-widest text-cyan-300">

                            <MapPin className="h-4 w-4" />

                            Pickup

                        </p>

                        <h2 className="mt-4 text-2xl font-bold text-white">

                            {ride.from}

                        </h2>

                    </div>

                    {/* Route */}

                    <div className="flex items-center justify-center">

                        <div className="flex flex-col items-center">

                            <div className="h-3 w-3 rounded-full bg-cyan-400" />

                            <div className="h-20 border border-dashed border-cyan-500/40" />

                            <Route className="h-6 w-6 text-cyan-400" />

                            <div className="h-20 border border-dashed border-cyan-500/40" />

                            <div className="h-3 w-3 rounded-full bg-emerald-400" />

                        </div>

                    </div>

                    {/* Destination */}

                    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">

                        <p className="flex items-center gap-2 text-sm uppercase tracking-widest text-emerald-300">

                            <Route className="h-4 w-4" />

                            Destination

                        </p>

                        <h2 className="mt-4 text-2xl font-bold text-white">

                            {ride.to}

                        </h2>

                    </div>

                </div>

                {/* Bottom */}

                <div className="mt-10 grid gap-5 md:grid-cols-2">

                    <div className="rounded-2xl bg-slate-800/60 p-5">

                        <div className="flex items-center gap-2 text-slate-400">

                            <CalendarDays className="h-4 w-4 text-cyan-400" />

                            Date

                        </div>

                        <h3 className="mt-3 text-xl font-bold text-white">

                            {new Date(ride.date).toLocaleDateString()}

                        </h3>

                    </div>

                    <div className="rounded-2xl bg-slate-800/60 p-5">

                        <div className="flex items-center gap-2 text-slate-400">

                            <Clock3 className="h-4 w-4 text-cyan-400" />

                            Departure Time

                        </div>

                        <h3 className="mt-3 text-xl font-bold text-white">

                            {ride.time}

                        </h3>

                    </div>

                </div>

            </div>

        </Card>
    );
}