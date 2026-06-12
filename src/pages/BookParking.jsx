import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import "../styles/bookParking.css";

function BookParking() {
   return (
      <>
         <div className="booking-page">

            <div className="container">

               <div className="booking-header">

                  <h1>Book Parking Slot</h1>

                  <p>
                     Reserve your parking space in a few easy steps.
                  </p>

               </div>

               <div className="booking-card">

                  <form>

                     <div className="row">

                        <div className="col-md-6 mb-3">

                           <label className="form-label">
                              Vehicle Number
                           </label>

                           <input
                              type="text"
                              className="form-control"
                              placeholder="MH01AB1234"
                           />

                        </div>

                        <div className="col-md-6 mb-3">

                           <label className="form-label">
                              Vehicle Type
                           </label>

                           <select className="form-select">

                              <option>
                                 Select Vehicle Type
                              </option>

                              <option>
                                 TWO_WHEELER
                              </option>

                              <option>
                                 FOUR_WHEELER
                              </option>

                           </select>

                        </div>

                        <div className="col-md-6 mb-3">

                           <label className="form-label">
                              Location
                           </label>

                           <select className="form-select">

                              <option>
                                 Dadar
                              </option>

                              <option>
                                 CST
                              </option>

                              <option>
                                 Thane
                              </option>

                           </select>

                        </div>

                        <div className="col-md-6 mb-3">

                           <label className="form-label">
                              Slot
                           </label>

                           <select className="form-select">

                              <option>
                                 A101
                              </option>

                              <option>
                                 A102
                              </option>

                              <option>
                                 B101
                              </option>

                           </select>

                        </div>

                     </div>

                     <button
                        type="button-success"
                        className="btn btn-primary w-100 mt-3"
                     >
                        Confirm Booking
                     </button>

                  </form>

               </div>

            </div>

         </div>

         <Footer />
      </>
   );
}

export default BookParking;