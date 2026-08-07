import {
    UserPlus,
    LogOut,
    SquarePen,
    Trash2,
    Ban,
    CheckCircle2,
    XCircle,
    ShieldCheck,
} from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function RideActions({

    ride,

    isOwner,

    isJoined,

    // Backend States
    // isLoading,
    // currentUser,

}) {

    const isFull = ride.status === "full";

    const isCancelled = ride.status === "cancelled";

    const canJoin =
        !isOwner &&
        !isJoined &&
        !isCancelled &&
        !isFull;

    const canLeave =
        !isOwner &&
        isJoined &&
        !isCancelled;

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

            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

            <div className="relative z-10">

                <div className="flex items-center justify-between">

                    <div>

                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">

                            Actions

                        </p>

                        <h2 className="mt-2 text-3xl font-black text-white">

                            Ride Controls

                        </h2>

                    </div>

                    <ShieldCheck className="h-8 w-8 text-cyan-400" />

                </div>

                <div className="my-8 h-px bg-slate-800" />

                {
                    isCancelled && (

                        <div className="mb-8 flex items-center gap-4 rounded-3xl border border-red-500/20 bg-red-500/10 p-6">

                            <XCircle className="h-7 w-7 text-red-400" />

                            <div>

                                <h3 className="font-bold text-red-300">

                                    Ride Cancelled

                                </h3>

                                <p className="mt-1 text-sm text-red-200">

                                    This ride is no longer available.

                                </p>

                            </div>

                        </div>

                    )
                }

                {
                    isFull && !isCancelled && (

                        <div className="mb-8 flex items-center gap-4 rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6">

                            <Ban className="h-7 w-7 text-yellow-400" />

                            <div>

                                <h3 className="font-bold text-yellow-300">

                                    Ride Full

                                </h3>

                                <p className="mt-1 text-sm text-yellow-200">

                                    No more seats are currently available.

                                </p>

                            </div>

                        </div>

                    )
                }

                {
                    canJoin && (

                        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-7">

                            <h3 className="text-2xl font-bold text-white">

                                Ready to Join?

                            </h3>

                            <p className="mt-3 leading-8 text-cyan-100">

                                Reserve your seat and become a part
                                of this ride instantly.

                            </p>

                            <Button
                                className="mt-8 w-full gap-3 py-6 text-base"

                                onClick={() => {

                                    // Call backend

                                }}

                            >

                                <UserPlus className="h-5 w-5" />

                                Join Ride

                            </Button>

                        </div>

                    )
                }

                {
                    canLeave && (

                        <div className="rounded-3xl border border-orange-500/20 bg-orange-500/10 p-7">

                            <h3 className="text-2xl font-bold text-white">

                                Already Joined

                            </h3>

                            <p className="mt-3 leading-8 text-orange-100">

                                Need to change your plans?
                                You can leave this ride anytime.

                            </p>

                            <Button
                                variant="destructive"
                                className="mt-8 w-full gap-3 py-6 text-base"

                                onClick={() => {

                                    // Call backend

                                }}

                            >

                                <LogOut className="h-5 w-5" />

                                Leave Ride

                            </Button>

                        </div>

                    )
                }

                {
                    isOwner && (

                        <div className="space-y-5">

                            <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">

                                <h3 className="text-xl font-bold text-white">

                                    Manage Your Ride

                                </h3>

                                <p className="mt-2 text-blue-100">

                                    Edit trip information or manage
                                    this ride below.

                                </p>

                            </div>

                            <div className="grid gap-4 md:grid-cols-3">

                                <Button

                                    className="gap-3"

                                    onClick={() => {

                                        // Call backend

                                    }}

                                >

                                    <SquarePen className="h-4 w-4" />

                                    Edit

                                </Button>

                                {

                                    !isCancelled && (

                                        <Button

                                            variant="secondary"

                                            className="gap-3"

                                            onClick={() => {

                                                // Call backend

                                            }}

                                        >

                                            <Ban className="h-4 w-4" />

                                            Cancel

                                        </Button>

                                    )

                                }

                                <Button

                                    variant="destructive"

                                    className="gap-3"

                                    onClick={() => {

                                        // Call backend

                                    }}

                                >

                                    <Trash2 className="h-4 w-4" />

                                    Delete

                                </Button>

                            </div>

                        </div>

                    )
                }

                {
                    !isOwner &&
                    !isJoined &&
                    !isCancelled &&
                    !isFull && (

                        <div className="mt-8 flex items-center justify-center gap-2 text-emerald-400">

                            <CheckCircle2 className="h-5 w-5" />

                            <span>

                                Seats are available for booking

                            </span>

                        </div>

                    )
                }

            </div>

        </Card>

    );

}