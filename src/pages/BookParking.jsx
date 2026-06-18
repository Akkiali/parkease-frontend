import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import API from "../services/api";
import "../styles/bookParking.css";

function BookParking() {
   const navigate = useNavigate();
   const routeLocation = useLocation();

   const [locations, setLocations] = useState([]);
   const [slots, setSlots] = useState([]);

   const [locationId, setLocationId] = useState(
      routeLocation?.state?.locationId
         ? String(routeLocation.state.locationId)
         : ""
   );

   const [slotId, setSlotId] = useState("");
   const [vehicleNumber, setVehicleNumber] = useState("");
   const [vehicleType, setVehicleType] = useState("");
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      fetchLocations();
      fetchSlots();
   }, []);

   const fetchLocations = async () => {
      try {
         const response = await API.get("/locations");
         setLocations(response.data);
      } catch (error) {
         console.error("Error fetching locations", error);
      }
   };

   const fetchSlots = async () => {
      try {
         const response = await API.get("/slots");

         const availableSlots = response.data.filter(
            (slot) => slot.status === "AVAILABLE"
         );

         setSlots(availableSlots);
      } catch (error) {
         console.error("Error fetching slots", error);
      }
   };

   const handleBooking = async (e) => {
      e.preventDefault();

      if (
         !locationId ||
         !slotId ||
         !vehicleNumber ||
         !vehicleType
      ) {
         alert("Please fill all fields");
         return;
      }

      try {
         setLoading(true);

         const user = JSON.parse(
            localStorage.getItem("user")
         );

         const bookingData = {
            userId: user.id,
            locationId: Number(locationId),
            slotId: Number(slotId),
            vehicleNumber,
            vehicleType,
         };

         const response = await API.post(
            "/bookings",
            bookingData
         );

         navigate("/booking-success", {
            state: response.data,
         });
      } catch (error) {
         console.error("Booking Error:", error);

         alert(
            error?.response?.data ||
            "Booking Failed"
         );
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="booking-page">
         <div className="booking-container">

            <div className="booking-header">
               <h2>RESERVE YOUR PARKING SLOT</h2>
               <p>
                  Secure your parking spot in
                  just a few clicks.
               </p>
            </div>

            <form
               className="booking-card"
               onSubmit={handleBooking}
            >
               <div className="booking-field">
                  <label className="booking-label">
                     Select Location
                  </label>

                  <select
                     className="booking-select"
                     value={locationId}
                     onChange={(e) =>
                        setLocationId(
                           e.target.value
                        )
                     }
                  >
                     <option value="">
                        Select Location
                     </option>

                     {locations.map((loc) => (
                        <option
                           key={loc.id}
                           value={loc.id}
                        >
                           {loc.stationName}
                        </option>
                     ))}
                  </select>
               </div>

               <div className="booking-field">
                  <label className="booking-label">
                     Select Slot
                  </label>

                  <select
                     className="booking-select"
                     value={slotId}
                     onChange={(e) =>
                        setSlotId(
                           e.target.value
                        )
                     }
                  >
                     <option value="">
                        Select Slot
                     </option>

                     {slots
                        .filter((slot) =>
                           locationId
                              ? String(
                                 slot.location
                                    ?.id
                              ) ===
                              String(
                                 locationId
                              )
                              : true
                        )
                        .map((slot) => (
                           <option
                              key={slot.id}
                              value={slot.id}
                           >
                              {slot.slotNumber}
                           </option>
                        ))}
                  </select>
               </div>

               <div className="booking-field">
                  <label className="booking-label">
                     Vehicle Number
                  </label>

                  <input
                     type="text"
                     className="booking-input"
                     placeholder="MH01AB1234"
                     value={vehicleNumber}
                     onChange={(e) =>
                        setVehicleNumber(
                           e.target.value.toUpperCase()
                        )
                     }
                  />
               </div>

               <div className="booking-field">
                  <label className="booking-label">
                     Vehicle Type
                  </label>

                  <select
                     className="booking-select"
                     value={vehicleType}
                     onChange={(e) =>
                        setVehicleType(
                           e.target.value
                        )
                     }
                  >
                     <option value="">
                        Select Vehicle Type
                     </option>

                     <option value="CAR">
                        CAR
                     </option>

                     <option value="BIKE">
                        BIKE
                     </option>
                  </select>
               </div>

               <button
                  type="submit"
                  className="booking-btn"
                  disabled={loading}
               >
                  {loading
                     ? "Booking..."
                     : "Confirm Booking"}
               </button>
            </form>

         </div>
      </div>
   );
}

export default BookParking;