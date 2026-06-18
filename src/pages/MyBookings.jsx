import { useEffect, useState } from "react";
import API from "../services/api";
import "../styles/myBookings.css";

function MyBookings() {
   const [bookings, setBookings] = useState([]);
   const [error, setError] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetchBookings();
   }, []);

   const fetchBookings = async () => {
      try {
         setError("");
         setLoading(true);

         const user = JSON.parse(
            localStorage.getItem("user")
         );

         const response = await API.get(
            `/bookings/user/${user.id}`
         );

         setBookings(response.data);
      } catch (error) {
         const message =
            error?.response?.data?.message ||
            error?.message ||
            "Unable to reach backend.";

         setError(
            `Failed to load bookings: ${message}`
         );
      } finally {
         setLoading(false);
      }
   };

   const cancelBooking = async (id) => {
      try {
         await API.put(`/bookings/cancel/${id}`);

         alert("Booking Cancelled Successfully");

         fetchBookings();
      } catch (error) {
         const message =
            error?.response?.data?.message ||
            error?.message ||
            "Unknown error occurred.";

         alert(
            `Unable to cancel booking: ${message}`
         );
      }
   };

   return (
      <div className="my-bookings-page">

         <div className="container">

            <div className="booking-header">
               <h1>My Bookings</h1>
               <p>
                  View and manage all your parking reservations.
               </p>
            </div>

            {error && (
               <div
                  className="alert alert-danger mb-4"
                  role="alert"
               >
                  {error}
               </div>
            )}

            {loading ? (
               <div className="text-center py-5">
                  <p>Loading bookings...</p>
               </div>
            ) : bookings.length === 0 ? (
               <div className="text-center">
                  <h5>No Bookings Found</h5>
               </div>
            ) : (
               <div className="row g-4">

                  {bookings.map((booking) => (

                     <div
                        className="col-md-6 col-lg-4"
                        key={booking.id}
                     >

                        <div className="booking-card">

                           <div className="booking-card-body">

                              <div className="booking-id">
                                 Booking ID #{booking.id}
                              </div>

                              <div className="booking-info">
                                 <span>Station</span>
                                 <strong>
                                    {booking.location?.stationName}
                                 </strong>
                              </div>

                              <div className="booking-info">
                                 <span>Slot Number</span>
                                 <strong>
                                    {booking.parkingSlot?.slotNumber}
                                 </strong>
                              </div>

                              <div className="booking-info">
                                 <span>Vehicle Number</span>
                                 <strong>
                                    {booking.vehicleNumber}
                                 </strong>
                              </div>

                              <div className="booking-info">
                                 <span>Vehicle Type</span>
                                 <strong>
                                    {booking.vehicleType}
                                 </strong>
                              </div>

                              <div className="booking-info">
                                 <span>Amount</span>
                                 <strong>
                                    ₹{booking.amount}
                                 </strong>
                              </div>

                              <div className="booking-info">
                                 <span>Status</span>

                                 <strong
                                    className={
                                       booking.bookingStatus ===
                                          "CANCELLED"
                                          ? "status-badge cancelled"
                                          : "status-badge active"
                                    }
                                 >
                                    {booking.bookingStatus}
                                 </strong>
                              </div>

                              <button
                                 className={
                                    booking.bookingStatus ===
                                       "CANCELLED"
                                       ? "booking-btn disabled"
                                       : "booking-btn"
                                 }
                                 onClick={() =>
                                    cancelBooking(
                                       booking.id
                                    )
                                 }
                                 disabled={
                                    booking.bookingStatus ===
                                    "CANCELLED"
                                 }
                              >
                                 {booking.bookingStatus ===
                                    "CANCELLED"
                                    ? "Cancelled"
                                    : "Cancel Booking"}
                              </button>

                           </div>

                        </div>

                     </div>

                  ))}

               </div>
            )}

         </div>

      </div>
   );
}

export default MyBookings;