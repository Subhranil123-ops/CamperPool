import { useEffect, useMemo, useState } from "react";

import DashboardHero from "@/components/dashboard/DashboardHero";
import QuickActions from "@/components/dashboard/QuickActions";
import DashboardStats from "@/components/dashboard/DashboardStats";
import NextRide from "@/components/dashboard/NextRide";
import OfferedRides from "@/components/dashboard/OfferedRides";

export default function Dashboard() {
    const [dashboardData, setDashboardData] = useState({
        rides: [],
        totalRidesCount: 0,
        activeRidesCount: 0,
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {
        try {
            setLoading(true);
            setError("");

            // Call backend

            /*
            Example response:

            const res = await axios.get("YOUR_API");

            setDashboardData({
                rides: res.data.rides || [],
                totalRidesCount: res.data.totalRidesCount || 0,
                activeRidesCount: res.data.activeRidesCount || 0,
            });
            */
        } catch (err) {
            setError(
                err.response?.data?.message ||
                    "Unable to load your dashboard."
            );
        } finally {
            setLoading(false);
        }
    };

    const nextRide = useMemo(() => {
        const activeRides = dashboardData.rides.filter(
            (ride) => ride.status === "active"
        );

        if (activeRides.length === 0) {
            return null;
        }

        return [...activeRides].sort((a, b) => {
            const dateA = new Date(
                `${a.date?.split("T")[0] || ""}T${a.time || "00:00"}`
            );

            const dateB = new Date(
                `${b.date?.split("T")[0] || ""}T${b.time || "00:00"}`
            );

            return dateA - dateB;
        })[0];
    }, [dashboardData.rides]);

    return (
        <main className="min-h-screen bg-[#060B16] px-4 py-8 text-white sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <DashboardHero />

                <QuickActions />

                {loading ? (
                    <DashboardLoading />
                ) : error ? (
                    <DashboardError message={error} />
                ) : (
                    <>
                        <DashboardStats
                            totalRidesCount={
                                dashboardData.totalRidesCount
                            }
                            activeRidesCount={
                                dashboardData.activeRidesCount
                            }
                        />

                        <NextRide ride={nextRide} />

                        <OfferedRides
                            rides={dashboardData.rides}
                        />
                    </>
                )}
            </div>
        </main>
    );
}

function DashboardLoading() {
    return (
        <div className="rounded-[32px] border border-slate-800 bg-slate-900/60 p-16 text-center">
            <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-700 border-t-cyan-400" />

            <p className="mt-5 text-sm text-slate-400">
                Loading your rides...
            </p>
        </div>
    );
}

function DashboardError({ message }) {
    return (
        <div className="rounded-[32px] border border-red-500/20 bg-red-500/10 p-7">
            <p className="text-sm font-semibold text-red-300">
                {message}
            </p>
        </div>
    );
}