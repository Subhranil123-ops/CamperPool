import {
    Activity,
    CarFront,
    TrendingUp,
} from "lucide-react";

export default function DashboardStats({
    totalRidesCount,
    activeRidesCount,
}) {
    return (
        <section className="mb-12">
            <div className="mb-5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">
                    Ride Activity
                </p>

                <h2 className="mt-2 text-2xl font-black text-white">
                    Your numbers
                </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
                <StatCard
                    icon={CarFront}
                    label="Rides Offered"
                    value={totalRidesCount}
                    description="Total rides you've created"
                />

                <StatCard
                    icon={Activity}
                    label="Active Rides"
                    value={activeRidesCount}
                    description="Currently active rides"
                    accent="emerald"
                />
            </div>
        </section>
    );
}

function StatCard({
    icon: Icon,
    label,
    value,
    description,
    accent = "cyan",
}) {
    const styles = {
        cyan: {
            icon: "bg-cyan-500/10 text-cyan-400",
            glow: "bg-cyan-500/10",
        },
        emerald: {
            icon: "bg-emerald-500/10 text-emerald-400",
            glow: "bg-emerald-500/10",
        },
    };

    const style = styles[accent];

    return (
        <div className="group relative overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900/60 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-700">
            <div
                className={`absolute -right-12 -top-12 h-40 w-40 rounded-full blur-3xl ${style.glow}`}
            />

            <div className="relative z-10 flex items-start justify-between">
                <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                        {label}
                    </p>

                    <p className="mt-4 text-5xl font-black tracking-tight text-white">
                        {value}
                    </p>

                    <p className="mt-2 text-sm text-slate-500">
                        {description}
                    </p>
                </div>

                <div
                    className={`rounded-2xl p-3 ${style.icon}`}
                >
                    <Icon className="h-6 w-6" />
                </div>
            </div>
        </div>
    );
}