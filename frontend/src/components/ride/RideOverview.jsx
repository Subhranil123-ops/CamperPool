import {
    CalendarDays,
    Clock3,
    CarFront,
    Users,
    FileText,
    BadgeCheck,
    CircleDot,
} from "lucide-react";

import Card from "@/components/ui/Card";
import SeatBadge from "./SeatBadge";
import StatusBadge from "./StatusBadge";

export default function RideOverview({ ride }) {

    return (

        <Card
            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-slate-800
                bg-slate-900/70
                p-8
                backdrop-blur-xl
            "
        >

            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative z-10">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">

                            Overview

                        </p>

                        <h2 className="mt-2 text-3xl font-black text-white">

                            Trip Summary

                        </h2>

                    </div>

                    <StatusBadge status={ride.status} />

                </div>

                <div className="my-8 h-px bg-slate-800" />

                <div className="grid gap-5 sm:grid-cols-2">

                    <div className="rounded-2xl bg-slate-800/60 p-5">

                        <div className="flex items-center gap-3">

                            <CalendarDays className="h-5 w-5 text-cyan-400" />

                            <span className="text-sm text-slate-400">

                                Travel Date

                            </span>

                        </div>

                        <h3 className="mt-4 text-xl font-bold text-white">

                            {new Date(ride.date).toLocaleDateString()}

                        </h3>

                    </div>

                    <div className="rounded-2xl bg-slate-800/60 p-5">

                        <div className="flex items-center gap-3">

                            <Clock3 className="h-5 w-5 text-cyan-400" />

                            <span className="text-sm text-slate-400">

                                Departure

                            </span>

                        </div>

                        <h3 className="mt-4 text-xl font-bold text-white">

                            {ride.time}

                        </h3>

                    </div>

                    <div className="rounded-2xl bg-slate-800/60 p-5">

                        <div className="flex items-center gap-3">

                            <CarFront className="h-5 w-5 text-cyan-400" />

                            <span className="text-sm text-slate-400">

                                Vehicle

                            </span>

                        </div>

                        <h3 className="mt-4 text-xl font-bold text-white">

                            {ride.vehicle}

                        </h3>

                    </div>

                    <div className="rounded-2xl bg-slate-800/60 p-5">

                        <div className="flex items-center gap-3">

                            <Users className="h-5 w-5 text-cyan-400" />

                            <span className="text-sm text-slate-400">

                                Passengers

                            </span>

                        </div>

                        <h3 className="mt-4 text-xl font-bold text-white">

                            {ride.passengers?.length || 0} Joined

                        </h3>

                    </div>

                </div>

                <div className="mt-8">

                    <SeatBadge

                        available={ride.available}

                        total={ride.total}

                    />

                </div>

                <div className="my-8 h-px bg-slate-800" />

                <div>

                    <div className="mb-5 flex items-center gap-3">

                        <FileText className="h-5 w-5 text-cyan-400" />

                        <h3 className="text-xl font-bold text-white">

                            Ride Notes

                        </h3>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">

                        {ride.notes ? (

                            <p className="leading-8 text-slate-300">

                                {ride.notes}

                            </p>

                        ) : (

                            <p className="italic text-slate-500">

                                No additional instructions were provided by the driver.

                            </p>

                        )}

                    </div>

                </div>

                <div className="my-8 h-px bg-slate-800" />

                <div>

                    <div className="mb-5 flex items-center gap-3">

                        <BadgeCheck className="h-5 w-5 text-emerald-400" />

                        <h3 className="text-xl font-bold text-white">

                            Trip Highlights

                        </h3>

                    </div>

                    <div className="space-y-4">

                        <div className="flex items-center gap-3 rounded-2xl bg-slate-800/60 p-4">

                            <CircleDot className="h-3 w-3 fill-cyan-400 text-cyan-400" />

                            <span className="text-slate-300">

                                Verified CampusPool Driver

                            </span>

                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-slate-800/60 p-4">

                            <CircleDot className="h-3 w-3 fill-cyan-400 text-cyan-400" />

                            <span className="text-slate-300">

                                Live Seat Availability

                            </span>

                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-slate-800/60 p-4">

                            <CircleDot className="h-3 w-3 fill-cyan-400 text-cyan-400" />

                            <span className="text-slate-300">

                                Secure Student Community

                            </span>

                        </div>

                        <div className="flex items-center gap-3 rounded-2xl bg-slate-800/60 p-4">

                            <CircleDot className="h-3 w-3 fill-cyan-400 text-cyan-400" />

                            <span className="text-slate-300">

                                Easy Join & Leave Anytime

                            </span>

                        </div>

                    </div>

                </div>

            </div>

        </Card>

    );

}