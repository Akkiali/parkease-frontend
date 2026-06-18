import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/bookingSuccess.css";

function BookingSuccess() {

   const location = useLocation();
   const navigate = useNavigate();

   const booking = location.state;

   useEffect(() => {
      if (!booking) {
         navigate("/book-parking", { replace: true });
      }
   }, [booking, navigate]);

   return (
      <>
         <div className="success-page">

            <div className="container">

               <div className="success-card">

                  <div className="success-icon">
                     ✓
                  </div>

                  <h1>Booking Confirmed</h1>

                  <p>
                     Your parking slot has been reserved successfully.
                  </p>

                  <div className="booking-summary">

                     <div className="summary-row">
                        <span>Booking ID</span>
                        <strong>{booking?.bookingId || "N/A"}</strong>
                     </div>

                     <div className="summary-row">
                        <span>Station</span>
                        <strong>{booking?.stationName || "N/A"}</strong>
                     </div>

                     <div className="summary-row">
                        <span>Slot Number</span>
                        <strong>{booking?.slotNumber || "N/A"}</strong>
                     </div>

                     <div className="summary-row">
                        <span>Vehicle</span>
                        <strong>{booking?.vehicleNumber || "N/A"}</strong>
                     </div>

                     <div className="summary-row">
                        <span>Amount</span>
                        <strong>₹{booking?.amount ?? "N/A"}</strong>
                     </div>

                     <div className="summary-row">
                        <span>Vehicle Type</span>
                        <strong>{booking?.vehicleType || "N/A"}</strong>
                     </div>

                     <div className="summary-row">
                        <span>Status</span>
                        <strong>{booking?.bookingStatus || "N/A"}</strong>
                     </div>

                     <div className="summary-row">
                        <span>Booked On</span>
                        <strong>
                           {booking?.createdAt || booking?.bookingDate
                              ? new Date(booking?.createdAt || booking?.bookingDate).toLocaleString("en-IN", {
                                 year: "numeric",
                                 month: "long",
                                 day: "numeric",
                                 hour: "2-digit",
                                 minute: "2-digit",
                              })
                              : "N/A"}
                        </strong>
                     </div>

                  </div>

                  <div className="button-group">

                     <Link
                        to="/my-bookings"
                        className="btn btn-primary"
                     >
                        View My Bookings
                     </Link>

                     <Link
                        to="/locations"
                        className="btn btn-outline-primary"
                     >
                        Book Another Slot
                     </Link>

                  </div>

               </div>

            </div>

         </div>

         <Footer />
      </>
   );
}

export default BookingSuccess;