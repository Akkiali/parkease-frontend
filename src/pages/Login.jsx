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
