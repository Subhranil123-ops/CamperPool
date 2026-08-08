import {
    CalendarDays,
    Clock3,
    CarFront,
    Users,
    FileText,
    CircleDot,
} from "lucide-react";

import Card from "@/components/ui/Card";
import SeatBadge from "./SeatBadge";
import StatusBadge from "./StatusBadge";

export default function RideOverview({ ride }) {
    const totalSeats = Number(ride?.total) || 0;
    const availableSeats = Number(ride?.available) || 0;
    const joinedSeats = Math.max(totalSeats - availableSeats, 0);

    const formattedDate = ride?.date
        ? new Date(ride.date).toLocaleDateString(undefined, {
              weekday: "long",
              day: "numeric",
              month: "long",
              year: "numeric",
          })
        : "Date unavailable";

    return (
        <Card
            className="
                relative overflow-hidden rounded-[32px]
                border border-slate-800
                bg-slate-900/70 p-8
                backdrop-blur-xl
            "
        >
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-500/10 blur-[90px]" />

            <div className="relative z-10">
                <div className="flex items-start justify-between gap-5">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                            Overview
                        </p>

                        <h2 className="mt-2 text-3xl font-black text-white">
                            Trip Summary
                        </h2>
                    </div>

                    <StatusBadge status={ride.status} />
                </div>

                <div className="my-8 h-px bg-slate-800" />

                <div className="grid gap-4 sm:grid-cols-2">
                    <InfoItem
                        icon={CalendarDays}
                        label="Travel Date"
                        value={formattedDate}
                    />

                    <InfoItem
                        icon={Clock3}
                        label="Departure"
                        value={ride.time || "Not specified"}
                    />

                    <InfoItem
                        icon={CarFront}
                        label="Vehicle"
                        value={ride.vehicle || "Not specified"}
                    />

                    <InfoItem
                        icon={Users}
                        label="Joined"
                        value={`${joinedSeats} of ${totalSeats}`}
                    />
                </div>

                <div className="mt-7">
                    <SeatBadge
                        available={availableSeats}
                        total={totalSeats}
                    />
                </div>

                {ride.notes && (
                    <>
                        <div className="my-8 h-px bg-slate-800" />

                        <div>
                            <div className="mb-5 flex items-center gap-3">
                                <FileText className="h-5 w-5 text-cyan-400" />

                                <h3 className="text-xl font-bold text-white">
                                    Ride Notes
                                </h3>
                            </div>

                            <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6">
                                <p className="leading-8 text-slate-300">
                                    {ride.notes}
                                </p>
                            </div>
                        </div>
                    </>
                )}

                <div className="my-8 h-px bg-slate-800" />

                <div>
                    <h3 className="text-xl font-bold text-white">
                        Ride Information
                    </h3>

                    <div className="mt-5 space-y-3">
                        <Highlight text="Live seat availability" />
                        <Highlight text="Driver and passenger information from the ride" />
                        <Highlight text="Current ride status" />
                    </div>
                </div>
            </div>
        </Card>
    );
}

function InfoItem({ icon: Icon, label, value }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-800/40 p-5 transition-colors hover:border-slate-700">
            <div className="flex items-center gap-3">
                <Icon className="h-5 w-5 text-cyan-400" />

                <span className="text-sm text-slate-400">
                    {label}
                </span>
            </div>

            <p className="mt-4 font-bold text-white">
                {value}
            </p>
        </div>
    );
}

function Highlight({ text }) {
    return (
        <div className="flex items-center gap-3 rounded-2xl bg-slate-800/50 p-4">
            <CircleDot className="h-3 w-3 shrink-0 fill-cyan-400 text-cyan-400" />

            <span className="text-sm text-slate-300">
                {text}
            </span>
        </div>
    );
}