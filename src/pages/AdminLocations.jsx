import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";

function AdminLocations() {
   const [locations, setLocations] = useState([]);

   const [formData, setFormData] = useState({
      stationName: "",
      address: "",
      fourWheelerPrice: "",
      twoWheelerPrice: "",
      totalSlots: "",
      availableSlots: "",
      active: true,
   });

   const [editingId, setEditingId] = useState(null);

   useEffect(() => {
      fetchLocations();
   }, []);

   const fetchLocations = async () => {
      try {
         const response = await API.get("/locations");
         setLocations(response.data);
      } catch (error) {
         console.error(error);
      }
   };

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         if (editingId) {
            await API.put(`/locations/${editingId}`, formData);
         } else {
            await API.post("/locations", formData);
         }

         resetForm();
         fetchLocations();
      } catch (error) {
         console.error(error);
      }
   };

   const handleEdit = (location) => {
      setEditingId(location.id);

      setFormData({
         stationName: location.stationName,
         address: location.address,
         fourWheelerPrice: location.fourWheelerPrice,
         twoWheelerPrice: location.twoWheelerPrice,
         totalSlots: location.totalSlots,
         availableSlots: location.availableSlots,
         active: location.active,
      });
   };

   const handleDelete = async (id) => {
      if (!window.confirm("Delete this location?")) return;

      try {
         await API.delete(`/locations/${id}`);
         fetchLocations();
      } catch (error) {
         console.error(error);
      }
   };

   const resetForm = () => {
      setEditingId(null);

      setFormData({
         stationName: "",
         address: "",
         fourWheelerPrice: "",
         twoWheelerPrice: "",
         totalSlots: "",
         availableSlots: "",
         active: true,
      });
   };

   return (
      <AdminLayout>
         <h2 className="page-title">
            Manage Locations
         </h2>

         <div className="form-card">
            <form onSubmit={handleSubmit}>
               <div className="row g-3">

                  <div className="col-md-6">
                     <input
                        type="text"
                        name="stationName"
                        className="form-control"
                        placeholder="Station Name"
                        value={formData.stationName}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="col-md-6">
                     <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="col-md-3">
                     <input
                        type="number"
                        name="fourWheelerPrice"
                        className="form-control"
                        placeholder="4 Wheeler Price"
                        value={formData.fourWheelerPrice}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="col-md-3">
                     <input
                        type="number"
                        name="twoWheelerPrice"
                        className="form-control"
                        placeholder="2 Wheeler Price"
                        value={formData.twoWheelerPrice}
                        onChange={handleChange}
                        required
                     />
                  </div>

                  <div className="col-md-3">
                     <input
                        type="number"
                        name="totalSlots"
                        className="form-control"
                        placeholder="Total Slots"
                        value={formData.totalSlots}
                        onChange={handleChange}
                     />
                  </div>

                  <div className="col-md-3">
                     <input
                        type="number"
                        name="availableSlots"
                        className="form-control"
                        placeholder="Available Slots"
                        value={formData.availableSlots}
                        onChange={handleChange}
                     />
                  </div>

                  <div className="col-12">
                     <button
                        type="submit"
                        className="btn btn-primary me-2"
                     >
                        {editingId
                           ? "Update Location"
                           : "Add Location"}
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
            <h4>Locations</h4>

            <table className="table table-striped">
               <thead>
                  <tr>
                     <th>ID</th>
                     <th>Station</th>
                     <th>Address</th>
                     <th>Available</th>
                     <th>4W Price</th>
                     <th>2W Price</th>
                     <th>Actions</th>
                  </tr>
               </thead>

               <tbody>
                  {locations.map((location) => (
                     <tr key={location.id}>
                        <td>{location.id}</td>
                        <td>{location.stationName}</td>
                        <td>{location.address}</td>
                        <td>{location.availableSlots}</td>
                        <td>₹{location.fourWheelerPrice}</td>
                        <td>₹{location.twoWheelerPrice}</td>

                        <td>
                           <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={() =>
                                 handleEdit(location)
                              }
                           >
                              Edit
                           </button>

                           <button
                              className="btn btn-danger btn-sm"
                              onClick={() =>
                                 handleDelete(location.id)
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

export default AdminLocations;