import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({user, children, redirectTo = "/home"})=>{
    if (!user) {
        return <Navigate to={redirectTo}/>
    }
    return children;
}