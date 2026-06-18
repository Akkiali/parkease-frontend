import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import StatsCounter from "../components/StatsCounter";
import "../styles/explore.css";

function Explore() {
   return (
      <div className="explore-page">

         {/* HERO */}

         <section className="explore-hero">

            <div className="explore-container">

               <div className="explore-hero-content">

                  <span className="explore-tag">
                     Smart Parking In Mumbai
                  </span>

                  <h1>
                     Find Parking
                     <span> Before You Arrive</span>
                  </h1>

                  <p>
                     Reserve secure parking spaces across Mumbai
                     in seconds. Compare prices, check availability,
                     and book instantly with ParkEase.
                  </p>

                  <div className="explore-hero-actions">

                     <Link
                        to="/home"
                        className="explore-primary-btn"
                     >
                        Explore Locations
                     </Link>

                     <Link
                        to="/book-parking"
                        className="explore-secondary-btn"
                     >
                        Book Parking
                     </Link>

                  </div>

               </div>

               <div className="explore-hero-image">

                  <img
                     src="/images/explore-hero.jpg"
                     alt="Smart Parking"
                  />
                  <div className="hero-floating-card">
                     <strong>98% Availability </strong>
                     <span>Live Parking Status</span>
                  </div>

               </div>

            </div>

         </section>

         {/* STATS */}

         <section className="explore-stats">

            <div className="explore-container">

               <div className="explore-stats-grid">

                  <div className="explore-stat-card">
                     <h3>
                        <StatsCounter end={12500} suffix="+" />
                     </h3>
                     <p>Bookings</p>
                  </div>

                  <div className="explore-stat-card">
                     <h3>
                        <StatsCounter end={250} suffix="+" />
                     </h3>
                     <p>Parking Slots</p>
                  </div>

                  <div className="explore-stat-card">
                     <h3>
                        <StatsCounter end={35} suffix="+" />
                     </h3>
                     <p>Locations</p>
                  </div>

                  <div className="explore-stat-card">
                     <h3>
                        <StatsCounter end={98} suffix="%" />
                     </h3>
                     <p>Availability</p>
                  </div>

               </div>

            </div>

         </section>

         {/* SEARCH

         <section className="explore-search-section">

            <div className="explore-container">

               <div className="explore-section-header">

                  <span>Explore Parking</span>

                  <h2>
                     Discover Parking Locations
                  </h2>

                  <p>
                     Browse parking spots across Mumbai.
                  </p>

               </div>

               <div className="explore-search-box">

                  <input
                     type="text"
                     placeholder="Search locations..."
                  />

               </div>

               <div className="explore-categories">

                  <button>All</button>
                  <button>Railway Stations</button>
                  <button>Malls</button>
                  <button>Corporate Areas</button>

               </div>

               


            </div>

         </section> */}

         {/* POPULAR LOCATIONS */}

         <section className="explore-locations">

            <div className="explore-container">

               <div className="explore-section-header">

                  <span>Popular Locations</span>

                  <h2>
                     Most Booked Parking Spaces
                  </h2>

               </div>

               <div className="explore-location-grid">

                  <div className="explore-location-card">

                     <img
                        src="/images/location-marine.jpg"
                        alt=""
                     />

                     <div className="explore-location-body">

                        <h3>Marine Drive Station</h3>

                        <span className="explore-slot-badge">
                           6 Slots Available
                        </span>

                        <p>
                           Covered parking with quick access.
                        </p>

                        <strong>₹120/hr</strong>

                        <Link
                           to="/login"
                           className="explore-primary-btn"
                        >
                           Reserve Spot
                        </Link>

                     </div>

                  </div>

                  <div className="explore-location-card">

                     <img
                        src="/images/location-central.jpg"
                        alt=""
                     />

                     <div className="explore-location-body">

                        <h3>Central Station</h3>

                        <span className="explore-slot-badge">
                           10 Slots Available
                        </span>

                        <p>
                           Fast access to railway platforms.
                        </p>

                        <strong>₹110/hr</strong>

                        <Link
                           to="/login"
                           className="explore-primary-btn"
                        >
                           Reserve Spot
                        </Link>

                     </div>

                  </div>

                  <div className="explore-location-card">

                     <img
                        src="/images/location-east.jpg"
                        alt=""
                     />

                     <div className="explore-location-body">

                        <h3>East Campus</h3>

                        <span className="explore-slot-badge">
                           8 Slots Available
                        </span>

                        <p>
                           Reserved parking for early arrivals.
                        </p>

                        <strong>₹100/hr</strong>

                        <Link
                           to="/login"
                           className="explore-primary-btn"
                        >
                           Reserve Spot
                        </Link>

                     </div>

                  </div>

               </div>

            </div>

         </section>

         {/* FEATURES */}

         <section className="explore-features">

            <div className="explore-container">

               <div className="explore-section-header">

                  <span>Why ParkEase</span>

                  <h2>
                     Everything You Need
                  </h2>

               </div>

               <div className="explore-features-grid">

                  <div className="feature-card">🚗 Real-Time Availability</div>
                  <div className="feature-card">🛡 Secure Parking</div>
                  <div className="feature-card">⚡ Instant Booking</div>
                  <div className="feature-card">📍 Verified Locations</div>
                  <div className="feature-card">💳 Easy Payments</div>
                  <div className="feature-card">📖 Booking History</div>

               </div>

            </div>

         </section>

         {/* DASHBOARD */}

         <section className="explore-dashboard">

            <div className="explore-container">

               <div className="explore-section-header">

                  <span>Dashboard Preview</span>

                  <h2>
                     Manage Everything In One Place
                  </h2>

               </div>

               <img
                  src="/images/dashboard-preview.jpg"
                  alt=""
                  className="explore-dashboard-image"
               />

            </div>

         </section>

         {/* MUMBAI */}

         <section className="explore-mumbai">

            <div className="explore-container explore-mumbai-grid">

               <img
                  src="/images/mumbai-city.jpg"
                  alt=""
               />

               <div>

                  <span>Mumbai Mobility</span>

                  <h2>
                     Built For Mumbai's Busy Roads
                  </h2>

                  <p>
                     Discover parking solutions near railway stations,
                     commercial hubs and popular destinations.
                  </p>

               </div>

            </div>

         </section>

         {/* TESTIMONIAL */}

         <section className="explore-testimonial">

            <div className="explore-container explore-testimonial-grid">

               <img
                  src="/images/happy-driver.jpg"
                  alt=""
               />

               <div>

                  <h2>
                     Trusted By Drivers
                  </h2>

                  <p>
                     ★★★★★
                  </p>

                  <blockquote>
                     ParkEase helped me find parking in less than
                     a minute during peak hours.
                  </blockquote>

                  <strong>
                     — Happy Customer
                  </strong>

               </div>

            </div>

         </section>

         {/* CTA */}

         <section className="explore-cta">

            <div className="explore-container">

               <h2>
                  Ready To Reserve Your Parking Spot?
               </h2>

               <p>
                  Join thousands of drivers using ParkEase.
               </p>

               <div className="explore-cta-actions">

                  <Link
                     to="/locations"
                     className="explore-cta-primary-btn"
                  >
                     Explore Locations
                  </Link>

                  <Link
                     to="/register"
                     className="explore-cta-secondary-btn"
                  >
                     Get Started
                  </Link>

               </div>

            </div>

         </section>

         <Footer />

      </div>
   );
}

export default Explore;