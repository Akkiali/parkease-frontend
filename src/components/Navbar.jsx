import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { isAuthenticated, logout } from "../utils/auth";
import "../styles/navbar.css";

function Navbar() {
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("");

   const handleLogout = () => {
      logout();
      navigate("/login");
   };

   const loggedIn = isAuthenticated();

   const user = JSON.parse(
      localStorage.getItem("user") || "null"
   );

   const isAdmin =
      user?.role === "ROLE_ADMIN";

   return (
      <nav className="pe-navbar">

         <div className="pe-navbar-container">

            <Link
               className="pe-navbar-brand"
               to="/"
            >
               <span className="pe-brand-main">
                  ParkEase
               </span>

               <span className="pe-brand-sub">
                  Mumbai
               </span>
            </Link>

            <div className="pe-navbar-actions">

               <Link
                  className="pe-nav-link"
                  to="/home"
               >
                  Home
               </Link>

               <Link className="pe-nav-link" to="/explore">
                  Explore
               </Link>

               <Link
                  className="pe-nav-link"
                  to="/locations"
               >
                  Locations
               </Link>

               {/* <Link
                  className="pe-nav-search"
                  to="/locations"
               >
                  <span>🔍</span>
                  <span>Search</span>
               </Link> */}

               <div className="pe-nav-search">
                  <span
                     className="pe-nav-search-icon"
                     onClick={() => {
                        if (!searchTerm.trim()) {
                           navigate("/locations");
                           return;
                        }

                        navigate(
                           `/locations?search=${encodeURIComponent(
                              searchTerm
                           )}`
                        );
                     }}
                  >
                     🔍
                  </span>

                  <input
                     type="text"
                     placeholder="Search..."
                     value={searchTerm}
                     onChange={(e) =>
                        setSearchTerm(e.target.value)
                     }
                     onKeyDown={(e) => {
                        if (e.key === "Enter") {
                           if (!searchTerm.trim()) {
                              navigate("/locations");
                              return;
                           }

                           navigate(
                              searchTerm.trim()
                                 ? `/locations?search=${encodeURIComponent(
                                    searchTerm
                                 )}`
                                 : "/locations"
                           );
                           setSearchTerm("");
                        }
                     }}
                  />
               </div>

               <div className="nav-divider"></div>

               {loggedIn && (
                  <Link
                     className="pe-nav-link"
                     to="/my-bookings"
                  >
                     My Bookings
                  </Link>
               )}

               {loggedIn && isAdmin && (
                  <Link
                     className="pe-nav-link pe-admin-link"
                     to="/admin"
                  >
                     Admin Panel
                  </Link>
               )}

               {!loggedIn ? (
                  <>
                     <Link
                        className="pe-login-btn"
                        to="/login"
                     >
                        Login
                     </Link>

                     <Link
                        className="pe-register-btn"
                        to="/register"
                     >
                        Register
                     </Link>
                  </>
               ) : (
                  <>
                     <span className="pe-user-badge">
                        Welcome, {user?.fullName}
                     </span>

                     <button
                        className="pe-logout-btn"
                        onClick={handleLogout}
                     >
                        Logout
                     </button>
                  </>
               )}

            </div>

         </div>

      </nav>
   );
}

export default Navbar;