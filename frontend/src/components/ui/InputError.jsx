import { AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function InputError({
  error,
  className,
}) {
  if (!error) return <div className="min-h-[22px]" />;

  return (
    <div
      className={cn(
        "mt-2 flex items-center gap-2 text-sm text-rose-400 animate-in fade-in slide-in-from-top-1 duration-200",
        className
      )}
    >
      <AlertCircle className="h-4 w-4 shrink-0" />

      <span className="leading-none">
        {error.message}
      </span>
    </div>
  );
}