import { useAuth } from "../context/AuthProvider";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/login/Login";
import HomePage from "../pages/home/Home";
import NotFoundPage from "../pages/404/NotFound";

const RoutesComponent = () => {
    const { authState } = useAuth();

    return (
        <Routes>
            <>
                {!authState.isAuthenticated ? (
                    <>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Navigate to="/dashboard" />} />
                        <Route path="/dashboard" element={<HomePage />} />
                        <Route path="*" element={<Navigate to="/dashboard" />} />
                    </>
                )}
            </>
        </Routes>
    );
};

export default RoutesComponent;
