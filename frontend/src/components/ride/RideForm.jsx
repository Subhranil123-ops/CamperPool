// RideForm.jsx (PART 1)

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { rideSchema } from "@/schemas/rideSchema";
import axios from "axios";
import toast from "react-hot-toast";
import {
    MapPin,
    Flag,
    CalendarDays,
    Clock3,
    Car,
    Users,
    FileText,
    Plus,
    Loader2,
} from "lucide-react";

export default function RideForm() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(rideSchema),
    });

    const onSubmit = async (data) => {
        const toastId = toast.loading("Creating Ride...");

        try {
            const res = await axios.post(
                "https://localhost:3000/createRide",
                data,
                {
                    withCredentials: true,
                }
            );

            toast.success(res.data.message, {
                id: toastId,
            });

            reset();
        } catch (err) {
            toast.error(
                err.response?.data?.message || "Something went wrong",
                {
                    id: toastId,
                }
            );
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center px-4 py-16">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl"></div>

                <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-indigo-200/30 blur-3xl"></div>
            </div>

            <div className="relative w-full max-w-5xl">
                <div className="rounded-[32px] border border-white/60 bg-white/80 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,0.12)] overflow-hidden">

                    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 p-10 text-white">

                        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm backdrop-blur">

                            <Car className="h-4 w-4" />

                            CampusPool
                        </div>

                        <h1 className="mt-6 text-4xl font-black tracking-tight">
                            Offer a Ride
                        </h1>

                        <p className="mt-3 max-w-xl text-blue-100 text-lg leading-relaxed">
                            Help fellow students travel together.
                            Share your ride, reduce costs and make
                            campus commuting easier.
                        </p>
                    </div>

                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="p-8 md:p-10"
                    >

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

                            {/* FROM */}

                            <div className="space-y-2">
                                <label
                                    htmlFor="from"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Pickup Location
                                </label>

                                <div
                                    className={`group flex items-center rounded-2xl border bg-white transition-all duration-300
                                    ${errors.from
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <MapPin className="ml-5 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                    <input
                                        id="from"
                                        type="text"
                                        placeholder="e.g. JNU Main Gate"
                                        {...register("from")}
                                        className="w-full bg-transparent px-4 py-4 text-slate-700 placeholder:text-slate-400 outline-none"
                                    />
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.from?.message}
                                </p>
                            </div>

                            {/* TO */}

                            <div className="space-y-2">
                                <label
                                    htmlFor="to"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Destination
                                </label>

                                <div
                                    className={`group flex items-center rounded-2xl border bg-white transition-all duration-300
                                    ${errors.to
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <Flag className="ml-5 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                    <input
                                        id="to"
                                        type="text"
                                        placeholder="e.g. Connaught Place"
                                        {...register("to")}
                                        className="w-full bg-transparent px-4 py-4 text-slate-700 placeholder:text-slate-400 outline-none"
                                    />
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.to?.message}
                                </p>
                            </div>

                            {/* DATE */}

                            <div className="space-y-2">
                                <label
                                    htmlFor="date"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Journey Date
                                </label>

                                <div
                                    className={`group flex items-center rounded-2xl border bg-white transition-all duration-300
                                    ${errors.date
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <CalendarDays className="ml-5 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                    <input
                                        id="date"
                                        type="date"
                                        {...register("date")}
                                        className="w-full bg-transparent px-4 py-4 text-slate-700 outline-none"
                                    />
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.date?.message}
                                </p>
                            </div>

                            {/* TIME */}

                            <div className="space-y-2">
                                <label
                                    htmlFor="time"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Departure Time
                                </label>

                                <div
                                    className={`group flex items-center rounded-2xl border bg-white transition-all duration-300
                                    ${errors.time
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <Clock3 className="ml-5 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                    <input
                                        id="time"
                                        type="time"
                                        {...register("time")}
                                        className="w-full bg-transparent px-4 py-4 text-slate-700 outline-none"
                                    />
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.time?.message}
                                </p>
                            </div>

                            {/* VEHICLE */}

                            <div className="space-y-2">
                                <label
                                    htmlFor="vehicle"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Vehicle
                                </label>

                                <div
                                    className={`group flex items-center rounded-2xl border bg-white transition-all duration-300
                                    ${errors.vehicle
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <Car className="ml-5 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                    <select
                                        id="vehicle"
                                        {...register("vehicle")}
                                        className="w-full appearance-none bg-transparent px-4 py-4 text-slate-700 outline-none cursor-pointer"
                                    >
                                        <option value="">
                                            Select your vehicle
                                        </option>

                                        <option value="Car">
                                            🚗 Car
                                        </option>

                                        <option value="Bike">
                                            🏍 Bike
                                        </option>

                                        <option value="Auto">
                                            🛺 Auto
                                        </option>
                                    </select>
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.vehicle?.message}
                                </p>
                            </div>

                            {/* TOTAL SEATS */}

                            <div className="space-y-2">
                                <label
                                    htmlFor="total"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Total Seats
                                </label>

                                <div
                                    className={`group flex items-center rounded-2xl border bg-white transition-all duration-300
                                    ${errors.total
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <Users className="ml-5 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                    <input
                                        id="total"
                                        type="number"
                                        min={1}
                                        placeholder="4"
                                        {...register("total")}
                                        className="w-full bg-transparent px-4 py-4 text-slate-700 placeholder:text-slate-400 outline-none"
                                    />
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.total?.message}
                                </p>
                            </div>

                            {/* AVAILABLE */}

                            <div className="space-y-2">
                                <label
                                    htmlFor="available"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Available Seats
                                </label>

                                <div
                                    className={`group flex items-center rounded-2xl border bg-white transition-all duration-300
                                    ${errors.available
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <Users className="ml-5 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                    <input
                                        id="available"
                                        type="number"
                                        min={1}
                                        placeholder="3"
                                        {...register("available")}
                                        className="w-full bg-transparent px-4 py-4 text-slate-700 placeholder:text-slate-400 outline-none"
                                    />
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.available?.message}
                                </p>
                            </div>

                            {/* NOTES */}

                            <div className="md:col-span-2 space-y-2">
                                <label
                                    htmlFor="notes"
                                    className="text-sm font-semibold text-slate-700"
                                >
                                    Additional Notes
                                </label>

                                <div
                                    className={`group rounded-2xl border bg-white transition-all duration-300
                                    ${errors.notes
                                            ? "border-red-400 ring-4 ring-red-100"
                                            : "border-slate-200 hover:border-blue-400 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                                        }`}
                                >
                                    <div className="flex items-start gap-4 px-5 pt-5">
                                        <FileText className="mt-1 h-5 w-5 text-slate-400 group-focus-within:text-blue-600 transition-colors" />

                                        <textarea
                                            id="notes"
                                            rows={5}
                                            placeholder="Pickup landmark, luggage information, contact instructions..."
                                            {...register("notes")}
                                            className="w-full resize-none bg-transparent text-slate-700 placeholder:text-slate-400 outline-none"
                                        />
                                    </div>
                                </div>

                                <p className="min-h-[20px] text-sm font-medium text-red-500">
                                    {errors.notes?.message}
                                </p>
                            </div>

                        </div>

                        {/* Footer */}

                        <div className="mt-10 flex flex-col gap-6 border-t border-slate-200 pt-8">

                            <div className="flex flex-wrap items-center justify-between gap-4">

                                <div>
                                    <h3 className="text-lg font-bold text-slate-800">
                                        Ready to share your ride?
                                    </h3>

                                    <p className="mt-1 text-sm text-slate-500">
                                        Double-check the details before publishing.
                                    </p>
                                </div>

                                <div className="hidden md:flex items-center gap-3">

                                    <div className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2">

                                        <p className="text-xs font-medium uppercase tracking-wider text-blue-600">
                                            Secure
                                        </p>

                                        <p className="mt-1 text-sm text-slate-700">
                                            Only logged in users can offer rides
                                        </p>

                                    </div>

                                </div>

                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 px-8 py-5 font-semibold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-300/40 disabled:cursor-not-allowed disabled:opacity-70"
                            >

                                <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>

                                <span className="relative flex items-center justify-center gap-3">

                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="h-5 w-5 animate-spin" />
                                            Creating Ride...
                                        </>
                                    ) : (
                                        <>
                                            <Plus className="h-5 w-5 transition-transform duration-300 group-hover:rotate-90" />
                                            Offer Ride
                                        </>
                                    )}

                                </span>

                            </button>

                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

}