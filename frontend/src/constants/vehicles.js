import {
    Car,
    Bike,
    BikeIcon,
    CircleDot,
    Sparkles,
    CarFront,
} from "lucide-react";

export const VEHICLES = [
    {
        id: "Car",
        label: "Car",
        icon: Car,
        description: "Comfortable for long rides",
        seats: "4-7",
        color:
            "from-blue-500 to-cyan-500",
    },

    {
        id: "Bike",
        label: "Bike",
        icon: Bike,
        description: "Fast & economical",
        seats: "1",
        color:
            "from-orange-500 to-amber-500",
    },

    {
        id: "Scooty",
        label: "Scooty",
        icon: BikeIcon,
        description: "Perfect for campus travel",
        seats: "1",
        color:
            "from-violet-500 to-fuchsia-500",
    },

    {
        id: "Bicycle",
        label: "Bicycle",
        icon: CircleDot,
        description: "Eco friendly",
        seats: "1",
        color:
            "from-green-500 to-emerald-500",
    },

    {
        id: "Auto",
        label: "Auto",
        icon: CarFront,
        description: "Affordable city rides",
        seats: "3",
        color:
            "from-yellow-500 to-orange-500",
    },

    {
        id: "Other",
        label: "Other",
        icon: Sparkles,
        description: "Any other vehicle",
        seats: "--",
        color:
            "from-slate-500 to-slate-700",
    },
];

export const VEHICLE_MAP = Object.fromEntries(
    VEHICLES.map((vehicle) => [
        vehicle.id,
        vehicle,
    ])
);