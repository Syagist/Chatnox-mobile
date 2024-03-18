export interface AuthState {
    isAuthenticated: boolean;
    userData: User | null
}

export interface User {
    id: number;
    name: string;
    phone: string;
    gender: string;
    image: string;
    token?: string;
    contacts?: Array<User>
}

export interface UserForgotPasswordRequest {
    phone: string;
}

export interface UserSignInRequest {
    phone: string;
    password: string;
}

export interface UserSignUpRequest {
    name: string;
    phone: string;
    password: string;
}