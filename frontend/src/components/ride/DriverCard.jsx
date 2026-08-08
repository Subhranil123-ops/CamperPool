import {
    CarFront,
    ShieldCheck,
    UserRound,
} from "lucide-react";

import Card from "@/components/ui/Card";
import DriverAvatar from "./DriverAvatar";
import StatusBadge from "./StatusBadge";

export default function DriverCard({ ride }) {
    const driver = ride?.driver;

    return (
        <Card
            className="
                relative overflow-hidden rounded-[32px]
                border border-slate-800
                bg-slate-900/70 p-7
                backdrop-blur-xl
            "
        >
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-500/10 blur-[70px]" />

            <div className="relative z-10">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                            Driver
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-white">
                            Ride Owner
                        </h2>
                    </div>

                    <div className="rounded-2xl border border-cyan-500/10 bg-cyan-500/10 p-3">
                        <ShieldCheck className="h-6 w-6 text-cyan-400" />
                    </div>
                </div>

                <div className="my-7 h-px bg-slate-800" />

                <div className="flex items-center gap-4">
                    <DriverAvatar username={driver?.username} />

                    <div className="min-w-0">
                        <h3 className="truncate text-xl font-bold text-white">
                            {driver?.username || "Unknown driver"}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                            CampusPool rider
                        </p>
                    </div>
                </div>

                <div className="mt-7 grid gap-4">
                    <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10">
                            <CarFront className="h-5 w-5 text-cyan-400" />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500">
                                Vehicle
                            </p>

                            <p className="mt-1 font-semibold text-white">
                                {ride.vehicle || "Not specified"}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10">
                            <UserRound className="h-5 w-5 text-blue-400" />
                        </div>

                        <div>
                            <p className="text-xs uppercase tracking-widest text-slate-500">
                                Driver
                            </p>

                            <p className="mt-1 font-semibold text-white">
                                {driver?.username || "Unknown"}
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/50 p-4">
                        <span className="text-sm text-slate-400">
                            Ride Status
                        </span>

                        <StatusBadge status={ride.status} />
                    </div>
                </div>
            </div>
        </Card>
    );
}