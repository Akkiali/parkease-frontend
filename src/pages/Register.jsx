import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import "../styles/register.css";

function Register() {
   const navigate = useNavigate();

   const [showPassword, setShowPassword] = useState(false);
   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      mobile: "",
      password: "",
   });

   const [confirmPassword, setConfirmPassword] = useState("");

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      if (formData.password !== confirmPassword) {
         alert("Passwords do not match");
         return;
      }

      try {
         await registerUser(formData);

         alert("Registration Successful");

         navigate("/login");
      } catch (error) {
         alert("Registration Failed");
      }
   };

   return (
      <div className="register-page">

         <main className="register-shell">

            <section className="register-left">

               <Link
                  to="/"
                  className="register-brand"
               >
                  <span className="register-brand-mark">P</span>
                  <span>ParkEase</span>
               </Link>

               <div className="register-left-content">

                  <h2>
                     Park Smarter.
                     <br />
                     Reserve Faster.
                  </h2>

                  <p>
                     Join ParkEase and enjoy seamless parking reservations,
                     real-time slot availability, and instant booking
                     confirmations across multiple locations.
                  </p>

                  <div className="register-feature-list">

                     <div className="register-feature-item">
                        ✓ Real-Time Slot Availability
                     </div>

                     <div className="register-feature-item">
                        ✓ Secure Parking Reservations
                     </div>

                     <div className="register-feature-item">
                        ✓ Multiple Parking Locations
                     </div>

                     <div className="register-feature-item">
                        ✓ Instant Booking Confirmation
                     </div>

                  </div>

                  <div className="register-image-wrapper">

                     <img
                        src="/images/account_creation_image.jpg"
                        alt="Parking Illustration"
                     />

                  </div>

               </div>

            </section>

            <section className="register-right">

               <div className="register-form-wrap">

                  <h1>Create Account</h1>

                  <p className="register-description">
                     Create your account and start managing your parking
                     reservations effortlessly.
                  </p>

                  <form onSubmit={handleSubmit}>

                     <div className="register-form-group">

                        <label>Full Name</label>

                        <input
                           type="text"
                           name="fullName"
                           value={formData.fullName}
                           onChange={handleChange}
                           placeholder="Enter your full name"
                           required
                        />

                     </div>

                     <div className="register-form-group">

                        <label>Email Address</label>

                        <input
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="yourname@example.com"
                           required
                        />

                     </div>

                     <div className="register-form-group">

                        <label>Mobile Number</label>

                        <input
                           type="text"
                           name="mobile"
                           value={formData.mobile}
                           onChange={handleChange}
                           placeholder="Enter mobile number"
                           required
                        />

                     </div>

                     <div className="register-form-group">

                        <label>Password</label>

                        <div className="register-password-field">

                           <input
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Enter password"
                              required
                           />

                           <button
                              type="button"
                              className="register-password-toggle"
                              onClick={() =>
                                 setShowPassword(!showPassword)
                              }
                           >
                              <svg
                                 className="register-password-icon"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true"
                              >
                                 <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" />
                                 <circle cx="12" cy="12" r="2.4" />
                              </svg>
                           </button>

                        </div>

                     </div>

                     <div className="register-form-group">

                        <label>Confirm Password</label>

                        <div className="register-password-field">

                           <input
                              type={
                                 showConfirmPassword
                                    ? "text"
                                    : "password"
                              }
                              value={confirmPassword}
                              onChange={(e) =>
                                 setConfirmPassword(e.target.value)
                              }
                              placeholder="Confirm password"
                              required
                           />

                           <button
                              type="button"
                              className="register-password-toggle"
                              onClick={() =>
                                 setShowConfirmPassword(
                                    !showConfirmPassword
                                 )
                              }
                           >
                              <svg
                                 className="register-password-icon"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true"
                              >
                                 <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" />
                                 <circle cx="12" cy="12" r="2.4" />
                              </svg>
                           </button>

                        </div>

                     </div>

                     <button
                        type="submit"
                        className="register-submit-btn"
                     >
                        Create Account
                     </button>

                  </form>

                  <p className="register-login-text">
                     Already have an account?
                     <Link to="/login"> Login</Link>
                  </p>

               </div>

            </section>

         </main>

      </div>
   );
}

export default Register;