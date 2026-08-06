import z from "zod";


export const rideSchema = z.object({
    from: z.string().min(1, "From is Required"),
    to: z.string().min(1, "To is Required"),
    date: z.string().min(1, "Date is Required"),
    time: z.string().min(1, "Time is Required"),
    vehicle: z.enum(["Bike", "Scooty", "Car", "Bicycle", "Auto", "Other"], { message: "Select a Vehicle" }),
    total: z.coerce.number().min(1, "Total seats must be at least 1"),
    available: z.coerce.number().min(1, "Available seats must be at least 1"),
    notes: z.string().optional()
})