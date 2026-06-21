import { useEffect, useState } from "react";
import API from "../services/api";
import AdminLayout from "../components/AdminLayout";
import "../styles/admin.css";

function AdminDashboard() {
   const [stats, setStats] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      fetchStats();
   }, []);

   const fetchStats = async () => {
      try {
         const response = await API.get("/dashboard/stats");
         setStats(response.data);
      } catch (error) {
         console.error("Error loading dashboard stats", error);
      } finally {
         setLoading(false);
      }
   };

   if (loading) {
      return (
         <AdminLayout>
            <div className="text-center">
               <h4>Loading Dashboard...</h4>
            </div>
         </AdminLayout>
      );
   }

   return (
      <AdminLayout>
         <h2 className="page-title">Admin Dashboard</h2>

         <div className="row g-4">

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Total Users</p>
                  <h3>{stats?.totalUsers}</h3>
               </div>
            </div>

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Total Locations</p>
                  <h3>{stats?.totalLocations}</h3>
               </div>
            </div>

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Total Slots</p>
                  <h3>{stats?.totalSlots}</h3>
               </div>
            </div>

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Total Bookings</p>
                  <h3>{stats?.totalBookings}</h3>
               </div>
            </div>

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Available Slots</p>
                  <h3>{stats?.availableSlots}</h3>
               </div>
            </div>

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Active Bookings</p>
                  <h3>{stats?.activeBookings}</h3>
               </div>
            </div>

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Completed Bookings</p>
                  <h3>{stats?.completedBookings}</h3>
               </div>
            </div>

            <div className="col-md-3">
               <div className="stat-card">
                  <p>Cancelled Bookings</p>
                  <h3>{stats?.cancelledBookings}</h3>
               </div>
            </div>

            <div className="col-md-6 mx-auto">
               <div className="stat-card">
                  <p>Total Revenue</p>
                  <h3>₹{stats?.totalRevenue}</h3>
               </div>
            </div>

         </div>

         <div className="admin-table mt-4">
            <h4>Dashboard Summary</h4>

            <table className="table table-striped mt-3">
               <tbody>
                  <tr>
                     <td>Total Users</td>
                     <td>{stats?.totalUsers}</td>
                  </tr>

                  <tr>
                     <td>Total Locations</td>
                     <td>{stats?.totalLocations}</td>
                  </tr>

                  <tr>
                     <td>Total Slots</td>
                     <td>{stats?.totalSlots}</td>
                  </tr>

                  <tr>
                     <td>Total Bookings</td>
                     <td>{stats?.totalBookings}</td>
                  </tr>

                  <tr>
                     <td>Available Slots</td>
                     <td>{stats?.availableSlots}</td>
                  </tr>

                  <tr>
                     <td>Active Bookings</td>
                     <td>{stats?.activeBookings}</td>
                  </tr>

                  <tr>
                     <td>Completed Bookings</td>
                     <td>{stats?.completedBookings}</td>
                  </tr>

                  <tr>
                     <td>Cancelled Bookings</td>
                     <td>{stats?.cancelledBookings}</td>
                  </tr>

                  <tr>
                     <td>Total Revenue</td>
                     <td>₹{stats?.totalRevenue}</td>
                  </tr>
               </tbody>
            </table>
         </div>

      </AdminLayout>
   );
}

export default AdminDashboard;