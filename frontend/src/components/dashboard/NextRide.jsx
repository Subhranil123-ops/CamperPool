import {
    ArrowRight,
    CalendarDays,
    CarFront,
    Clock3,
    MapPin,
    Route,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import StatusBadge from "@/components/ride/StatusBadge";

export default function NextRide({ ride }) {
    return (
        <section className="mb-12">
            <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    Up Next
                </p>

                <h2 className="mt-2 text-2xl font-black text-white">
                    Your next ride
                </h2>
            </div>

            {!ride ? (
                <div className="rounded-[32px] border border-dashed border-slate-700 bg-slate-900/40 p-10 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800">
                        <CarFront className="h-7 w-7 text-slate-500" />
                    </div>

                    <h3 className="mt-5 text-xl font-bold text-white">
                        No upcoming ride
                    </h3>

                    <p className="mx-auto mt-2 max-w-md text-sm leading-7 text-slate-500">
                        Your next active ride will appear here once
                        you create one.
                    </p>
                </div>
            ) : (
                <div className="relative overflow-hidden rounded-[32px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900/80 to-slate-950 p-7 shadow-[0_20px_60px_rgba(0,0,0,.25)] sm:p-9">
                    <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px]" />

                    <div className="relative z-10">
                        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                            <div>
                                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                                    Next active ride
                                </p>

                                <div className="mt-5 flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-cyan-400" />

                                    <h3 className="text-2xl font-black text-white">
                                        {ride.from}
                                    </h3>

                                    <ArrowRight className="h-5 w-5 text-slate-600" />

                                    <Route className="h-5 w-5 text-emerald-400" />

                                    <h3 className="text-2xl font-black text-white">
                                        {ride.to}
                                    </h3>
                                </div>
                            </div>

                            <StatusBadge status={ride.status} />
                        </div>

                        <div className="my-7 h-px bg-slate-800" />

                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                            <Info
                                icon={CalendarDays}
                                label="Date"
                                value={
                                    ride.date
                                        ? new Date(
                                              ride.date
                                          ).toLocaleDateString()
                                        : "—"
                                }
                            />

                            <Info
                                icon={Clock3}
                                label="Departure"
                                value={ride.time || "—"}
                            />

                            <Info
                                icon={CarFront}
                                label="Vehicle"
                                value={ride.vehicle || "—"}
                            />

                            <Info
                                icon={Users}
                                label="Seats"
                                value={`${ride.available ?? 0} available`}
                            />
                        </div>

                        <div className="mt-7 flex justify-end">
                            <Link to={`/rides/${ride._id}`}>
                                <Button className="gap-2">
                                    View Ride
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

function Info({ icon: Icon, label, value }) {
    return (
        <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
            <div className="flex items-center gap-2 text-slate-500">
                <Icon className="h-4 w-4 text-cyan-400" />
                <span className="text-xs uppercase tracking-widest">
                    {label}
                </span>
            </div>

            <p className="mt-2 font-semibold text-white">
                {value}
            </p>
        </div>
    );
}