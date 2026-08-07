import { Users } from "lucide-react";

export default function SeatBadge({
    available,
    total,
}) {

    const percentage = (available / total) * 100;

    return (
        <div className="rounded-2xl bg-slate-800/70 p-4">

            <div className="mb-3 flex items-center justify-between">

                <div className="flex items-center gap-2">

                    <Users className="h-4 w-4 text-cyan-400" />

                    <span className="text-sm text-slate-300">
                        Seats
                    </span>

                </div>

                <span className="font-semibold text-white">
                    {available}/{total}
                </span>

            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-700">

                <div
                    className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-500"
                    style={{
                        width: `${percentage}%`,
                    }}
                />

            </div>

        </div>
    );
}