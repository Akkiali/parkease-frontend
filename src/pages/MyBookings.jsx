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

   const checkoutBooking = async (id) => {
      try {
         await API.put(`/bookings/checkout/${id}`);

         alert(
            "Checkout completed. Please make payment at the parking counter."
         );

         fetchBookings();
      } catch (error) {
         const message =
            error?.response?.data?.message ||
            error?.message ||
            "Unknown error occurred.";

         alert(
            `Unable to checkout: ${message}`
         );
      }
   };

   const getDuration = (start, end) => {
      const startTime = new Date(start);
      const endTime = new Date(end);

      const hours = Math.ceil(
         (endTime - startTime) /
         (1000 * 60 * 60)
      );

      return hours;
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
                                    ₹{booking.amount} per hour
                                 </strong>
                              </div>

                              <div className="booking-info">
                                 <span>Status</span>

                                 <strong
                                    className={
                                       booking.bookingStatus ===
                                          "CANCELLED"
                                          ? "status-badge cancelled"
                                          : booking.bookingStatus ===
                                             "COMPLETED"
                                             ? "status-badge completed"
                                             : "status-badge active"
                                    }
                                 >
                                    {booking.bookingStatus}
                                 </strong>
                              </div>

                              <div className="booking-actions">

                                 {booking.bookingStatus === "ACTIVE" && (
                                    <>
                                       <button
                                          className="booking-btn"
                                          onClick={() =>
                                             checkoutBooking(booking.id)
                                          }
                                       >
                                          Checkout
                                       </button>

                                       <button
                                          className="booking-btn cancel-btn"
                                          onClick={() =>
                                             cancelBooking(booking.id)
                                          }
                                       >
                                          Cancel
                                       </button>
                                    </>
                                 )}

                                 {booking.bookingStatus === "COMPLETED" && (
                                    <div className="booking-completed">
                                       <p>
                                          <strong>Checkout Time:</strong>{" "}
                                          {new Date(
                                             booking.endTime
                                          ).toLocaleString()}
                                       </p>

                                       <p>
                                          <strong>Duration:</strong>{" "}
                                          {getDuration(
                                             booking.startTime,
                                             booking.endTime
                                          )} Hours
                                       </p>

                                       <p>
                                          <strong>Amount Payable:</strong>{" "}
                                          ₹{booking.amount}
                                       </p>

                                       <p className="counter-message">
                                          Please make payment at the
                                          parking counter.
                                       </p>
                                    </div>
                                 )}

                                 {booking.bookingStatus === "CANCELLED" && (
                                    <button
                                       className="booking-btn disabled"
                                       disabled
                                    >
                                       Cancelled
                                    </button>
                                 )}

                              </div>

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