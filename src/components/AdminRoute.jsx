import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
   const user = JSON.parse(
      localStorage.getItem("user")
   );

   if (!user || user.role !== "ROLE_ADMIN") {
      return <Navigate to="/locations" />;
   }

   return children;
}

export default AdminRoute;