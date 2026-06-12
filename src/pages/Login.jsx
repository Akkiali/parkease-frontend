import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { saveToken } from "../utils/auth";

function Login() {
   const navigate = useNavigate();

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
         const response = await loginUser(formData);

         saveToken(response.data.token);

         localStorage.setItem(
            "user",
            JSON.stringify({
               email: response.data.email,
               role: response.data.role,
            })
         );

         navigate("/dashboard");
      } catch (error) {
         console.log(error);
         console.log(error.response);

         alert("Login Failed");
      }
   };

   return (
      <div className="container mt-5">
         <h2>Login</h2>

         <form onSubmit={handleSubmit}>

            <input
               className="form-control mb-3"
               type="email"
               name="email"
               placeholder="Email"
               onChange={handleChange}
               required
            />

            <input
               className="form-control mb-3"
               type="password"
               name="password"
               placeholder="Password"
               onChange={handleChange}
               required
            />

            <button className="btn btn-primary">
               Login
            </button>

         </form>
      </div>
   );
}

export default Login;