import axios from "axios";
import toast from "react-hot-toast";
import { useForm, Controller, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
    CalendarDays,
    Clock3,
    FileText,
    MapPin,
    Route,
    Users,
} from "lucide-react";

import { rideSchema } from "@/schemas/rideSchema";

import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

import Field from "@/components/form/Field";
import VehicleSelector from "@/components/form/VehicleSelector";

import RidePreview from "@/components/form/RidePreview";

export default function RideForm() {

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: {
            errors,
            isSubmitting,
        },
    } = useForm({

        resolver: zodResolver(
            rideSchema
        ),

        defaultValues: {

            from: "",

            to: "",

            date: "",

            time: "",

            vehicle: "",

            total: "",

            available: "",

            notes: "",

        },

    });

    const values = useWatch({
        control,
    });

    const onSubmit = async (data) => {

        const toastId =
            toast.loading(
                "Creating Ride..."
            );

        try {

            const res =
                await axios.post(
                    "https://localhost:3000/createRide",
                    data,
                    {
                        withCredentials: true,
                    }
                );

            toast.success(
                res.data.message,
                {
                    id: toastId,
                }
            );

            reset();

        } catch (err) {

            toast.error(

                err.response?.data
                    ?.message ||

                "Something went wrong",

                {
                    id: toastId,
                }

            );

        }

    };

    return (

        <section
            className="
            relative
            min-h-screen

            overflow-hidden

            bg-[#060B16]

            px-6

            py-20
        "
        >

            <div
                className="
                absolute

                left-0

                top-0

                h-[450px]

                w-[450px]

                rounded-full

                bg-blue-600/10

                blur-[150px]
            "
            />

            <div
                className="
                absolute

                right-0

                bottom-0

                h-[500px]

                w-[500px]

                rounded-full

                bg-cyan-600/10

                blur-[150px]
            "
            />

            <div
                className="
                relative

                mx-auto

                max-w-7xl
            "
            >

                <div
                    className="
                    mb-14

                    text-center
                "
                >

                    <p
                        className="
                        inline-flex

                        rounded-full

                        border

                        border-blue-500/30

                        bg-blue-500/10

                        px-5

                        py-2

                        text-xs

                        font-semibold

                        uppercase

                        tracking-[0.35em]

                        text-blue-400
                    "
                    >
                        CampusPool
                    </p>

                    <h1
                        className="
                        mt-8

                        text-5xl

                        font-black

                        tracking-tight

                        text-white
                    "
                    >
                        Offer a Ride
                    </h1>

                    <p
                        className="
                        mx-auto

                        mt-5

                        max-w-2xl

                        text-lg

                        leading-8

                        text-slate-400
                    "
                    >
                        Share your journey with fellow students.
                        Save fuel, reduce costs and make travelling
                        smarter together.
                    </p>

                </div>

                <div
                    className="
                    grid

                    gap-10

                    lg:grid-cols-[1.15fr_.85fr]
                "
                >

                    <Card
                        padding="xl"
                        variant="gradient"
                    >

                        <form
                            onSubmit={handleSubmit(
                                onSubmit
                            )}
                            className="
                            space-y-8
                        "
                        >

                            <div className="grid gap-8 md:grid-cols-2">

                                <Field
                                    id="from"
                                    label="Pickup Location"
                                    placeholder="e.g. Damodar Hostel"
                                    icon={MapPin}
                                    error={errors.from}
                                    {...register("from")}
                                />

                                <Field
                                    id="to"
                                    label="Destination"
                                    placeholder="e.g. Connaught Place"
                                    icon={Route}
                                    error={errors.to}
                                    {...register("to")}
                                />

                                <Field
                                    id="date"
                                    type="date"
                                    label="Journey Date"
                                    icon={CalendarDays}
                                    error={errors.date}
                                    {...register("date")}
                                />

                                <Field
                                    id="time"
                                    type="time"
                                    label="Departure Time"
                                    icon={Clock3}
                                    error={errors.time}
                                    {...register("time")}
                                />

                            </div>

                            <Controller
                                control={control}
                                name="vehicle"
                                render={({ field }) => (
                                    <VehicleSelector
                                        value={field.value}
                                        onChange={field.onChange}
                                        error={errors.vehicle}
                                    />
                                )}
                            />

                            <div className="grid gap-8 md:grid-cols-2">

                                <Field
                                    id="total"
                                    type="number"
                                    min={1}
                                    label="Total Seats"
                                    placeholder="4"
                                    helper="Total seats in your vehicle."
                                    icon={Users}
                                    error={errors.total}
                                    {...register("total")}
                                />

                                <Field
                                    id="available"
                                    type="number"
                                    min={1}
                                    label="Available Seats"
                                    placeholder="3"
                                    helper="Seats available for passengers."
                                    icon={Users}
                                    error={errors.available}
                                    {...register("available")}
                                />

                            </div>

                            <Field
                                id="notes"
                                textarea
                                label="Additional Notes"
                                placeholder="Mention pickup landmark, luggage space, AC / Non AC, or any important information..."
                                icon={FileText}
                                helper="Optional • Maximum 250 characters"
                                error={errors.notes}
                                {...register("notes")}
                            />

                            <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6">

                                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                                    <div>

                                        <h3 className="text-lg font-bold text-white">
                                            Ready to publish?
                                        </h3>

                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                            Your ride will become visible to
                                            students immediately after creation.
                                            Make sure every detail is correct.
                                        </p>

                                    </div>

                                    <div className="flex flex-wrap gap-3">

                                        <span
                                            className="
                                            rounded-full
                                            border
                                            border-blue-500/20
                                            bg-blue-500/10
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            tracking-wide
                                            text-blue-300
                                        "
                                        >
                                            Verified Users
                                        </span>

                                        <span
                                            className="
                                            rounded-full
                                            border
                                            border-emerald-500/20
                                            bg-emerald-500/10
                                            px-4
                                            py-2
                                            text-xs
                                            font-semibold
                                            tracking-wide
                                            text-emerald-300"
                                        >
                                            Secure
                                        </span>

                                    </div>

                                </div>

                            </div>

                            <Button
                                type="submit"
                                loading={isSubmitting}
                                size="lg"
                                className="w-full rounded-2xl text-base"
                            >
                                Offer Ride
                            </Button>

                        </form>

                    </Card>

                    <div className="space-y-8">

                        <RidePreview

                            from={values.from}

                            to={values.to}

                            date={values.date}

                            time={values.time}

                            vehicle={values.vehicle}

                            total={values.total}

                            available={values.available}

                        />

                        <Card
                            variant="glass"
                            padding="lg"
                        >

                            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
                                Tips
                            </p>

                            <div className="mt-6 space-y-5">

                                <div className="flex gap-4">

                                    <div className="mt-1 h-3 w-3 rounded-full bg-blue-500" />

                                    <p className="text-sm leading-7 text-slate-300">
                                        Keep the pickup location precise to
                                        avoid confusion.
                                    </p>

                                </div>

                                <div className="flex gap-4">

                                    <div className="mt-1 h-3 w-3 rounded-full bg-cyan-500" />

                                    <p className="text-sm leading-7 text-slate-300">
                                        Mention luggage space or special
                                        conditions in the notes section.
                                    </p>

                                </div>

                                <div className="flex gap-4">

                                    <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500" />

                                    <p className="text-sm leading-7 text-slate-300">
                                        Arrive a few minutes early for a smooth
                                        departure.
                                    </p>

                                </div>

                            </div>

                        </Card>

                    </div>

                </div>

            </div>

            {/* Background Decoration */}

            <div
                className="
                pointer-events-none

                absolute

                left-20

                top-32

                h-72

                w-72

                rounded-full

                bg-blue-500/5

                blur-[120px]
            "
            />

            <div
                className="
                pointer-events-none

                absolute

                bottom-10

                right-20

                h-80

                w-80

                rounded-full

                bg-cyan-500/5

                blur-[150px]
            "
            />

            <div
                className="
                pointer-events-none

                absolute

                top-1/2

                left-1/2

                h-[700px]

                w-[700px]

                -translate-x-1/2

                -translate-y-1/2

                rounded-full

                border

                border-blue-500/5
            "
            />

            <div
                className="
                pointer-events-none

                absolute

                top-1/2

                left-1/2

                h-[900px]

                w-[900px]

                -translate-x-1/2

                -translate-y-1/2

                rounded-full

                border

                border-cyan-500/5
            "
            />

            <div
                className="
                pointer-events-none

                absolute

                inset-0

                bg-[linear-gradient(to_right,rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.015)_1px,transparent_1px)]

                bg-[size:80px_80px]

                opacity-40
            "
            />

        </section>

    );

}