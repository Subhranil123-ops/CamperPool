import RideCard from "./RideCard";

export default function RideList({ rides }) {
    return (
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {rides.map((ride) => (
                <RideCard
                    key={ride._id}
                    ride={ride}
                />
            ))}
        </div>
    );
}