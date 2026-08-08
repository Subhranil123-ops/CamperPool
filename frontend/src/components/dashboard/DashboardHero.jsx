import {
    ArrowUpRight,
    CarFront,
    Sparkles,
} from "lucide-react";

export default function DashboardHero() {
    return (
        <section className="relative mb-8 overflow-hidden rounded-[36px] border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-[#0A1424] p-8 shadow-[0_30px_90px_rgba(0,0,0,.35)] sm:p-10 lg:p-12">
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-cyan-500/10 blur-[110px]" />

            <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

            <div className="absolute right-10 top-10 hidden opacity-20 lg:block">
                <CarFront className="h-40 w-40 text-cyan-400" />
            </div>

            <div className="relative z-10 max-w-3xl">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2">
                    <Sparkles className="h-4 w-4 text-cyan-400" />

                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-300">
                        CampusPool Dashboard
                    </span>
                </div>

                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                    Your campus travel,
                    <span className="block text-cyan-400">
                        at a glance.
                    </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                    Manage the rides you've offered and keep
                    everything you need for your campus travel
                    in one place.
                </p>

                <div className="mt-7 flex items-center gap-2 text-sm text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    Your ride activity
                    <ArrowUpRight className="h-4 w-4" />
                </div>
            </div>
        </section>
    );
}