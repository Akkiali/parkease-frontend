import { useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../services/api";

import Footer from "../components/Footer";
import "../styles/locations.css";

function Locations() {
   const navigate = useNavigate();
   const [searchParams] = useSearchParams();

   const initialSearch =
      searchParams.get("search") || "";

   const [locations, setLocations] = useState([]);
   const [searchTerm, setSearchTerm] =
      useState(initialSearch);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState("");

   useEffect(() => {
      fetchLocations();
   }, []);

   const fetchLocations = async () => {
      setLoading(true);

      try {
         const response = await API.get("/locations");
         console.log(response.data);
         setLocations(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
         const status = error?.response?.status;
         const backendMessage = error?.response?.data?.message;

         let message = "Unable to reach backend.";

         if (status === 403) {
            message =
               backendMessage ||
               "Access denied. Please login to view locations.";
         } else if (backendMessage) {
            message = backendMessage;
         } else if (error?.message) {
            message = error.message;
         }

         console.error("Error loading locations", error);
         setError(`Failed to load locations: ${message}`);
      } finally {
         setLoading(false);
      }
   };

   const filteredLocations = useMemo(() => {
      const query = searchTerm.trim().toLowerCase();
      if (!query) return locations;

      return locations.filter((location) =>
         location.stationName?.toLowerCase().includes(query) ||
         location.address?.toLowerCase().includes(query)
      );
   }, [locations, searchTerm]);

   return (
      <>
         <div className="locations-page pb-0">
            <div className="container">
               <div className="locations-header">
                  <h1>Parking Locations</h1>

                  <p>
                     Browse available railway station parking,
                     compare pricing, and reserve your slot
                     before you arrive.
                  </p>
               </div>

               <div className="locations-top">
                  <div className="search-container">
                     <div className="search-inner">
                        <span className="search-icon">🔍</span>
                        <input
                           type="text"
                           className="location-search"
                           placeholder="Search station..."
                           value={searchTerm}
                           onChange={(e) => setSearchTerm(e.target.value)}
                        />
                     </div>
                  </div>

                  <div className="location-stats">
                     <div className="stat-card">
                        <p>Total Stations</p>
                        <h3>{locations.length}</h3>
                     </div>

                     <div className="stat-card">
                        <p>Available Slots</p>
                        <h3>
                           {locations.reduce(
                              (sum, l) => sum + (l.availableSlots || 0),
                              0
                           )}
                        </h3>
                     </div>

                     <div className="stat-card">
                        <p>24/7 Availability</p>
                        <h3>Live</h3>
                     </div>
                  </div>
               </div>

               {error && (
                  <div className="locations-error-card" role="alert">
                     <div className="error-card-top">
                        <div className="error-dots">
                           <span className="error-dot dot-red" />
                           <span className="error-dot dot-yellow" />
                           <span className="error-dot dot-green" />
                        </div>
                        <div className="error-card-title">
                           ParkEase locations could not load
                        </div>
                     </div>

                     <p>{error}</p>
                  </div>
               )}

               <div className="locations-grid">
                  {loading && (
                     <div className="status-card status-card-info">
                        Loading locations...
                     </div>
                  )}

                  {!loading && filteredLocations.length === 0 && !error && (
                     <div className="status-card status-card-empty">
                        No matching locations found.
                     </div>
                  )}

                  {!loading && filteredLocations.map((location) => (
                     <div key={location.id} className="location-card-wrapper">
                        <div className="location-card">
                           <div className="d-flex justify-content-between align-items-center mb-3">
                              <h4>{location.stationName}</h4>

                              <span className="slot-badge">
                                 🟢 {location.availableSlots} Slots Available
                              </span>
                           </div>

                           <p className="location-address">
                              📍 {location.address}
                           </p>

                           <div className="price-section">
                              <p>
                                 🚗 Four Wheeler:
                                 <strong>
                                    ₹{location.fourWheelerPrice}/hr
                                 </strong>
                              </p>

                              <p>
                                 🏍️ Two Wheeler:
                                 <strong>
                                    ₹{location.twoWheelerPrice}/hr
                                 </strong>
                              </p>
                           </div>

                           <button
                              className="btn btn-primary w-100"
                              onClick={() => {
                                 const token = localStorage.getItem("token");

                                 if (token) {
                                    navigate("/book-parking", {
                                       state: { locationId: location.id }
                                    });
                                 } else {
                                    navigate("/login");
                                 }
                              }}
                           >
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