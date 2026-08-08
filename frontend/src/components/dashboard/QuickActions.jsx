import { Plus, Search, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import Button from "@/components/ui/Button";

export default function QuickActions() {
    return (
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:justify-end">
            <Link to="/createRide">
                <Button className="w-full gap-2 sm:w-auto">
                    <Plus className="h-4 w-4" />
                    Offer a Ride
                </Button>
            </Link>

            <Link to="/find-lift">
                <Button
                    variant="secondary"
                    className="w-full gap-2 sm:w-auto"
                >
                    <Search className="h-4 w-4" />
                    Find a Lift
                    <ArrowRight className="h-4 w-4" />
                </Button>
            </Link>
        </div>
    );
}