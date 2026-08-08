import { ArrowRight, CarFront } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";
import RideList from "@/components/ride/RideList";

export default function OfferedRides({ rides }) {
    const hasRides = rides && rides.length > 0;

    return (
        <section className="pb-16">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                        Your rides
                    </p>

                    <h2 className="mt-2 text-3xl font-black text-white">
                        Rides You've Offered
                    </h2>

                    <p className="mt-2 max-w-xl text-sm leading-7 text-slate-500">
                        Manage the rides you've created for other
                        students to discover.
                    </p>
                </div>

                {hasRides && (
                    <span className="text-sm font-medium text-slate-500">
                        {rides.length}{" "}
                        {rides.length === 1 ? "ride" : "rides"}
                    </span>
                )}
            </div>

            {!hasRides ? (
                <EmptyOfferedRides />
            ) : (
                <RideList rides={rides} />
            )}
        </section>
    );
}

function EmptyOfferedRides() {
    return (
        <div className="rounded-[32px] border border-dashed border-slate-700 bg-slate-900/40 p-12 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-800">
                <CarFront className="h-9 w-9 text-slate-500" />
            </div>

            <h3 className="mt-7 text-2xl font-bold text-white">
                You haven't offered a ride yet
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-slate-500">
                Create your first ride and let other students
                travelling the same route join you.
            </p>

            <Link to="/createRide">
                <Button className="mt-7 gap-2">
                    Offer Your First Ride
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
}