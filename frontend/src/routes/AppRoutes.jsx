import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Landing from "../pages/home/Landing";
import Dashboard from "../pages/home/Dashboard";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import FindLift from "../pages/ride/FindLift";
import OfferLift from "../pages/ride/OfferLift";
import RideDetails from "../pages/ride/RideDetails";
import MyRides from "../pages/ride/MyRides";

import Profile from "../pages/user/Profile";
import Settings from "../pages/user/Settings";

import NotFound from "../pages/error/NotFound";

function AppRoutes() {
  return (
    <Routes>

      {/* Public Pages with Navbar + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/find-lift" element={<FindLift />} />
        <Route path="/offer-lift" element={<OfferLift />} />
        <Route path="/rides/:id" element={<RideDetails />} />
        <Route path="/my-rides" element={<MyRides />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      {/* Authentication Pages */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default AppRoutes;