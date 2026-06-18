
import "../styles/home.css";
import Footer from "../components/Footer";
import locations from "../data/locations";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Home() {

   const [activeFaq, setActiveFaq] = useState(0);
   const navigate = useNavigate();
   const [searchTerm, setSearchTerm] = useState("");

   const handleBookNow = () => {
      const token = localStorage.getItem("token");

      if (token) {
         navigate("/locations");
      } else {
         navigate("/login");
      }
   };

   const faqs = [
      {
         question: "Can I cancel my booking?",
         answer:
            "Yes, bookings can be cancelled from the My Bookings page."
      },
      {
         question: "Is parking secure?",
         answer:
            "Yes, all parking locations are monitored and maintained for a safe experience."
      },
      {
         question: "Can I book parking in advance?",
         answer:
            "Yes, you can reserve parking slots in advance based on availability."
      }
   ];

   return (
      <>
         <section className="home-hero">

            <div className="home-hero-container">

               <h1 className="home-hero-title">
                  Find & Reserve Parking Spaces Instantly
               </h1>

               <p className="home-hero-description">
                  Real-time parking availability, instant booking,
                  secure reservations, and hassle-free parking
                  management across Mumbai railway stations.
               </p>

               <div className="home-hero-trust">

                  <span>✓ Real-Time Availability</span>

                  <span>✓ Instant Booking</span>

                  <span>✓ Secure Parking</span>

                  <span>✓ 24/7 Access</span>

               </div>

               <div className="home-hero-search">

                  <input
                     type="text"
                     placeholder="Search for a station..."
                     value={searchTerm}
                     onChange={(e) => setSearchTerm(e.target.value)}
                     onKeyDown={(e) => {
                        if (e.key === "Enter") {
                           // this when pressing enter key parameter
                           navigate(
                              `/locations?search=${encodeURIComponent(
                                 searchTerm
                              )}`
                           );
                        }
                     }}
                  />

                  <button
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
                     Search
                  </button>

               </div>

               <div className="home-hero-cta-group">

                  <button className="home-hero-book-btn"
                     onClick={handleBookNow}>
                     Book Parking
                  </button>

                  <button className="home-hero-location-btn"
                     className="home-hero-location-btn"
                     onClick={() => navigate("/locations")}
                  >
                     View Locations
                  </button>

               </div>

            </div>

         </section>

         <section className="home-process-section">

            <div className="home-process-container">

               <div className="home-process-header">

                  <span className="home-process-badge">
                     #SmartParkingMadeEasy
                  </span>

                  <h2 className="home-process-heading">
                     Book Your Parking in 3 Simple Steps
                  </h2>

                  <p className="home-process-subheading">
                     Reserve your parking space within seconds and avoid
                     last-minute parking hassles.
                  </p>

               </div>

               <div className="home-process-grid">

                  <div className="home-process-card">

                     <div className="home-process-icon">
                        01
                     </div>

                     <h3 className="home-process-title">
                        Search Location
                     </h3>

                     <p className="home-process-description">
                        Find nearby railway station parking locations and
                        check real-time slot availability.
                     </p>

                  </div>

                  <div className="home-process-card">

                     <div className="home-process-icon">
                        02
                     </div>

                     <h3 className="home-process-title">
                        Reserve Slot
                     </h3>

                     <p className="home-process-description">
                        Select your preferred parking slot and confirm
                        your reservation instantly.
                     </p>

                  </div>

                  <div className="home-process-card">

                     <div className="home-process-icon">
                        03
                     </div>

                     <h3 className="home-process-title">
                        Park Stress-Free
                     </h3>

                     <p className="home-process-description">
                        Arrive at the location and park without wasting
                        time searching for a parking space.
                     </p>

                  </div>

               </div>

            </div>

         </section>

         {/* popular locations section */}

         <section className="home-locations-section">

            <div className="home-locations-container">

               <div className="home-locations-header">

                  <div>

                     <span className="home-locations-badge">
                        POPULAR DESTINATIONS
                     </span>

                     <h2 className="home-locations-heading">
                        Find Parking Near Major Railway Stations
                     </h2>

                  </div>

                  <button className="home-locations-view-btn">
                     View All Locations
                  </button>

               </div>

               <div className="home-locations-grid">

                  {locations.map((location) => (

                     <div
                        className="home-location-card"
                        key={location.id}
                     >

                        <div className="home-location-top">

                           <h3 className="home-location-name">
                              {location.stationName}
                           </h3>

                           <span className="home-location-badge">
                              {location.availableSlots} Available
                           </span>

                        </div>

                        <p className="home-location-address">
                           {location.address}
                        </p>

                        <div className="home-location-pricing">

                           <div className="home-location-price">

                              <span>Car</span>

                              <strong>
                                 ₹{location.fourWheelerPrice}/hr
                              </strong>

                           </div>

                           <div className="home-location-price">

                              <span>Bike</span>

                              <strong>
                                 ₹{location.twoWheelerPrice}/hr
                              </strong>

                           </div>

                        </div>

                        <button className="home-location-book-btn"
                           onClick={handleBookNow}>
                           Book Parking
                        </button>

                     </div>

                  ))}

               </div>

            </div>

         </section>



         <section className="home-features-section">

            <div className="home-features-container">

               <div className="home-features-header">

                  <span className="home-features-badge">
                     WHY PARKEASE
                  </span>

                  <h2 className="home-features-heading">
                     Everything You Need For Stress-Free Parking
                  </h2>

               </div>

               <div className="home-features-grid">

                  <div className="home-feature-card">

                     <div className="home-feature-icon">
                        ✓
                     </div>

                     <h3 className="home-feature-title">
                        Easy Booking
                     </h3>

                     <p className="home-feature-description">
                        Reserve your parking space in seconds with a
                        simple and intuitive booking experience.
                     </p>

                  </div>

                  <div className="home-feature-card">

                     <div className="home-feature-icon">
                        🛡
                     </div>

                     <h3 className="home-feature-title">
                        Secure Parking
                     </h3>

                     <p className="home-feature-description">
                        Verified parking locations with safe and
                        reliable reservations.
                     </p>

                  </div>

                  <div className="home-feature-card">

                     <div className="home-feature-icon">
                        ⏱
                     </div>

                     <h3 className="home-feature-title">
                        Real-Time Availability
                     </h3>

                     <p className="home-feature-description">
                        Check live parking slot availability before
                        reaching your destination.
                     </p>

                  </div>

                  <div className="home-feature-card">

                     <div className="home-feature-icon">
                        📍
                     </div>

                     <h3 className="home-feature-title">
                        24/7 Accessibility
                     </h3>

                     <p className="home-feature-description">
                        Book and manage your reservations anytime,
                        anywhere.
                     </p>

                  </div>

               </div>

            </div>

         </section>

         <section className="home-faq-section">

            <div className="home-faq-container">

               <div className="home-faq-header">

                  <span className="home-faq-badge">
                     FAQs
                  </span>

                  <h2 className="home-faq-heading">
                     Frequently Asked Questions
                  </h2>

               </div>

               <div className="home-faq-list">

                  {faqs.map((faq, index) => (

                     <div
                        key={index}
                        className="home-faq-item"
                     >

                        <button
                           className="home-faq-question"
                           onClick={() =>
                              setActiveFaq(
                                 activeFaq === index ? -1 : index
                              )
                           }
                        >

                           <span>{faq.question}</span>

                           <span>
                              {activeFaq === index ? "−" : "+"}
                           </span>

                        </button>

                        {activeFaq === index && (

                           <div className="home-faq-answer">
                              {faq.answer}
                           </div>

                        )}

                     </div>

                  ))}

               </div>

            </div>

         </section>

         <Footer />
      </>
   );
}

export default Home;
