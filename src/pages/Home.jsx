import "../styles/home.css";
import Footer from "../components/Footer";
import locations from "../data/locations";

function Home() {
   return (
      <>
         <section className="hero-section">

            <div className="container">

               <h1>
                  Reserve Your Parking Slot Before You Arrive
               </h1>

               <p>
                  Secure your parking space in advance and save
                  time during your commute.
               </p>

               <div className="search-box">

                  <div className="input-group">

                     <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Search for a station..."
                     />

                     <button className="btn btn-primary">
                        Search
                     </button>

                  </div>

               </div>

            </div>

         </section>

         <section className="how-it-works">

            <div className="container">

               <h2>How It Works</h2>

               <div className="row">

                  <div className="col-md-4 mb-4">

                     <div className="step-card">

                        <div className="step-number">
                           1
                        </div>

                        <h4>Search</h4>

                        <p>
                           Find your railway station and check
                           available parking slots.
                        </p>

                     </div>

                  </div>

                  <div className="col-md-4 mb-4">

                     <div className="step-card">

                        <div className="step-number">
                           2
                        </div>

                        <h4>Book</h4>

                        <p>
                           Choose your preferred parking slot and
                           confirm booking.
                        </p>

                     </div>

                  </div>

                  <div className="col-md-4 mb-4">

                     <div className="step-card">

                        <div className="step-number">
                           3
                        </div>

                        <h4>Park</h4>

                        <p>
                           Arrive at the station and park without
                           any hassle.
                        </p>

                     </div>

                  </div>

               </div>

            </div>

         </section>

         <section className="popular-locations">

            <div className="container">

               <div className="d-flex justify-content-between align-items-center mb-5">

                  <h2>Popular Locations</h2>

                  <span className="view-all">
                     View All Stations →
                  </span>

               </div>

               <div className="row">

                  {locations.map((location) => (

                     <div
                        className="col-md-4 mb-4"
                        key={location.id}
                     >

                        <div className="location-card">

                           <div className="d-flex justify-content-between">

                              <h4>{location.stationName}</h4>

                              <span className="slot-badge">
                                 {location.availableSlots} slots left
                              </span>

                           </div>

                           <p>{location.address}</p>

                           <p>
                              Four Wheeler:
                              <strong>
                                 ₹{location.fourWheelerPrice}/hr
                              </strong>
                           </p>

                           <p>
                              Two Wheeler:
                              <strong>
                                 ₹{location.twoWheelerPrice}/hr
                              </strong>
                           </p>

                           <button className="btn btn-primary w-100">
                              Book Now
                           </button>

                        </div>

                     </div>

                  ))}

               </div>

            </div>

         </section>

         <section className="why-us">

            <div className="container">

               <h2>Why Choose Us</h2>

               <div className="row mt-5">

                  <div className="col-md-3 text-center mb-4">
                     <div className="feature-icon">✓</div>

                     <h4>Easy Booking</h4>

                     <p>
                        Simple and intuitive interface for
                        quick reservations.
                     </p>
                  </div>

                  <div className="col-md-3 text-center mb-4">
                     <div className="feature-icon">🛡</div>

                     <h4>Secure Parking</h4>

                     <p>
                        Safe and reliable parking locations.
                     </p>
                  </div>

                  <div className="col-md-3 text-center mb-4">
                     <div className="feature-icon">🕒</div>

                     <h4>24/7 Support</h4>

                     <p>
                        Customer assistance whenever needed.
                     </p>
                  </div>

                  <div className="col-md-3 text-center mb-4">
                     <div className="feature-icon">📍</div>

                     <h4>Instant Confirmation</h4>

                     <p>
                        Booking confirmation immediately after
                        reservation.
                     </p>
                  </div>

               </div>

            </div>

         </section>

         <section className="faq-section">

            <div className="container">

               <h2 className="text-center mb-5">
                  Frequently Asked Questions
               </h2>

               <div className="accordion" id="faqAccordion">

                  <div className="accordion-item">

                     <h2 className="accordion-header">

                        <button
                           className="accordion-button"
                           data-bs-toggle="collapse"
                           data-bs-target="#faq1"
                        >
                           Can I cancel my booking?
                        </button>

                     </h2>

                     <div
                        id="faq1"
                        className="accordion-collapse collapse show"
                     >

                        <div className="accordion-body">
                           Yes, bookings can be cancelled from
                           My Bookings page.
                        </div>

                     </div>

                  </div>

                  <div className="accordion-item">

                     <h2 className="accordion-header">

                        <button
                           className="accordion-button collapsed"
                           data-bs-toggle="collapse"
                           data-bs-target="#faq2"
                        >
                           Is parking secure?
                        </button>

                     </h2>

                     <div
                        id="faq2"
                        className="accordion-collapse collapse"
                     >

                        <div className="accordion-body">
                           Yes, all locations are monitored and
                           maintained.
                        </div>

                     </div>

                  </div>

               </div>

            </div>

         </section>

         <Footer />
      </>
   );
}

export default Home;