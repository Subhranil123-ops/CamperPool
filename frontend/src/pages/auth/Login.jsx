import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { useState } from "react";

import AuthLayout from "../../components/auth/AuthLayout";
import AuthInput from "../../components/auth/AuthInput";
import PasswordField from "../../components/auth/PasswordField";
import AuthButton from "../../components/auth/AuthButton";

export default function Login() {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {

        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        try {

            console.log(formData);

            // axios login here

        } finally {

            setTimeout(() => {

                setLoading(false);

            }, 1200);

        }

    };

    return (

        <AuthLayout
            title="Welcome Back"
            subtitle="Sign in to continue your CampusPool journey."
        >

            <form
                onSubmit={handleSubmit}
                className="space-y-7"
            >

                <AuthInput
                    label="Username"
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Enter your username"
                    autoComplete="username"
                    icon={<Mail size={18} />}
                />

                <PasswordField
                    value={formData.password}
                    onChange={handleChange}
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
                    loading={loading}
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