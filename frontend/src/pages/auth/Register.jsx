import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { User, Mail, Phone, AtSign } from "lucide-react";
import axios from "axios";
import Logo from "../../components/common/Logo";
import PasswordField from "../../components/auth/PasswordField";
import AnimatedBackground from "../../components/auth/AnimatedBackground";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullname: "",
        username: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });



    function handleChange(e) {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post("https://localhost:3000/auth/register", formData, { withCredentials: true });
            if (response.data.success) {
                navigate("/login");
            }
        } catch (error) {
            console.error(error.response.data);
        }

    }

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
                            onSubmit={handleSubmit}
                            className="mt-10 space-y-6"
                        >

                            {/* Full Name */}
                            <div>
                                <label className="mb-2 block text-sm text-slate-300">
                                    Full Name
                                </label>

                                <div className="relative">
                                    <User
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="text"
                                        name="fullname"
                                        value={formData.fullname}
                                        onChange={handleChange}
                                        placeholder="John Doe"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                    />
                                </div>
                            </div>

                            {/* Username */}
                            <div>
                                <label className="mb-2 block text-sm text-slate-300">
                                    Username
                                </label>

                                <div className="relative">
                                    <AtSign
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="johndoe"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="mb-2 block text-sm text-slate-300">
                                    Email
                                </label>

                                <div className="relative">
                                    <Mail
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="john@gmail.com"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="mb-2 block text-sm text-slate-300">
                                    Phone Number
                                </label>

                                <div className="relative">
                                    <Phone
                                        size={18}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                                    />

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="+91 XXXXX XXXXX"
                                        className="w-full rounded-xl border border-white/10 bg-white/5 py-3 pl-11 pr-4 text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20"
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <PasswordField
                                label="Password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                autoComplete="new-password"
                            />

                            {/* Confirm Password */}
                            <PasswordField
                                label="Confirm Password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm your password"
                                autoComplete="new-password"
                            />

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: .98 }}
                                className="w-full rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-500 py-3.5 font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-300 hover:shadow-indigo-500/40"
                            >
                                Create Account
                            </motion.button>

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