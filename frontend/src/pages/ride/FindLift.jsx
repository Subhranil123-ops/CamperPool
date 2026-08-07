import { useEffect, useState } from "react";
import axios from "axios";
import { Search, Sparkles } from "lucide-react";

import RideFilters from "@/components/ride/RideFilters";
import RideList from "@/components/ride/RideList";
import RideStats from "@/components/ride/RideStats";
import EmptyRide from "@/components/ride/EmptyRide";

export default function FindLift() {

    const [rides, setRides] = useState([]);

    const [filters, setFilters] = useState({
        from: "",
        to: "",
        vehicle: "",
        status: "",
        date: "",
    });

    const [options, setOptions] = useState({
        fromOptions: [],
        toOptions: [],
        vehicleOptions: [],
        statusOptions: [],
    });

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        fetchRides();
    }, [filters]);

    const fetchRides = async () => {
        try {

            setLoading(true);
            setError("");

            const res = await axios.get(
                "https://localhost:3000/rides",
                {
                    params: filters,
                    withCredentials: true,
                }
            );

            setRides(res.data.rides);

            setOptions({
                fromOptions: res.data.fromOptions,
                toOptions: res.data.toOptions,
                vehicleOptions: res.data.vehicleOptions,
                statusOptions: res.data.statusOptions,
            });

        } catch (err) {

            setError(
                err.response?.data?.message ||
                "Unable to load rides."
            );

        } finally {

            setLoading(false);

        }
    };

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#050816]">

            {/* Background */}

            <div className="absolute inset-0">

                <div className="absolute -left-52 -top-52 h-[32rem] w-[32rem] rounded-full bg-cyan-500/10 blur-[170px]" />

                <div className="absolute right-0 top-0 h-[28rem] w-[28rem] rounded-full bg-blue-600/10 blur-[160px]" />

                <div className="absolute bottom-0 left-1/2 h-[25rem] w-[25rem] -translate-x-1/2 rounded-full bg-violet-500/10 blur-[170px]" />

                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 py-14">

                {/* Hero */}

                <div className="relative overflow-hidden rounded-[36px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-10 shadow-[0_20px_80px_rgba(0,0,0,.35)]">

                    <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

                    <div className="absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

                    <div className="relative flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">

                        {/* Left */}

                        <div className="max-w-3xl">

                            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-medium text-cyan-300">

                                <Sparkles className="h-4 w-4" />

                                Campus Smart Ride Matching

                            </div>

                            <h1 className="mt-7 text-5xl font-black leading-tight text-white md:text-6xl">

                                Find Your

                                <br />

                                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">

                                    Perfect Ride

                                </span>

                            </h1>

                            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">

                                Browse rides posted by verified CampusPool
                                members, compare routes, choose the best
                                vehicle and travel smarter with your campus
                                community.

                            </p>

                            <div className="mt-10 flex flex-wrap gap-4">

                                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-4">

                                    <p className="text-xs uppercase tracking-widest text-cyan-300">
                                        Live Results
                                    </p>

                                    <h2 className="mt-2 text-3xl font-black text-white">
                                        {rides.length}
                                    </h2>

                                </div>

                                <div className="rounded-2xl border border-slate-800 bg-slate-900/80 px-5 py-4">

                                    <p className="text-xs uppercase tracking-widest text-slate-400">
                                        Search Mode
                                    </p>

                                    <h2 className="mt-2 text-3xl font-black text-white">
                                        Smart
                                    </h2>

                                </div>

                            </div>

                        </div>

                        {/* Right */}

                        <div className="relative">

                            <div className="rounded-[32px] border border-slate-800 bg-slate-900/70 p-8 backdrop-blur-xl">

                                <div className="flex items-center gap-3">

                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600">

                                        <Search className="h-7 w-7 text-white" />

                                    </div>

                                    <div>

                                        <p className="text-sm text-slate-400">
                                            CampusPool AI Search
                                        </p>

                                        <h3 className="text-xl font-bold text-white">
                                            Ready to Explore
                                        </h3>

                                    </div>

                                </div>

                                <div className="mt-8 space-y-4">

                                    <div className="rounded-xl bg-slate-800/60 p-4">
                                        <p className="text-sm text-slate-400">
                                            Verified Students
                                        </p>

                                        <p className="mt-1 text-2xl font-bold text-white">
                                            100%
                                        </p>
                                    </div>

                                    <div className="rounded-xl bg-slate-800/60 p-4">
                                        <p className="text-sm text-slate-400">
                                            Route Matching
                                        </p>

                                        <p className="mt-1 text-2xl font-bold text-emerald-400">
                                            Live
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                {/* Stats */}

                <div className="mt-12">

                    <RideStats rides={rides} />

                </div>

                {/* Filters */}

                <RideFilters
                    filters={filters}
                    setFilters={setFilters}
                    options={options}
                />

                                {/* Content */}

                {loading ? (

                    <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {[...Array(6)].map((_, index) => (

                            <div
                                key={index}
                                className="animate-pulse overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/70 p-7"
                            >

                                <div className="flex items-center justify-between">

                                    <div className="h-12 w-12 rounded-2xl bg-slate-800" />

                                    <div className="h-7 w-24 rounded-full bg-slate-800" />

                                </div>

                                <div className="mt-8 h-6 w-40 rounded bg-slate-800" />

                                <div className="mt-3 h-5 w-32 rounded bg-slate-800" />

                                <div className="my-8 h-px bg-slate-800" />

                                <div className="space-y-4">

                                    <div className="h-4 rounded bg-slate-800" />

                                    <div className="h-4 rounded bg-slate-800" />

                                    <div className="h-4 rounded bg-slate-800" />

                                    <div className="h-4 rounded bg-slate-800" />

                                </div>

                                <div className="mt-8 h-12 rounded-2xl bg-slate-800" />

                            </div>

                        ))}

                    </div>

                ) : error ? (

                    <div className="mt-10 overflow-hidden rounded-3xl border border-red-500/20 bg-red-500/10 p-8">

                        <div className="flex items-center gap-5">

                            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/20">

                                <span className="text-3xl">⚠️</span>

                            </div>

                            <div>

                                <h2 className="text-2xl font-bold text-white">

                                    Something went wrong

                                </h2>

                                <p className="mt-2 text-slate-300">

                                    {error}

                                </p>

                            </div>

                        </div>

                    </div>

                ) : rides.length === 0 ? (

                    <div className="mt-12">

                        <EmptyRide
                            onClearFilters={() =>
                                setFilters({
                                    from: "",
                                    to: "",
                                    vehicle: "",
                                    status: "",
                                    date: "",
                                })
                            }
                        />

                    </div>

                ) : (

                    <>

                        {/* Result Header */}

                        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                            <div>

                                <h2 className="text-3xl font-black text-white">

                                    Available Rides

                                </h2>

                                <p className="mt-2 text-slate-400">

                                    {rides.length} ride{rides.length !== 1 && "s"} found for your search.

                                </p>

                            </div>

                            <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-3">

                                <span className="text-sm font-medium text-cyan-300">

                                    Live Results • Updated Automatically

                                </span>

                            </div>

                        </div>

                        <RideList rides={rides} />

                    </>

                )}

            </div>

        </section>

    );

}