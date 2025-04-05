export interface loginResponse {
    token: string,
    user: userInfoInterface
}

export interface userInfoInterface {
    id: string,
    role: string,
    routes: string[]
}

export interface authInterface {
    isAuthenticated: boolean,
    token?: string | null,
    role?: string | null,
    accessibleRoutes?: []
}

export interface AuthContextType {
    authState: any;
    login: any;
    logout: () => void;
}

export interface ILoginForm {
    username: string;
    password: string;
}

export interface ISignInRes {
    expiration: string;
    token: string;
}