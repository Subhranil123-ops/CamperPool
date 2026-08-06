import RideCard from "./RideCard";

export default function RideList({ rides }) {
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {rides.map((ride) => (
        <RideCard
          key={ride._id}
          ride={ride}
        />
      ))}
    </div>
  );
}