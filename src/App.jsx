import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Locations from "./pages/Locations";
import BookParking from "./pages/BookParking";
import MyBookings from "./pages/MyBookings";
import BookingSuccess from "./pages/BookingSuccess";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLocations from "./pages/AdminLocations";
import AdminSlots from "./pages/AdminSlots";
import AdminBookings from "./pages/AdminBookings";
import AdminRoute from "./components/AdminRoute";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";


import ProtectedRoute from "./components/ProtectedRoute";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <Routes>

        <Route
          path="/"
          element={<Explore />}
        />

        <Route
          path="/explore"
          element={<Explore />}
        />

        <Route
          path="/home"
          element={<Home />}
        />

        <Route
          path="/locations"
          element={<Locations />}
        />

        <Route
          path="/book-parking"
          element={
            <ProtectedRoute>
              <BookParking />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-bookings"
          element={
            <ProtectedRoute>
              <MyBookings />
            </ProtectedRoute>
          }
        />

        <Route
          path="/booking-success"
          element={<BookingSuccess />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/locations"
          element={
            <AdminRoute>
              <AdminLocations />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/slots"
          element={
            <AdminRoute>
              <AdminSlots />
            </AdminRoute>
          }
        />

        <Route
          path="/admin/bookings"
          element={
            <AdminRoute>
              <AdminBookings />
            </AdminRoute>
          }
        />

        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />

        <Route
          path="/reset-password"
          element={<ResetPassword />}
        />


      </Routes>

    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;