import RideList from "../../components/ride/RideList";

export default function FindLift() {
  const rides = [
    {
      _id: 1,
      from: "Damodar Hostel",
      to: "School of Engineering",
      date: "Today",
      time: "10:30 AM",
      vehicle: "Bike",
      available: 2,
      total: 4,
      status: "active",
      driver: {
        username: "Subhranil",
      },
    },
    {
      _id: 2,
      from: "Library",
      to: "Admin Block",
      date: "Today",
      time: "11:15 AM",
      vehicle: "Scooty",
      available: 1,
      total: 2,
      status: "active",
      driver: {
        username: "Rahul",
      },
    },
    {
      _id: 3,
      from: "Periyar Hostel",
      to: "ELC",
      date: "Tomorrow",
      time: "9:00 AM",
      vehicle: "Car",
      available: 3,
      total: 4,
      status: "full",
      driver: {
        username: "Amit",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-2 text-4xl font-bold text-white">
          Find a Ride
        </h1>

        <p className="mb-8 text-slate-400">
          Travel safely with fellow JNU students.
        </p>

        <RideList rides={rides} />
      </div>
    </div>
  );
}