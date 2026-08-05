import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../schemas/authSchema";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PasswordField from "../../components/auth/PasswordField";
import AuthButton from "../../components/auth/AuthButton";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: zodResolver(loginSchema)
    })

    const onSubmit = async (data) => {

        try {

            const res = await axios.post(
                "https://localhost:3000/auth/login",
                data,
                {
                    withCredentials: true,
                }
            );

            toast.success(res.data.message);

            // navigate("/rides");

        } catch (err) {

            let message = "Something went wrong.";

            if (!err.response) {
                message = "Unable to connect to server.";
            } else {
                message = err.response.data?.message || message;
            }

            toast.error(message);
        }
    };

    const onError = (errors) => {
    const firstError = Object.values(errors)[0];

    if (firstError?.message) {
        toast.error(firstError.message);
    }
};

    return (

        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to continue your CampusPool journey."
        >

            <form
                noValidate
                onSubmit={handleSubmit(onSubmit, onError)}
                className="space-y-7"
            >

                <AuthInput
                    label="Username"
                    placeholder="Enter your username"
                    autoComplete="username"
                    error={errors.username?.message}
                    {...register("username")}
                    icon={<Mail size={18} />}
                />

                <PasswordField
                    label="Password"
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    error={errors.password?.message}
                    {...register("password")}
                />

                {/* Remember Me & Forgot Password */}

                <div className="flex items-center justify-between">

                    <label className="flex cursor-pointer items-center gap-3">

                        <input
                            type="checkbox"
                            className="
                                h-4
                                w-4
                                rounded
                                border-white/20
                                bg-transparent
                                accent-indigo-500
                            "
                        />

                        <span className="text-sm text-slate-400">
                            Remember me
                        </span>

                    </label>

                    <button
                        type="button"
                        className="
                            text-sm
                            font-medium
                            text-indigo-400
                            transition-all
                            duration-300
                            hover:text-indigo-300
                        "
                    >
                        Forgot Password?
                    </button>

                </div>

                {/* Login Button */}

                <AuthButton
                    loading={isSubmitting}
                    loadingText="Signing In..."
                >
                    Continue
                </AuthButton>

            </form>

            {/* Divider */}

            <div className="my-10 flex items-center">

                <div className="h-px flex-1 bg-white/10" />

                <span className="px-4 text-sm text-slate-500">

                    OR

                </span>

                <div className="h-px flex-1 bg-white/10" />

            </div>

            {/* Register */}

            <p className="text-center text-slate-400">

                Don't have an account?

                <Link
                    to="/register"
                    className="
                        ml-2
                        font-semibold
                        text-indigo-400
                        transition-all
                        duration-300
                        hover:text-cyan-400
                    "
                >
                    Create Account
                </Link>

            </p>

        </AuthLayout>

    );

}