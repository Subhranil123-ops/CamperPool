
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../schemas/authSchema";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Phone, AtSign } from "lucide-react";

import axios from "axios";

import Logo from "../../components/common/Logo";
import AuthInput from "../../components/auth/AuthInput";
import PasswordField from "../../components/auth/PasswordField";
import AnimatedBackground from "../../components/auth/AnimatedBackground";
import AuthButton from "../../components/auth/AuthButton";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";

export default function Register() {
    const navigate = useNavigate();

    const { register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({ resolver: zodResolver(registerSchema) })

    async function onSubmit(data) {
        // e.preventDefault();
        // console.log(formData);
        try {
            const response = await axios.post("https://localhost:3000/auth/register", data, { withCredentials: true });
            if (response.data.success) {
                toast.success(response.data.message);
                setTimeout(() => { navigate("/login") }, 1000);
            }
        } catch (error) {
            let message = "Something went wrong.";

            if (!error.response) {
                message = "Unable to connect to server.";
            } else {
                message = error.response.data?.message || message;
            }

            toast.error(message);
        }

    }

    const onError = (errors) => {
        const firstError = Object.values(errors)[0];
        if (firstError?.message) {
            toast.error(firstError.message);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-[#09090B]">
            <AnimatedBackground />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center justify-center px-6 py-10">
                <div className="grid w-full items-center gap-16 lg:grid-cols-2">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: .6 }}
                        className="hidden lg:block"
                    >
                        <Logo />

                        <span className="mt-8 inline-flex rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-400">
                            Trusted Campus Ride Sharing
                        </span>

                        <h1 className="mt-8 text-5xl font-black leading-tight text-white">
                            Join the safest
                            <br />
                            ride-sharing
                            <br />
                            community.
                        </h1>

                        <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
                            Create your CampusPool account and connect with
                            verified students, offer rides, save travel costs,
                            and travel safely every day.
                        </p>

                        <div className="mt-12 space-y-6">
                            {[
                                "Verified student accounts",
                                "Campus-only pickup & drop",
                                "Split travel costs",
                                "Fast ride matching",
                            ].map((item, index) => (
                                <div key={index} className="flex items-center gap-4">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/10 text-indigo-400">
                                        ✓
                                    </div>
                                    <p className="text-lg text-slate-300">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Register Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: .6 }}
                        className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-xl"
                    >
                        <h2 className="text-3xl font-bold text-white">
                            Create Account
                        </h2>

                        <p className="mt-2 text-slate-400">
                            Join CampusPool and start sharing rides.
                        </p>

                        <form
                            noValidate
                            onSubmit={handleSubmit(onSubmit, onError)}
                            className="mt-10 space-y-6"
                        >

                            {/* Full Name */}
                            <AuthInput
                                label="Full Name"
                                placeholder="John Doe"
                                icon={<User size={18} />}
                                error={errors.fullname?.message}
                                {...register("fullname")}
                            />

                            {/* Username */}
                            <AuthInput
                                label="Username"
                                placeholder="johndoe"
                                icon={<AtSign size={18} />}
                                error={errors.username?.message}
                                {...register("username")}
                            />

                            {/* Email */}
                            <AuthInput
                                label="Email"
                                type="email"
                                placeholder="john@gmail.com"
                                icon={<Mail size={18} />}
                                error={errors.email?.message}
                                {...register("email")}
                            />

                            {/* Phone */}
                            <AuthInput
                                label="Phone Number"
                                placeholder="+91 XXXXX XXXXX"
                                icon={<Phone size={18} />}
                                error={errors.phone?.message}
                                {...register("phone")}
                            />

                            {/* Password */}

                            <PasswordField
                                label="Password"
                                placeholder="Enter your password"
                                autoComplete="new-password"
                                error={errors.password?.message}
                                {...register("password")}
                            />

                            {/* Confirm Password */}

                            <PasswordField
                                label="Confirm Password"
                                placeholder="Confirm your password"
                                autoComplete="new-password"
                                error={errors.confirmPassword?.message}
                                {...register("confirmPassword")}
                            />

                            <AuthButton
                                loading={isSubmitting}
                                loadingText="Creating Account..."
                            >
                                Create Account
                            </AuthButton>
                        </form>

                        <div className="my-8 flex items-center">
                            <div className="h-px flex-1 bg-white/10" />
                            <span className="px-4 text-sm text-slate-500">
                                OR
                            </span>
                            <div className="h-px flex-1 bg-white/10" />
                        </div>

                        <p className="text-center text-slate-400">
                            Already have an account?

                            <Link
                                to="/login"
                                className="ml-2 font-semibold text-indigo-400 transition hover:text-indigo-300"
                            >
                                Login
                            </Link>
                        </p>

                    </motion.div>

                </div>
            </div>
        </div>
    );
}