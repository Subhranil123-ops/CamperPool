import {
    UserPlus,
    LogOut,
    SquarePen,
    Trash2,
    Ban,
    XCircle,
    ShieldCheck,
    CheckCircle2,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function RideActions({
    ride,
    isOwner,
    isJoined,
}) {
    const navigate = useNavigate();

    const isFull = ride?.status === "full";
    const isCancelled = ride?.status === "cancelled";

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
                relative overflow-hidden rounded-[32px]
                border border-slate-800
                bg-slate-900/70 p-8
                backdrop-blur-xl
            "
        >
            <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-[90px]" />

            <div className="relative z-10">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                            Actions
                        </p>

                        <h2 className="mt-2 text-2xl font-black text-white">
                            Ride Controls
                        </h2>
                    </div>

                    <div className="rounded-2xl bg-cyan-500/10 p-3">
                        <ShieldCheck className="h-6 w-6 text-cyan-400" />
                    </div>
                </div>

                <div className="my-7 h-px bg-slate-800" />

                {isCancelled && (
                    <StateMessage
                        icon={XCircle}
                        title="Ride Cancelled"
                        description="This ride is no longer available."
                        className="border-red-500/20 bg-red-500/10"
                        iconClass="text-red-400"
                        textClass="text-red-200"
                    />
                )}

                {isFull && !isCancelled && (
                    <StateMessage
                        icon={Ban}
                        title="Ride Full"
                        description="There are currently no available seats."
                        className="border-yellow-500/20 bg-yellow-500/10"
                        iconClass="text-yellow-400"
                        textClass="text-yellow-200"
                    />
                )}

                {canJoin && (
                    <ActionBox
                        title="Ready to join?"
                        description="Reserve an available seat on this ride."
                        buttonText="Join Ride"
                        icon={UserPlus}
                        onClick={() => {
                            // Call backend
                        }}
                    />
                )}

                {canLeave && (
                    <ActionBox
                        title="You're part of this ride"
                        description="If your plans change, you can leave the ride."
                        buttonText="Leave Ride"
                        icon={LogOut}
                        variant="destructive"
                        onClick={() => {
                            // Call backend
                        }}
                    />
                )}

                {isOwner && (
                    <div className="space-y-5">
                        <div className="rounded-3xl border border-blue-500/20 bg-blue-500/10 p-6">
                            <h3 className="text-xl font-bold text-white">
                                Manage Your Ride
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-blue-100">
                                Update or manage the ride you created.
                            </p>
                        </div>

                        <div className="grid gap-3">
                            <Button
                                className="w-full gap-3"
                                onClick={() => {
                                    navigate(`/rides/${ride._id}/edit`);
                                }}
                            >
                                <SquarePen className="h-4 w-4" />
                                Edit Ride
                            </Button>

                            {!isCancelled && (
                                <Button
                                    variant="secondary"
                                    className="w-full gap-3"
                                    onClick={() => {
                                        // Call backend
                                    }}
                                >
                                    <Ban className="h-4 w-4" />
                                    Cancel Ride
                                </Button>
                            )}

                            <Button
                                variant="destructive"
                                className="w-full gap-3"
                                onClick={() => {
                                    // Call backend
                                }}
                            >
                                <Trash2 className="h-4 w-4" />
                                Delete Ride
                            </Button>
                        </div>
                    </div>
                )}

                {!isOwner &&
                    !isJoined &&
                    !isCancelled &&
                    !isFull && (
                        <div className="mt-6 flex items-center justify-center gap-2 text-sm text-emerald-400">
                            <CheckCircle2 className="h-4 w-4" />
                            Seat available
                        </div>
                    )}
            </div>
        </Card>
    );
}

function StateMessage({
    icon: Icon,
    title,
    description,
    className,
    iconClass,
    textClass,
}) {
    return (
        <div
            className={`flex items-center gap-4 rounded-3xl border p-6 ${className}`}
        >
            <Icon className={`h-7 w-7 ${iconClass}`} />

            <div>
                <h3 className="font-bold text-white">
                    {title}
                </h3>

                <p className={`mt-1 text-sm ${textClass}`}>
                    {description}
                </p>
            </div>
        </div>
    );
}

function ActionBox({
    title,
    description,
    buttonText,
    icon: Icon,
    onClick,
    variant,
}) {
    return (
        <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-7">
            <h3 className="text-2xl font-bold text-white">
                {title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
                {description}
            </p>

            <Button
                variant={variant}
                className="mt-7 w-full gap-3 py-6 text-base"
                onClick={onClick}
            >
                <Icon className="h-5 w-5" />
                {buttonText}
            </Button>
        </div>
    );
}