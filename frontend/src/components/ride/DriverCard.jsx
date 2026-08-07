import {
    BadgeCheck,
    Phone,
    Mail,
    Star,
    ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import DriverAvatar from "./DriverAvatar";

export default function DriverCard({ ride }) {

    return (

        <Card
            className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-slate-800
                bg-slate-900/70
                p-7
                backdrop-blur-xl
            "
        >

            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10">

                <div className="mb-8 flex items-center justify-between">

                    <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">

                            Driver

                        </p>

                        <h2 className="mt-2 text-2xl font-black text-white">

                            Ride Owner

                        </h2>

                    </div>

                    <div className="rounded-2xl bg-emerald-500/10 p-3">

                        <ShieldCheck className="h-7 w-7 text-emerald-400" />

                    </div>

                </div>

                <DriverAvatar
                    username={ride.driver?.username}
                />

                <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4">

                    <div className="flex items-center gap-2">

                        <BadgeCheck className="h-5 w-5 text-emerald-400" />

                        <span className="font-semibold text-emerald-300">

                            Verified Campus Member

                        </span>

                    </div>

                </div>

                <div className="my-8 h-px bg-slate-800" />

                <div className="grid grid-cols-2 gap-4">

                    <div className="rounded-2xl bg-slate-800/70 p-5 text-center">

                        <p className="text-xs uppercase tracking-widest text-slate-500">

                            Rating

                        </p>

                        <div className="mt-3 flex items-center justify-center gap-2">

                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />

                            <span className="text-2xl font-black text-white">

                                5.0

                            </span>

                        </div>

                    </div>

                    <div className="rounded-2xl bg-slate-800/70 p-5 text-center">

                        <p className="text-xs uppercase tracking-widest text-slate-500">

                            Trips

                        </p>

                        <h3 className="mt-3 text-2xl font-black text-white">

                            12

                        </h3>

                    </div>

                </div>

                <div className="my-8 h-px bg-slate-800" />

                <div className="space-y-4">

                    <div className="flex items-center gap-4 rounded-2xl bg-slate-800/60 p-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">

                            <Mail className="h-5 w-5 text-cyan-400" />

                        </div>

                        <div>

                            <p className="text-xs uppercase tracking-widest text-slate-500">

                                Email

                            </p>

                            <p className="font-medium text-white">

                                Hidden until you join

                            </p>

                        </div>

                    </div>

                    <div className="flex items-center gap-4 rounded-2xl bg-slate-800/60 p-4">

                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">

                            <Phone className="h-5 w-5 text-cyan-400" />

                        </div>

                        <div>

                            <p className="text-xs uppercase tracking-widest text-slate-500">

                                Phone

                            </p>

                            <p className="font-medium text-white">

                                Hidden until you join

                            </p>

                        </div>

                    </div>

                </div>

                <div className="mt-8 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-5">

                    <p className="text-sm leading-7 text-cyan-200">

                        Contact information will become visible
                        after successfully joining this ride.

                    </p>

                </div>

            </div>

        </Card>

    );

}