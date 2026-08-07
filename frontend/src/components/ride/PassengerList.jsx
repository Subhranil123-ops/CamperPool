import {
    Users,
    UserRound,
    CircleCheckBig,
} from "lucide-react";

import Card from "@/components/ui/Card";

export default function PassengerList({ ride }) {

    const passengers = ride.passengers || [];

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

            <div className="absolute -left-24 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative z-10">

                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">

                            Community

                        </p>

                        <h2 className="mt-2 text-3xl font-black text-white">

                            Ride Passengers

                        </h2>

                    </div>

                    <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-6 py-4 text-center">

                        <p className="text-xs uppercase tracking-widest text-slate-500">

                            Joined

                        </p>

                        <h2 className="mt-2 text-3xl font-black text-cyan-400">

                            {passengers.length}

                        </h2>

                    </div>

                </div>

                {
                    passengers.length > 0 && (

                        <div className="mt-8 flex">

                            {passengers.slice(0, 5).map((passenger, index) => (

                                <div
                                    key={passenger._id}
                                    className={`
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-full
                                        border-4
                                        border-slate-900
                                        bg-gradient-to-br
                                        from-cyan-500
                                        to-blue-600
                                        text-sm
                                        font-bold
                                        text-white
                                        ${index !== 0 ? "-ml-3" : ""}
                                    `}
                                >

                                    {
                                        passenger.username
                                            ?.charAt(0)
                                            .toUpperCase()
                                    }

                                </div>

                            ))}

                            {
                                passengers.length > 5 && (

                                    <div className="-ml-3 flex h-14 w-14 items-center justify-center rounded-full border-4 border-slate-900 bg-slate-700 text-sm font-bold text-white">

                                        +{passengers.length - 5}

                                    </div>

                                )
                            }

                        </div>

                    )
                }

                <div className="my-8 h-px bg-slate-800" />

                {

                    passengers.length === 0 ? (

                        <div className="rounded-3xl border border-dashed border-slate-700 p-12 text-center">

                            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-slate-800">

                                <Users className="h-10 w-10 text-slate-500" />

                            </div>

                            <h3 className="mt-8 text-2xl font-bold text-white">

                                Be the First Passenger

                            </h3>

                            <p className="mx-auto mt-4 max-w-lg leading-8 text-slate-400">

                                Nobody has joined this ride yet.
                                Reserve your seat now and start
                                building your travel group.

                            </p>

                        </div>

                    ) : (

                        <div className="grid gap-5 md:grid-cols-2">

                            {

                                passengers.map((passenger) => (

                                    <div
                                        key={passenger._id}
                                        className="
                                            group
                                            flex
                                            items-center
                                            justify-between
                                            rounded-3xl
                                            border
                                            border-slate-800
                                            bg-slate-950/60
                                            p-5
                                            transition-all
                                            duration-300
                                            hover:border-cyan-500/20
                                            hover:bg-slate-900
                                        "
                                    >

                                        <div className="flex items-center gap-4">

                                            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 font-bold text-white">

                                                {

                                                    passenger.username
                                                        ?.charAt(0)
                                                        .toUpperCase()

                                                }

                                            </div>

                                            <div>

                                                <h3 className="font-semibold text-white">

                                                    {passenger.username}

                                                </h3>

                                                <p className="mt-1 text-sm text-slate-500">

                                                    CampusPool Member

                                                </p>

                                            </div>

                                        </div>

                                        <div className="flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2">

                                            <CircleCheckBig className="h-4 w-4 text-emerald-400" />

                                            <span className="text-sm font-medium text-emerald-300">

                                                Joined

                                            </span>

                                        </div>

                                    </div>

                                ))

                            }

                        </div>

                    )

                }

                <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-5">

                    <div className="flex items-start gap-4">

                        <UserRound className="mt-1 h-6 w-6 text-cyan-400" />

                        <p className="leading-8 text-cyan-100">

                            Passenger identities are visible only
                            to CampusPool users for a safer and
                            trusted campus ride-sharing experience.

                        </p>

                    </div>

                </div>

            </div>

        </Card>

    );

}