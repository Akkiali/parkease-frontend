import { useState } from "react";
import { registerUser } from "../services/authService";
import { useNavigate } from "react-router-dom";

function Register() {

   const navigate = useNavigate();

   const [formData, setFormData] = useState({
      fullName: "",
      email: "",
      mobile: "",
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

         await registerUser(formData);

         alert("Registration Successful");

         navigate("/login");

      } catch (error) {

         alert("Registration Failed");

      }
   };

   return (
      <div className="container mt-5">

         <h2>Register</h2>

         <form onSubmit={handleSubmit}>

            <input
               className="form-control mb-3"
               name="fullName"
               placeholder="Full Name"
               onChange={handleChange}
               required
            />

            <input
               className="form-control mb-3"
               name="email"
               type="email"
               placeholder="Email"
               onChange={handleChange}
               required
            />

            <input
               className="form-control mb-3"
               name="mobile"
               placeholder="Mobile"
               onChange={handleChange}
               required
            />

            <input
               className="form-control mb-3"
               name="password"
               type="password"
               placeholder="Password"
               onChange={handleChange}
               required
            />

            <button className="btn btn-success">
               Register
            </button>

         </form>

      </div>
   );
}

export default Register;