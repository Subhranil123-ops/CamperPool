import { useEffect, useState } from "react";

import RideHero from "@/components/ride/RideHero";
import DriverCard from "@/components/ride/DriverCard";
import RideOverview from "@/components/ride/RideOverview";
import PassengerList from "@/components/ride/PassengerList";
import RideActions from "@/components/ride/RideActions";

export default function RideDetails() {

    const [ride, setRide] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [isOwner, setIsOwner] = useState(false);

    const [isJoined, setIsJoined] = useState(false);

    useEffect(() => {

        fetchRide();

    }, []);

    const fetchRide = async () => {

        try {

            setLoading(true);

            setError("");

            // Call backend

        }

        catch (err) {

            setError("Unable to load ride.");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <section className="relative min-h-screen overflow-hidden bg-[#050816]">

                <div className="absolute inset-0">

                    <div className="absolute -left-56 -top-56 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[180px]" />

                    <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[180px]" />

                    <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">

                    <div className="animate-pulse">

                        <div className="h-72 rounded-[36px] bg-slate-900" />

                        <div className="mt-8 grid gap-8 xl:grid-cols-[1.2fr_.8fr]">

                            <div className="space-y-8">

                                <div className="h-96 rounded-[32px] bg-slate-900" />

                                <div className="h-80 rounded-[32px] bg-slate-900" />

                            </div>

                            <div className="space-y-8">

                                <div className="h-80 rounded-[32px] bg-slate-900" />

                                <div className="h-96 rounded-[32px] bg-slate-900" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        );

    }

    if (error) {

        return (

            <section className="flex min-h-screen items-center justify-center bg-[#050816] px-6">

                <div className="rounded-[32px] border border-red-500/20 bg-red-500/10 p-10 text-center">

                    <h2 className="text-3xl font-black text-white">

                        Something went wrong

                    </h2>

                    <p className="mt-4 text-red-200">

                        {error}

                    </p>

                </div>

            </section>

        );

    }

    if (!ride) return null;

    return (

        <section className="relative min-h-screen overflow-hidden bg-[#050816]">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute -left-56 -top-56 h-[34rem] w-[34rem] rounded-full bg-cyan-500/10 blur-[180px]" />

                <div className="absolute right-0 top-0 h-[30rem] w-[30rem] rounded-full bg-blue-600/10 blur-[180px]" />

                <div className="absolute bottom-0 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[180px]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">

                <RideHero ride={ride} />

                                <div className="mt-10 grid gap-8 xl:grid-cols-[1.25fr_.75fr]">

                    {/* Left Column */}

                    <div className="space-y-8">

                        <RideOverview
                            ride={ride}
                        />

                        <PassengerList
                            ride={ride}
                        />

                    </div>

                    {/* Right Column */}

                    <div className="space-y-8 xl:sticky xl:top-8 xl:self-start">

                        <DriverCard
                            ride={ride}
                        />

                        <RideActions

                            ride={ride}

                            isOwner={isOwner}

                            isJoined={isJoined}

                        />

                        {/* Safety */}

                        <div
                            className="
                                overflow-hidden
                                rounded-[32px]
                                border
                                border-slate-800
                                bg-slate-900/70
                                p-7
                                backdrop-blur-xl
                            "
                        >

                            <div className="mb-6 flex items-center gap-3">

                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10">

                                    🛡️

                                </div>

                                <div>

                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-500">

                                        Safety

                                    </p>

                                    <h2 className="text-2xl font-black text-white">

                                        Ride Smart

                                    </h2>

                                </div>

                            </div>

                            <div className="space-y-4">

                                <div className="rounded-2xl bg-slate-800/60 p-4">

                                    <p className="font-semibold text-white">

                                        ✓ Verified Campus Members

                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-slate-400">

                                        Every ride is posted by a
                                        registered CampusPool user.

                                    </p>

                                </div>

                                <div className="rounded-2xl bg-slate-800/60 p-4">

                                    <p className="font-semibold text-white">

                                        ✓ Meet at Public Locations

                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-slate-400">

                                        Choose common pickup points
                                        inside the campus whenever
                                        possible.

                                    </p>

                                </div>

                                <div className="rounded-2xl bg-slate-800/60 p-4">

                                    <p className="font-semibold text-white">

                                        ✓ Confirm Before Departure

                                    </p>

                                    <p className="mt-2 text-sm leading-7 text-slate-400">

                                        Verify the vehicle and driver
                                        before beginning your trip.

                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                                {/* Bottom CTA */}

                <div className="relative mt-12 overflow-hidden rounded-[36px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10">

                    <div className="absolute -right-32 -top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-[150px]" />

                    <div className="absolute -left-32 -bottom-20 h-80 w-80 rounded-full bg-violet-500/10 blur-[150px]" />

                    <div className="relative z-10 flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">

                        <div className="max-w-3xl">

                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-400">

                                CampusPool

                            </p>

                            <h2 className="mt-4 text-4xl font-black text-white">

                                Travel Safer.

                                <br />

                                Travel Together.

                            </h2>

                            <p className="mt-6 max-w-2xl leading-8 text-slate-400">

                                CampusPool helps students discover,
                                share and join rides with trusted
                                campus members while making daily
                                travel easier, safer and more
                                affordable.

                            </p>

                        </div>

                        <div className="grid gap-5 sm:grid-cols-3">

                            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">

                                <h2 className="text-4xl font-black text-cyan-400">

                                    {ride.available}

                                </h2>

                                <p className="mt-3 text-sm text-slate-400">

                                    Seats Left

                                </p>

                            </div>

                            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">

                                <h2 className="text-4xl font-black text-emerald-400">

                                    {ride.passengers?.length || 0}

                                </h2>

                                <p className="mt-3 text-sm text-slate-400">

                                    Joined

                                </p>

                            </div>

                            <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6 text-center">

                                <h2 className="text-4xl font-black text-blue-400">

                                    {ride.vehicle}

                                </h2>

                                <p className="mt-3 text-sm text-slate-400">

                                    Vehicle

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}