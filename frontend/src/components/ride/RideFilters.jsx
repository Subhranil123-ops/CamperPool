import {
    CalendarDays,
    Car,
    Filter,
    MapPin,
    Route,
    RotateCcw,
    Search,
} from "lucide-react";

import Field from "@/components/form/Field";
import Button from "@/components/ui/Button";

export default function RideFilters({ filters, setFilters, options }) {

    const handleChange = (e) => {
        setFilters((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const clearFilters = () => {
        setFilters({
            from: "",
            to: "",
            vehicle: "",
            status: "",
            date: "",
        });
    };

    const activeFilters = Object.values(filters).filter(Boolean).length;

    return (
        <div className="relative mb-12 overflow-hidden rounded-[32px] border border-slate-800 bg-slate-900/70 p-8 shadow-[0_15px_60px_rgba(0,0,0,.35)] backdrop-blur-xl">

            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10">

                <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                    <div>

                        <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-2 text-cyan-300">

                            <Search className="h-4 w-4" />

                            Smart Ride Search

                        </div>

                        <h2 className="mt-5 text-3xl font-black text-white">

                            Filter Your Journey

                        </h2>

                        <p className="mt-2 text-slate-400">

                            Instantly narrow down rides based on your
                            destination, vehicle and preferred travel date.

                        </p>

                    </div>

                    <div className="flex gap-4">

                        <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-6 py-4 text-center">

                            <p className="text-xs uppercase tracking-widest text-slate-500">
                                Active Filters
                            </p>

                            <h2 className="mt-2 text-3xl font-black text-cyan-400">
                                {activeFilters}
                            </h2>

                        </div>

                        <Button
                            type="button"
                            variant="secondary"
                            onClick={clearFilters}
                            className="h-auto gap-2 rounded-2xl px-6"
                        >
                            <RotateCcw className="h-4 w-4" />
                            Clear
                        </Button>

                    </div>

                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">

                    <Field id="from" select label="Pickup" icon={MapPin}>
                        <select
                            id="from"
                            name="from"
                            value={filters.from}
                            onChange={handleChange}
                            className="h-14 w-full rounded-2xl bg-transparent pl-14 pr-4 text-white outline-none"
                        >
                            <option value="" className="bg-slate-900">
                                Anywhere
                            </option>

                            {options.fromOptions.map((location) => (
                                <option
                                    key={location}
                                    value={location}
                                    className="bg-slate-900"
                                >
                                    {location}
                                </option>
                            ))}

                        </select>
                    </Field>

                    <Field id="to" select label="Destination" icon={Route}>
                        <select
                            id="to"
                            name="to"
                            value={filters.to}
                            onChange={handleChange}
                            className="h-14 w-full rounded-2xl bg-transparent pl-14 pr-4 text-white outline-none"
                        >
                            <option value="" className="bg-slate-900">
                                Anywhere
                            </option>

                            {options.toOptions.map((location) => (
                                <option
                                    key={location}
                                    value={location}
                                    className="bg-slate-900"
                                >
                                    {location}
                                </option>
                            ))}

                        </select>
                    </Field>

                    <Field id="vehicle" select label="Vehicle" icon={Car}>
                        <select
                            id="vehicle"
                            name="vehicle"
                            value={filters.vehicle}
                            onChange={handleChange}
                            className="h-14 w-full rounded-2xl bg-transparent pl-14 pr-4 text-white outline-none"
                        >
                            <option value="" className="bg-slate-900">
                                All Vehicles
                            </option>

                            {options.vehicleOptions.map((vehicle) => (
                                <option
                                    key={vehicle}
                                    value={vehicle}
                                    className="bg-slate-900"
                                >
                                    {vehicle}
                                </option>
                            ))}

                        </select>
                    </Field>

                    <Field id="status" select label="Status" icon={Filter}>
                        <select
                            id="status"
                            name="status"
                            value={filters.status}
                            onChange={handleChange}
                            className="h-14 w-full rounded-2xl bg-transparent pl-14 pr-4 text-white outline-none"
                        >
                            <option value="" className="bg-slate-900">
                                All Status
                            </option>

                            {options.statusOptions.map((status) => (
                                <option
                                    key={status}
                                    value={status}
                                    className="bg-slate-900"
                                >
                                    {status}
                                </option>
                            ))}

                        </select>
                    </Field>

                    <Field
                        id="date"
                        type="date"
                        name="date"
                        label="Travel Date"
                        icon={CalendarDays}
                        value={filters.date}
                        onChange={handleChange}
                    />

                </div>

                {activeFilters > 0 && (

                    <div className="mt-8 flex flex-wrap gap-3">

                        {filters.from && (
                            <span className="rounded-full bg-cyan-500/15 px-4 py-2 text-sm text-cyan-300">
                                📍 {filters.from}
                            </span>
                        )}

                        {filters.to && (
                            <span className="rounded-full bg-blue-500/15 px-4 py-2 text-sm text-blue-300">
                                🎯 {filters.to}
                            </span>
                        )}

                        {filters.vehicle && (
                            <span className="rounded-full bg-violet-500/15 px-4 py-2 text-sm text-violet-300">
                                🚗 {filters.vehicle}
                            </span>
                        )}

                        {filters.status && (
                            <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-sm text-emerald-300">
                                ⚡ {filters.status}
                            </span>
                        )}

                        {filters.date && (
                            <span className="rounded-full bg-orange-500/15 px-4 py-2 text-sm text-orange-300">
                                📅 {filters.date}
                            </span>
                        )}

                    </div>

                )}

            </div>

        </div>
    );
}