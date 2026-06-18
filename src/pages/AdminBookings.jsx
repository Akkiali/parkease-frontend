import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

function AdminBookings() {
   const [bookings, setBookings] = useState([]);

   useEffect(() => {
      fetchBookings();
   }, []);

   const fetchBookings = async () => {
      try {
         const response = await API.get("/bookings");
         setBookings(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const handleCancel = async (id, status) => {
      if (status === "CANCELLED") {
         return;
      }

      if (!window.confirm("Cancel this booking?")) {
         return;
      }

      try {
         await API.put(`/bookings/cancel/${id}`);
         fetchBookings();
      } catch (error) {
         console.error(error);
      }
   };

   return (
      <AdminLayout>
         <h2 className="page-title">
            Manage Bookings
         </h2>

         <div className="admin-table">
            <h4>All Bookings</h4>

            <table className="table table-striped">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Vehicle Number</th>
                     <th>Vehicle Type</th>
                     <th>Location</th>
                     <th>Slot</th>
                     <th>Amount</th>
                     <th>Status</th>
                     <th>Booking Date</th>
                     <th>Action</th>
                  </tr>
               </thead>

               <tbody>
                  {bookings.map((booking) => (
                     <tr key={booking.id}>
                        <td>{booking.id}</td>

                        <td>
                           {booking.vehicleNumber}
                        </td>

                        <td>
                           {booking.vehicleType}
                        </td>

                        <td>
                           {booking.location?.stationName}
                        </td>

                        <td>
                           {booking.parkingSlot?.slotNumber}
                        </td>

                        <td>
                           ₹{booking.amount}
                        </td>

                        <td>
                           {booking.bookingStatus ===
                              "BOOKED" ? (
                              <span className="badge bg-success">
                                 BOOKED
                              </span>
                           ) : (
                              <span className="badge bg-danger">
                                 CANCELLED
                              </span>
                           )}
                        </td>

                        <td>
                           {booking.bookingDate
                              ? new Date(
                                 booking.bookingDate
                              ).toLocaleString("en-IN")
                              : "N/A"}
                        </td>

                        <td>
                           {booking.bookingStatus ===
                              "BOOKED" ? (
                              <button
                                 className="btn btn-danger btn-sm"
                                 onClick={() =>
                                    handleCancel(
                                       booking.id,
                                       booking.bookingStatus
                                    )
                                 }
                              >
                                 Cancel
                              </button>
                           ) : (
                              <button
                                 className="btn btn-secondary btn-sm"
                                 disabled
                              >
                                 Cancelled
                              </button>
                           )}
                        </td>
                     </tr>
                  ))}
               </tbody>

            </table>
         </div>
      </AdminLayout>
   );
}

export default AdminBookings;