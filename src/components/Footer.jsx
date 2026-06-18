import { Link } from "react-router-dom";
import "../styles/footer.css";

function Footer() {
   return (
      <footer className="footer">
         <div className="container">

            <div className="row">

               <div className="col-md-4 mb-4">

                  <div className="footer-brand">

                     <div className="footer-logo">
                        P
                     </div>

                     <div>
                        <h4>ParkEase</h4>
                        <span>MUMBAI</span>
                     </div>

                  </div>

                  <p className="footer-description">
                     Smart parking reservations across Mumbai and
                     Navi Mumbai railway stations. Fast, secure,
                     and hassle-free parking management.
                  </p>

               </div>

               <div className="col-md-4 mb-4">

                  <h4>Quick Links</h4>

                  <ul className="footer-links">

                     <li>
                        <Link to="/home">Home</Link>
                     </li>

                     <li>
                        <Link to="/explore">Explore</Link>
                     </li>

                     <li>
                        <Link to="/locations">Locations</Link>
                     </li>

                     <li>
                        <Link to="/my-bookings">
                           My Bookings
                        </Link>
                     </li>

                  </ul>

               </div>

               <div className="col-md-4 mb-4">

                  <h4>Contact</h4>

                  <p>📍 Mumbai, Maharashtra</p>

                  <p>
                     ✉ support@parkease.com
                  </p>

                  <p>
                     🕒 Available 24/7
                  </p>

               </div>

            </div>

            <hr />

            <div className="footer-bottom">
               © 2026 ParkEase • Smart Parking Management System
            </div>

         </div>
      </footer>
   );
}

export default Footer;