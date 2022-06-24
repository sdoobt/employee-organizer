import { Navigate, Outlet } from "react-router-dom";


export const ProtectedRoute = () => {

    let token = localStorage.getItem('token');
    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return (

        <Outlet />

    );
};