import Footer from "../components/Footer";
import myBookings from "../data/myBookings";
import "../styles/myBookings.css";

function MyBookings() {
   return (
      <>
         <div className="my-bookings-page">

            <div className="container">

               <div className="booking-header">

                  <h1>My Bookings</h1>

                  <p>
                     View your active, completed and cancelled bookings.
                  </p>

               </div>

               <div className="booking-table-container">

                  <table className="table booking-table">

                     <thead>

                        <tr>
                           <th>ID</th>
                           <th>Station</th>
                           <th>Slot</th>
                           <th>Vehicle</th>
                           <th>Amount</th>
                           <th>Status</th>
                           <th>Action</th>
                        </tr>

                     </thead>

                     <tbody>

                        {myBookings.map((booking) => (

                           <tr key={booking.id}>

                              <td>{booking.id}</td>

                              <td>{booking.stationName}</td>

                              <td>{booking.slotNumber}</td>

                              <td>{booking.vehicleNumber}</td>

                              <td>₹{booking.amount}</td>

                              <td>

                                 <span
                                    className={`status-badge ${booking.status.toLowerCase()}`}
                                 >
                                    {booking.status}
                                 </span>

                              </td>

                              <td>

                                 {booking.status === "ACTIVE" ? (
                                    <button className="btn btn-danger btn-sm">
                                       Cancel
                                    </button>
                                 ) : (
                                    <button
                                       className="btn btn-secondary btn-sm"
                                       disabled
                                    >
                                       Closed
                                    </button>
                                 )}

                              </td>

                           </tr>

                        ))}

                     </tbody>

                  </table>

               </div>

            </div>

         </div>

         <Footer />
      </>
   );
}

export default MyBookings;