import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth()
    const location = useLocation()
    if (loading) {
        return <div className="text-center mt-36">
            <span className="loading loading-spinner loading-lg text-blue-800"></span>
        </div>
     }
 
     if (user) {
         return children
     }
     return <Navigate state={{from:location}} replace to={'/login'}></Navigate>
 };

export default PrivateRoute;