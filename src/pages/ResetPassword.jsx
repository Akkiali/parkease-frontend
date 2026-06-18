import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import "../styles/reset-password.css";
import { useNavigate } from "react-router-dom";

function ResetPassword() {

   const [password,
      setPassword] =
      useState("");

   const [searchParams] =
      useSearchParams();

   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const token =
      searchParams.get("token");

   const handleSubmit =
      async (e) => {

         e.preventDefault();

         setLoading(true);

         try {
            await axios.post(
               `http://localhost:8080/api/auth/reset-password?token=${token}&password=${password}`
            );

            alert(
               "Password Updated"
            );
            navigate("/login");
         } catch (error) {
            console.error(error);
            alert(
               "Failed to update password. Please try again."
            );
         } finally {
            setLoading(false);
         }
      };

   return (
      <div className="reset-page">
         <div className="reset-card">

            <h2 className="reset-title">
               Reset Password
            </h2>

            <p className="reset-subtitle">
               Create your new password.
            </p>

            <form
               onSubmit={handleSubmit}
               className="reset-form"
            >
               <input
                  className="reset-input"
                  type="password"
                  placeholder="New Password"
                  value={password}
                  onChange={(e) =>
                     setPassword(
                        e.target.value
                     )
                  }
               />

               <button
                  className="reset-btn"
                  type="submit"
               >
                  {loading
                     ? "Resetting..."
                     : "Update Password"}
               </button>
            </form>

         </div>
      </div>
   );
}

export default ResetPassword;