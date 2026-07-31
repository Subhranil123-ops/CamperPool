import {
  ArrowRight,
  Car,
  Search,
  ShieldCheck,
  BadgeCheck,
  IndianRupee,
  Zap,
  Star,
  Users,
  MapPin,
} from "lucide-react";

import { Link } from "react-router-dom";
import hero from "../../assets/images/hero.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">

      {/* Background Glow */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-300/30 blur-[120px]" />

      <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-indigo-300/20 blur-[120px]" />

      <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-cyan-300/20 blur-[100px]" />

      {/* Grid Pattern */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#2563eb 1px, transparent 1px), linear-gradient(90deg,#2563eb 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 py-24">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* ================= LEFT CONTENT ================= */}

          <div className="relative z-10">

            {/* Premium Badge */}

            <div className="inline-flex items-center gap-3 rounded-full border border-blue-100 bg-white/80 px-5 py-2 shadow-lg backdrop-blur-md">

              <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></div>

              <span className="text-sm font-semibold text-slate-700">
                Trusted by 2,500+ Students
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-slate-900 lg:text-7xl">

              Share Rides.

              <br />

              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 bg-clip-text text-transparent">

                Save Money.

              </span>

              <br />

              Build Community.

            </h1>

            {/* Subtitle */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">

              CampusPool connects students travelling in the same direction.

              Find verified ride partners, split fuel costs, travel safely,

              and make your daily commute smarter.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                to="/find-lift"
                className="group flex items-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-[0_15px_40px_rgba(37,99,235,0.35)] transition-all duration-300 hover:-translate-y-1 hover:scale-105"
              >

                <Search size={20} />

                Find Ride

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

              <Link
                to="/offer-lift"
                className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-blue-500 hover:shadow-xl"
              >

                Offer Ride

              </Link>

            </div>

            {/* Features */}

            <div className="mt-12 grid grid-cols-2 gap-4">

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg">

                <ShieldCheck className="text-green-500" size={20} />

                <div>

                  <h3 className="font-semibold text-slate-800">
                    Verified
                  </h3>

                  <p className="text-sm text-slate-500">
                    Student Accounts
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg">

                <IndianRupee className="text-blue-600" size={20} />

                <div>

                  <h3 className="font-semibold text-slate-800">
                    Affordable
                  </h3>

                  <p className="text-sm text-slate-500">
                    Share Fuel Cost
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg">

                <BadgeCheck className="text-indigo-600" size={20} />

                <div>

                  <h3 className="font-semibold text-slate-800">
                    Trusted
                  </h3>

                  <p className="text-sm text-slate-500">
                    Safe Community
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg">

                <Zap className="text-yellow-500" size={20} />

                <div>

                  <h3 className="font-semibold text-slate-800">
                    Instant
                  </h3>

                  <p className="text-sm text-slate-500">
                    Quick Booking
                  </p>

                </div>

              </div>

            </div>
          </div>
          {/* ================= RIGHT CONTENT ================= */}

          <div className="relative flex items-center justify-center">

            {/* Glow */}

            <div
              className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/10 blur-3xl"
              style={{
                animation: "pulseGlow 8s ease-in-out infinite",
              }}
            ></div>
            {/* Glass Card */}

            <div className="group relative rounded-[40px] border border-white/60 bg-white/60 p-10 shadow-[0_60px_140px_rgba(37,99,235,0.22)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_80px_180px_rgba(37,99,235,0.30)]">

              {/* Gradient Border */}

              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-blue-200/30 via-transparent to-indigo-300/20"></div>

              <img
                src={hero}
                alt="CampusPool Hero"
                className="relative z-10 w-[680px] max-w-none transition-transform duration-700 group-hover:scale-105"
                style={{
                  animation: "float 6s ease-in-out infinite",
                }}
              />

            </div>

            {/* ================= FLOATING CARDS ================= */}

            {/* Rating Card */}

            <div className="absolute -left-10 top-12 hidden w-52 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl lg:block">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow-100">
                  <Star className="text-yellow-500" size={24} />
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    4.9
                  </h2>

                  <p className="text-sm text-slate-500">
                    Student Rating
                  </p>

                </div>

              </div>

            </div>

            {/* Active Students */}

            <div className="absolute -right-8 top-32 hidden w-56 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl lg:block">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100">
                  <Users className="text-blue-600" size={24} />
                </div>

                <div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    2500+
                  </h2>

                  <p className="text-sm text-slate-500">
                    Active Students
                  </p>

                </div>

              </div>

            </div>

            {/* Successful Rides */}

            <div className="absolute bottom-4 left-8 hidden w-60 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-600 p-5 text-white shadow-[0_20px_60px_rgba(37,99,235,0.35)] lg:block">

              <div className="flex items-center gap-4">

                <div className="rounded-2xl bg-white/20 p-3">

                  <Car size={24} />

                </div>

                <div>

                  <h2 className="text-2xl font-bold">
                    1200+
                  </h2>

                  <p className="text-sm text-blue-100">
                    Successful Rides
                  </p>

                </div>

              </div>

            </div>

            {/* Location Card */}

            <div className="absolute transition-all duration-500 hover:-translate-y-3 hover:scale-105 -right-10 bottom-16 hidden w-56 rounded-3xl border border-white/70 bg-white/80 p-5 shadow-2xl backdrop-blur-xl lg:block transition-all duration-500 hover:-translate-y-3 hover:scale-105">

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100">
                  <MapPin className="text-green-600" size={24} />
                </div>

                <div>

                  <h2 className="text-lg font-bold text-slate-900">
                    Delhi NCR
                  </h2>

                  <p className="text-sm text-slate-500">
                    Live Campus
                  </p>

                </div>

              </div>

            </div>


            {/* Decorative Ring */}

            <div
              className="absolute transition-all duration-500 hover:-translate-y-3 hover:scale-105 right-24 top-32 hidden h-72 w-72 rounded-full border border-blue-200/40 lg:block"
              style={{
                animation: "floatSlow 8s ease-in-out infinite",
              }}
            ></div>

            <div
              className="absolute transition-all duration-500 hover:-translate-y-3 hover:scale-105 right-20 top-28 hidden h-80 w-80 rounded-full border border-blue-100/30 lg:block"
              style={{
                animation: "floatSlow 10s ease-in-out infinite",
              }}
            ></div>

            {/* Floating Notification */}

            <div className="absolute border border-green-200 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 lg:flex items-center gap-3 transition-all duration-500 hover:-translate-y-3 hover:scale-105 left-1/2 top-20 hidden -translate-x-1/2 rounded-2xl border border-green-200 bg-white/90 px-5 py-3 shadow-xl backdrop-blur-xl lg:flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">

                🚗

              </div>

              <div>

                <p className="text-sm font-semibold text-slate-800">

                  Ride Confirmed

                </p>

                <p className="text-xs text-slate-500">

                  Rahul accepted your request

                </p>

              </div>

            </div>

            {/* Decorative Dots */}

            <div className="absolute transition-all duration-500 hover:-translate-y-3 hover:scale-105 left-24 top-40 hidden lg:flex flex-col gap-2">

              <div className="h-2 w-2 rounded-full bg-blue-500"></div>

              <div className="h-2 w-2 rounded-full bg-blue-300"></div>

              <div className="h-2 w-2 rounded-full bg-indigo-400"></div>

              <div className="h-2 w-2 rounded-full bg-cyan-400"></div>

            </div>

            <div className="absolute transition-all duration-500 hover:-translate-y-3 hover:scale-105 bottom-24 right-12 hidden lg:grid grid-cols-3 gap-2">

              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-2 w-2 rounded-full bg-blue-300/70"
                />
              ))}

            </div>



          </div>

        </div>


      </div>

    </section >
  );
}

export default Hero;