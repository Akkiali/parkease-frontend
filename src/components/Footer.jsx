import "../styles/footer.css";

function Footer() {
   return (
      <footer className="footer">

         <div className="container">

            <div className="row">

               <div className="col-md-4 mb-4">

                  <h4>ParkEase Mumbai</h4>

                  <p>
                     Official parking booking portal for Mumbai and
                     Navi Mumbai railway stations. Reliable, secure,
                     and hassle-free parking.
                  </p>

               </div>

               <div className="col-md-4 mb-4">

                  <h4>Quick Links</h4>

                  <ul className="footer-links">
                     <li>Home</li>
                     <li>Locations</li>
                     <li>My Bookings</li>

                  </ul>

               </div>

               <div className="col-md-4 mb-4">

                  <h4>Contact</h4>

                  <p>
                     Email: support@parkeasemumbai.gov.in
                  </p>

                  <p>
                     Helpline: 1800-111-2222 (Toll Free)
                  </p>

                  <p>
                     Address: BMC Headquarters, Mumbai
                  </p>

               </div>

            </div>

            <hr />

            <div className="footer-bottom">
               © 2026 ParkEase Mumbai. All rights reserved.
            </div>

         </div>

      </footer>
   );
}

export default Footer;