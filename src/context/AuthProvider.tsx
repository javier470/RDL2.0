import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, authInterface } from "../interfaces/auth.interface";
import { jwtDecode } from "jwt-decode";

export const AuthContext = createContext<AuthContextType | any>(undefined);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
};

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [authState, setAuthState] = useState<authInterface>({
        isAuthenticated: false,
        token: null,
        role: null,
        accessibleRoutes: []
    });

    useEffect(() => {
        const token = localStorage.getItem("token");
        const role = localStorage.getItem("role");
        const paths = localStorage.getItem("routes");

        if (token && role) {
            setAuthState({
                isAuthenticated: true,
                token,
                role,
                accessibleRoutes: paths ? JSON.parse(paths) : []
            });
        }
    }, []);

    const login = (token: string, userData: authInterface) => {
        const decodedToken: any = jwtDecode(token);
        const user = {
            userName:
                decodedToken[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
                ],
            name: decodedToken.name,
            uid: decodedToken.uid,
            token: token,
            country: decodedToken.country,
            mail: decodedToken[
                "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
            ],
            role: decodedToken[
                "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
            ],
        };
        console.log(user)

        localStorage.setItem("uid", user.uid);
        localStorage.setItem("name", user.name);
        localStorage.setItem("role", user.role);

        localStorage.setItem("token", token);
        localStorage.setItem("routes", JSON.stringify(userData.accessibleRoutes || []));

        setAuthState({
            isAuthenticated: true,
            token,
            role: userData.role,
            accessibleRoutes: userData.accessibleRoutes || []
        });

    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("routes");

        setAuthState({
            isAuthenticated: false,
            token: null,
            role: null,
            accessibleRoutes: []
        });
    };

    return (
        <AuthContext.Provider value={{ authState, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
