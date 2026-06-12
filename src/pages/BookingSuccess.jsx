import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/bookingSuccess.css";

function BookingSuccess() {
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
                        <strong>#BK1001</strong>
                     </div>

                     <div className="summary-row">
                        <span>Station</span>
                        <strong>Dadar</strong>
                     </div>

                     <div className="summary-row">
                        <span>Slot Number</span>
                        <strong>A101</strong>
                     </div>

                     <div className="summary-row">
                        <span>Vehicle</span>
                        <strong>MH01AB1234</strong>
                     </div>

                     <div className="summary-row">
                        <span>Amount</span>
                        <strong>₹120</strong>
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