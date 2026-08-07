const colors = {
    active:
        "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",

    full:
        "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",

    cancelled:
        "bg-red-500/15 text-red-400 border-red-500/30",
};

export default function StatusBadge({ status }) {
    return (
        <span
            className={`
                inline-flex
                items-center
                rounded-full
                border
                px-3
                py-1
                text-xs
                font-semibold
                capitalize
                ${colors[status] || colors.active}
            `}
        >
            {status}
        </span>
    );
}