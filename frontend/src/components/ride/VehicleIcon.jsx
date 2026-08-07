import {
    Bike,
    Car,
    CircleHelp,
    BikeIcon,
    BusFront,
} from "lucide-react";

export default function VehicleIcon({
    vehicle,
    className = "h-6 w-6",
}) {

    const icons = {
        Car: Car,
        Bike: Bike,
        Scooty: BikeIcon,
        Bicycle: Bike,
        Auto: BusFront,
        Other: CircleHelp,
    };

    const Icon = icons[vehicle] || CircleHelp;

    return (
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 ring-1 ring-blue-500/20">
            <Icon className={`${className} text-cyan-300`} />
        </div>
    );
}