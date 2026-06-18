import { useState } from "react";
import axios from "axios";
import "../styles/forgot-password.css";
import { useNavigate } from "react-router-dom";


function ForgotPassword() {

   const [email, setEmail] =
      useState("");

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const handleSubmit =
      async (e) => {

         e.preventDefault();

         setLoading(true);

         try {

            await axios.post(
               `http://localhost:8080/api/auth/forgot-password?email=${email}`
            );

            alert(
               "Reset link sent to your email."
            );
            navigate("/login");
         } catch (error) {
            console.error(error);
            alert(
               "Failed to send reset link. Please try again."
            );
         } finally {
            setLoading(false);
         }
      };

   return (

      <div className="forgot-page">
         <div className="forgot-card">

            <h2 className="forgot-title">
               Forgot Password
            </h2>

            <p className="forgot-subtitle">
               Enter your registered email address to receive a password reset link.
            </p>

            <form
               onSubmit={handleSubmit}
               className="forgot-form"
            >
               <input
                  className="forgot-input"
                  type="email"
                  placeholder="Enter Email"
                  value={email}
                  onChange={(e) =>
                     setEmail(e.target.value)
                  }
               />

               <button
                  className="forgot-btn"
                  type="submit"
               >
                  {loading
                     ? "Sending..."
                     : "Send Password Reset Link"}

               </button>
            </form>

         </div>
      </div>
   );
}

export default ForgotPassword;