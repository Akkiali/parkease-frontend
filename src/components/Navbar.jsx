import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";
import "../styles/navbar.css";

function Navbar() {

   const navigate = useNavigate();

   const handleLogout = () => {
      logout();
      navigate("/login");
   };

   const loggedIn = isAuthenticated();

   return (
      <nav className="navbar navbar-expand-lg navbar-custom">

         <div className="container">

            <Link className="navbar-brand" to="/">
               ParkEase Mumbai
            </Link>

            <div className="ms-auto d-flex align-items-center">

               <Link
                  className="nav-link-custom text-decoration-none"
                  to="/"
               >
                  Home
               </Link>

               <Link
                  className="nav-link-custom text-decoration-none"
                  to="/locations"
               >
                  Locations
               </Link>

               {loggedIn && (
                  <Link
                     className="nav-link-custom text-decoration-none"
                     to="/my-bookings"
                  >
                     My Bookings
                  </Link>
               )}

               {!loggedIn ? (
                  <>
                     <Link
                        className="login-btn text-decoration-none"
                        to="/login"
                     >
                        Login
                     </Link>

                     <Link
                        className="register-btn text-decoration-none"
                        to="/register"
                     >
                        Register
                     </Link>
                  </>
               ) : (
                  <button
                     className="btn btn-danger ms-3"
                     onClick={handleLogout}
                  >
                     Logout
                  </button>
               )}

            </div>

         </div>

      </nav>
   );
}

export default Navbar;