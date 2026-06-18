import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import { saveToken } from "../utils/auth";
import "../styles/login.css";

function Login() {
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);
   const [loading, setLoading] = useState(false);

   const [formData, setFormData] = useState({
      email: "",
      password: "",
   });

   const handleChange = (e) => {
      setFormData({
         ...formData,
         [e.target.name]: e.target.value,
      });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {

         setLoading(true);

         const response = await loginUser(formData);

         saveToken(response.data.token);

         localStorage.setItem(
            "user",
            JSON.stringify({
               id: response.data.id,
               fullName: response.data.fullName,
               email: response.data.email,
               role: response.data.role,
            })
         );

         navigate("/locations");
      } catch (error) {
         alert("Login Failed");
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className="login-page">

         <main className="login-shell">

            <section className="login-left">

               <Link
                  to="/"
                  className="login-brand"
               >
                  
                  <span className="login-brand-mark" aria-hidden="true">P</span>
                  <span>ParkEase</span>
               </Link>

               <div className="login-form-wrap">

                  <h1>Welcome Back</h1>

                  <p className="login-description">
                     Enter your email and password to access your account.
                  </p>

                  <form onSubmit={handleSubmit}>

                     <div className="login-form-group">
                        <label htmlFor="login-email">Email</label>

                        <input
                           id="login-email"
                           type="email"
                           name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="yourname@example.com"
                           required
                        />
                     </div>

                     <div className="login-form-group">
                        <label htmlFor="login-password">Password</label>

                        <div className="login-password-field">
                           <input
                              id="login-password"
                              type={showPassword ? "text" : "password"}
                              name="password"
                              value={formData.password}
                              onChange={handleChange}
                              placeholder="Enter your password"
                              required
                           />

                           <button
                              type="button"
                              className="login-password-toggle"
                              onClick={() => setShowPassword(!showPassword)}
                           >
                              <svg
                                 className="login-password-icon"
                                 viewBox="0 0 24 24"
                                 aria-hidden="true"
                              >
                                 <path d="M3 12s3.2-5 9-5 9 5 9 5-3.2 5-9 5-9-5-9-5Z" />
                                 <circle cx="12" cy="12" r="2.4" />
                              </svg>
                           </button>
                        </div>
                     </div>

                     <div className="login-form-footer">
                        <label className="login-remember">
                           <input type="checkbox" />
                           <span>Remember Me</span>
                        </label>

                        <Link
                           to="/forgot-password"
                           className="login-forgot-link"
                        >
                           Forgot Your Password?
                        </Link>
                     </div>

                     <button
                        type="submit"
                        className="login-submit-btn"
                        disabled={loading}
                     >
                        {loading ? "Logging In..." : "Log In"}
                     </button>

                  </form>

                  <div className="login-divider">
                     <span></span>
                     <p>Or Login With</p>
                     <span></span>
                  </div>

                  <div className="login-social-buttons">
                     <button
                        type="button"
                        className="login-social-btn"
                     >
                        <svg
                           className="login-social-icon"
                           viewBox="0 0 24 24"
                           aria-hidden="true"
                        >
                           <path
                              fill="#4285F4"
                              d="M21.6 12.23c0-.78-.07-1.53-.2-2.23H12v4.22h5.38a4.6 4.6 0 0 1-2 3.02v2.51h3.24c1.9-1.75 2.98-4.32 2.98-7.52Z"
                           />
                           <path
                              fill="#34A853"
                              d="M12 22c2.7 0 4.96-.9 6.62-2.44l-3.24-2.51c-.9.6-2.04.95-3.38.95-2.6 0-4.8-1.76-5.59-4.12H3.06v2.59A10 10 0 0 0 12 22Z"
                           />
                           <path
                              fill="#FBBC05"
                              d="M6.41 13.88a6 6 0 0 1 0-3.76V7.53H3.06a10 10 0 0 0 0 8.94l3.35-2.59Z"
                           />
                           <path
                              fill="#EA4335"
                              d="M12 6c1.47 0 2.8.51 3.84 1.5l2.87-2.87A9.62 9.62 0 0 0 12 2a10 10 0 0 0-8.94 5.53l3.35 2.59C7.2 7.76 9.4 6 12 6Z"
                           />
                        </svg>
                        Google
                     </button>

                     <button
                        type="button"
                        className="login-social-btn"
                     >
                        <svg
                           className="login-social-icon login-apple-icon"
                           viewBox="0 0 24 24"
                           aria-hidden="true"
                        >
                           <path
                              fill="currentColor"
                              d="M16.6 13.1c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.4-.1-2.6.8-3.3.8-.7 0-1.8-.8-2.9-.8-1.5 0-2.9.9-3.7 2.2-1.6 2.8-.4 6.9 1.1 9.2.8 1.1 1.7 2.4 2.9 2.3 1.1 0 1.6-.7 3-.7s1.8.7 3 .7c1.3 0 2.1-1.1 2.8-2.3.9-1.3 1.2-2.5 1.2-2.6 0 0-2.8-1.1-2.8-3.7Zm-2.2-6.6c.6-.8 1-1.8.9-2.9-.9 0-1.9.6-2.6 1.4-.6.7-1.1 1.8-1 2.8 1 .1 2-.5 2.7-1.3Z"
                           />
                        </svg>
                        Apple
                     </button>
                  </div>

                  <p className="login-register-text">
                     Don't Have An Account?
                     <Link to="/register"> Register Now.</Link>
                  </p>

               </div>

               <footer className="login-footer">
                  <span>Copyright &copy; 2026 ParkEase</span>
                  <a href="/">Privacy Policy</a>
               </footer>

            </section>

            <section className="login-right" aria-hidden="true">

               <div className="login-right-content">
                  <h2>
                     Effortlessly manage your parking operations.
                  </h2>

                  <p>
                     Log in to access your dashboard and manage bookings, slots, and locations.
                  </p>

                  <div className="login-dashboard-preview">
                     <div className="login-stat-card login-stat-primary">
                        <span>Total Bookings</span>
                        <strong>INR 189,374</strong>
                     </div>

                     <div className="login-stat-card">
                        <span>Parking Time</span>
                        <strong>00:01:30</strong>
                        <div className="login-mini-chart"></div>
                     </div>

                     <div className="login-table-card">
                        <div className="login-table-heading">
                           <strong>Recent Bookings</strong>
                           <span>Today</span>
                        </div>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                     </div>

                     <div className="login-chart-card">
                        <span>Slot Categories</span>
                        <strong>6,248 Units</strong>
                        <div className="login-ring-chart"></div>
                     </div>
                  </div>
               </div>

            </section>

         </main>

      </div>
   );
}

export default Login;
