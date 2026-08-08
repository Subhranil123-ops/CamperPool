import {
    Users,
    UserRound,
    CircleCheckBig,
} from "lucide-react";

import Card from "@/components/ui/Card";

export default function PassengerList({ ride }) {
    const passengers = Array.isArray(ride?.passengers)
        ? ride.passengers
        : [];

    const totalSeats = Number(ride?.total) || 0;
    const availableSeats = Number(ride?.available) || 0;
    const joinedSeats = Math.max(totalSeats - availableSeats, 0);

    return (
        <Card
            className="
                relative overflow-hidden rounded-[32px]
                border border-slate-800
                bg-slate-900/70 p-8
                backdrop-blur-xl
            "
        >
            <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[90px]" />

            <div className="relative z-10">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                            Passengers
                        </p>

                        <h2 className="mt-2 text-3xl font-black text-white">
                            Ride Members
                        </h2>
                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-6 py-4 text-center">
                        <p className="text-xs uppercase tracking-widest text-slate-500">
                            Joined
                        </p>

                        <p className="mt-1 text-3xl font-black text-cyan-400">
                            {joinedSeats}
                        </p>
                    </div>
                </div>

                {passengers.length > 0 && (
                    <div className="mt-8 flex">
                        {passengers.slice(0, 5).map((passenger, index) => (
                            <div
                                key={passenger?._id || index}
                                className={`
                                    flex h-14 w-14 items-center
                                    justify-center rounded-full
                                    border-4 border-slate-900
                                    bg-gradient-to-br from-cyan-500 to-blue-600
                                    text-sm font-bold text-white
                                    ${index !== 0 ? "-ml-3" : ""}
                                `}
                            >
                                {passenger?.username
                                    ?.charAt(0)
                                    .toUpperCase() || "?"}
                            </div>
                        ))}

                        {passengers.length > 5 && (
                            <div className="-ml-3 flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-700 text-sm font-bold text-white">
                                +{passengers.length - 5}
                            </div>
                        )}
                    </div>
                )}

                <div className="my-8 h-px bg-slate-800" />

                {passengers.length === 0 ? (
                    <div className="rounded-3xl border border-dashed border-slate-700 p-10 text-center">
                        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">
                            <Users className="h-9 w-9 text-slate-500" />
                        </div>

                        <h3 className="mt-7 text-2xl font-bold text-white">
                            No Passenger Details
                        </h3>

                        <p className="mx-auto mt-3 max-w-md leading-7 text-slate-400">
                            There are currently no passenger records
                            available for this ride.
                        </p>
                    </div>
                ) : (
                    <div className="grid gap-4 md:grid-cols-2">
                        {passengers.map((passenger, index) => (
                            <div
                                key={passenger?._id || index}
                                className="
                                    flex items-center justify-between
                                    rounded-3xl border border-slate-800
                                    bg-slate-950/60 p-5
                                    transition-all duration-300
                                    hover:border-cyan-500/20
                                    hover:bg-slate-900
                                "
                            >
                                <div className="flex min-w-0 items-center gap-4">
                                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white">
                                        {passenger?.username
                                            ?.charAt(0)
                                            .toUpperCase() || "?"}
                                    </div>

                                    <div className="min-w-0">
                                        <h3 className="truncate font-semibold text-white">
                                            {passenger?.username || "Unknown"}
                                        </h3>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Passenger
                                        </p>
                                    </div>
                                </div>

                                <CircleCheckBig className="h-5 w-5 shrink-0 text-emerald-400" />
                            </div>
                        ))}
                    </div>
                )}

                <div className="mt-7 rounded-3xl border border-slate-800 bg-slate-950/50 p-5">
                    <div className="flex items-start gap-4">
                        <UserRound className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />

                        <p className="text-sm leading-7 text-slate-400">
                            Passenger information shown here comes directly
                            from the ride data available to the application.
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
}