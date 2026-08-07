import {
    CarFront,
    Users,
    CircleCheckBig,
    TrendingUp,
} from "lucide-react";

export default function RideStats({ rides }) {

    const totalRides = rides.length;

    const activeRides = rides.filter(
        (ride) => ride.status === "active"
    ).length;

    const totalDrivers = new Set(
        rides.map((ride) => ride.driver?._id)
    ).size;

    const availableSeats = rides.reduce(
        (sum, ride) => sum + ride.available,
        0
    );

    const stats = [
        {
            title: "Available Rides",
            value: totalRides,
            icon: CarFront,
            color: "from-cyan-500 to-blue-500",
        },
        {
            title: "Active Drivers",
            value: totalDrivers,
            icon: Users,
            color: "from-emerald-500 to-green-500",
        },
        {
            title: "Open Seats",
            value: availableSeats,
            icon: CircleCheckBig,
            color: "from-violet-500 to-indigo-500",
        },
        {
            title: "Active Trips",
            value: activeRides,
            icon: TrendingUp,
            color: "from-orange-500 to-yellow-500",
        },
    ];

    return (
        <div className="mb-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

            {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                    <div
                        key={stat.title}
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-3xl
                            border
                            border-slate-800
                            bg-slate-900/70
                            p-6
                            backdrop-blur-xl
                            transition-all
                            duration-300
                            hover:-translate-y-1
                            hover:border-cyan-500/20
                        "
                    >

                        <div
                            className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${stat.color} opacity-10 blur-3xl transition-all duration-500 group-hover:scale-150`}
                        />

                        <div className="relative z-10 flex items-center justify-between">

                            <div>

                                <p className="text-sm text-slate-400">
                                    {stat.title}
                                </p>

                                <h2 className="mt-3 text-4xl font-black text-white">
                                    {stat.value}
                                </h2>

                            </div>

                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.color}`}
                            >
                                <Icon className="h-7 w-7 text-white" />
                            </div>

                        </div>

                    </div>
                );
            })}

        </div>
    );
}