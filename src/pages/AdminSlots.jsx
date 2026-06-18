import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

function AdminSlots() {
   const [slots, setSlots] = useState([]);
   const [locations, setLocations] = useState([]);

   const [formData, setFormData] = useState({
      slotNumber: "",
      vehicleType: "CAR",
      status: "AVAILABLE",
      location: {
         id: "",
      },
   });

   const [editingId, setEditingId] = useState(null);

   useEffect(() => {
      fetchSlots();
      fetchLocations();
   }, []);

   const fetchSlots = async () => {
      try {
         const response = await API.get("/slots");
         setSlots(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const fetchLocations = async () => {
      try {
         const response = await API.get("/locations");
         setLocations(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      if (name === "locationId") {
         setFormData({
            ...formData,
            location: {
               id: value,
            },
         });
      } else {
         setFormData({
            ...formData,
            [name]: value,
         });
      }
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         if (editingId) {
            await API.put(`/slots/${editingId}`, formData);
         } else {
            await API.post("/slots", formData);
         }

         resetForm();
         fetchSlots();
      } catch (error) {
         console.error(error);
      }
   };

   const handleEdit = (slot) => {
      setEditingId(slot.id);

      setFormData({
         slotNumber: slot.slotNumber,
         vehicleType: slot.vehicleType,
         status: slot.status,
         location: {
            id: slot.location?.id,
         },
      });
   };

   const handleDelete = async (id) => {
      if (!window.confirm("Delete this slot?")) return;

      try {
         await API.delete(`/slots/${id}`);
         fetchSlots();
      } catch (error) {
         console.error(error);
      }
   };

   const resetForm = () => {
      setEditingId(null);

      setFormData({
         slotNumber: "",
         vehicleType: "CAR",
         status: "AVAILABLE",
         location: {
            id: "",
         },
      });
   };

   return (
      <AdminLayout>
         <h2 className="page-title">
            Manage Slots
         </h2>

         <div className="form-card">
            <form onSubmit={handleSubmit}>
               <div className="row g-3">

                  <div className="col-md-3">
                     <input
                        type="text"
                        name="slotNumber"
                        className="form-control"
                        placeholder="Slot Number"
                        value={formData.slotNumber}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="col-md-3">
                     <select
                        name="vehicleType"
                        className="form-select"
                        value={formData.vehicleType}
                        onChange={handleChange}
                     >
                        <option value="CAR">CAR</option>
                        <option value="BIKE">BIKE</option>
                     </select>
                  </div>

                  <div className="col-md-3">
                     <select
                        name="status"
                        className="form-select"
                        value={formData.status}
                        onChange={handleChange}
                     >
                        <option value="AVAILABLE">
                           AVAILABLE
                        </option>

                        <option value="BOOKED">
                           BOOKED
                        </option>
                     </select>
                  </div>

                  <div className="col-md-3">
                     <select
                        name="locationId"
                        className="form-select"
                        value={formData.location.id}
                        onChange={handleChange}
                        required
                     >
                        <option value="">
                           Select Location
                        </option>

                        {locations.map((location) => (
                           <option
                              key={location.id}
                              value={location.id}
                           >
                              {location.stationName}
                           </option>
                        ))}
                     </select>
                  </div>

                  <div className="col-12">
                     <button
                        type="submit"
                        className="btn btn-primary me-2"
                     >
                        {editingId
                           ? "Update Slot"
                           : "Add Slot"}
                     </button>

                     <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={resetForm}
                     >
                        Clear
                     </button>
                  </div>

               </div>
            </form>
         </div>

         <div className="admin-table">
            <h4>Parking Slots</h4>

            <table className="table table-striped">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Slot Number</th>
                     <th>Vehicle Type</th>
                     <th>Status</th>
                     <th>Location</th>
                     <th>Actions</th>
                  </tr>
               </thead>

               <tbody>
                  {slots.map((slot) => (
                     <tr key={slot.id}>
                        <td>{slot.id}</td>

                        <td>{slot.slotNumber}</td>

                        <td>{slot.vehicleType}</td>

                        <td>
                           {slot.status}
                        </td>

                        <td>
                           {slot.location?.stationName}
                        </td>

                        <td>
                           <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() =>
                                 handleEdit(slot)
                              }
                           >
                              Edit
                           </button>

                           <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                 handleDelete(slot.id)
                              }
                           >
                              Delete
                           </button>
                        </td>
                     </tr>
                  ))}
               </tbody>

            </table>
         </div>
      </AdminLayout>
   );
}

export default AdminSlots;