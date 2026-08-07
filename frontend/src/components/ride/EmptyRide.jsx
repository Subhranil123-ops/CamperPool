import { SearchX, RotateCcw } from "lucide-react";
import Button from "@/components/ui/Button";

export default function EmptyRide({ onClearFilters }) {
    return (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-700 bg-slate-900/60 px-8 py-20 text-center">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-800">
                <SearchX className="h-12 w-12 text-slate-400" />
            </div>

            <h2 className="mt-8 text-3xl font-bold text-white">
                No Rides Found
            </h2>

            <p className="mt-3 max-w-md text-slate-400">
                We couldn't find any rides matching your current filters.
                Try changing the location, vehicle, date or status.
            </p>

            {onClearFilters && (
                <Button
                    variant="secondary"
                    className="mt-8 gap-2"
                    onClick={onClearFilters}
                >
                    <RotateCcw className="h-4 w-4" />
                    Clear Filters
                </Button>
            )}
        </div>
    );
}