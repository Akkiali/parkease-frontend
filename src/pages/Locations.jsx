import { useEffect, useState } from "react";
import API from "../services/api";

import Footer from "../components/Footer";
import "../styles/locations.css";

function Locations() {

   const [locations, setLocations] = useState([]);
   const [error, setError] = useState("");

   useEffect(() => {
      fetchLocations();
   }, []);

   const fetchLocations = async () => {

      try {
         const response = await API.get("/locations");
         console.log(response.data);
         setLocations(response.data);
      } catch (error) {
         const message = error?.response?.data?.message || error?.message || "Unable to reach backend.";
         console.error("Error loading locations", error);
         setError(`Failed to load locations: ${message}`);
      }
   };
   return (
      <>
         <div className="locations-page pb-0">

            <div className="container">

               <div className="locations-header">

                  <h1>Parking Locations</h1>

                  <p>
                     Find available parking stations and reserve
                     your slot in advance.
                  </p>

               </div>

               <div className="search-container">

                  <input
                     type="text"
                     className="form-control location-search"
                     placeholder="Search station..."
                  />

               </div>

               {error && (
                  <div className="alert alert-danger mt-4" role="alert">
                     {error}
                  </div>
               )}

               <div className="row">

                  {locations.map((location) => (

                     <div
                        key={location.id}
                        className="col-lg-4 col-md-6 mb-4"
                     >

                        <div className="location-card">

                           <div className="d-flex justify-content-between align-items-center mb-3">

                              <h4>{location.stationName}</h4>

                              <span className="slot-badge">
                                 {location.availableSlots} left
                              </span>

                           </div>

                           <p className="location-address">
                              {location.address}
                           </p>

                           <div className="price-section">

                              <p>
                                 Four Wheeler:
                                 <strong>
                                    ₹{location.fourWheelerPrice}/hr
                                 </strong>
                              </p>

                              <p>
                                 Two Wheeler:
                                 <strong>
                                    ₹{location.twoWheelerPrice}/hr
                                 </strong>
                              </p>

                           </div>

                           <button className="btn btn-primary w-100">
                              Book Now
                           </button>

                        </div>

                     </div>

                  ))}

               </div>

            </div>

         </div>

         <Footer />
      </>
   );
}

export default Locations;