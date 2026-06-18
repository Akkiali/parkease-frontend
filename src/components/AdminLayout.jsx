import { Link, useNavigate } from "react-router-dom";
import "../styles/admin.css";

function AdminLayout({ children }) {
   const navigate = useNavigate();

   const handleLogout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
   };

   return (
      <div className="admin-layout">
         <div className="admin-sidebar">
            <div className="admin-logo">
               <h2>ParkEase</h2>
               <p>Admin Panel</p>
            </div>

            <div className="admin-menu">
               <Link to="/admin">Dashboard</Link>

               <Link to="/admin/locations">
                  Manage Locations
               </Link>

               <Link to="/admin/slots">
                  Manage Slots
               </Link>

               <Link to="/admin/bookings">
                  Manage Bookings
               </Link>

               <Link to="/home">
                  Back To User Site
               </Link>

               <button
                  className="btn btn-danger mt-3"
                  onClick={handleLogout}
               >
                  Logout
               </button>
            </div>
         </div>

         <div className="admin-content">
            {children}
         </div>
      </div>
   );
}

export default AdminLayout;