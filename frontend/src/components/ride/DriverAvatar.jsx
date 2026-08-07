export default function DriverAvatar({ username }) {

    const initials = username
        ? username
              .split(" ")
              .map((word) => word[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()
        : "?";

    return (
        <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 text-sm font-bold text-white shadow-lg shadow-blue-500/30">
                {initials}
            </div>

            <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">
                    Driver
                </p>

                <p className="font-semibold text-white">
                    {username}
                </p>
            </div>
        </div>
    );
}