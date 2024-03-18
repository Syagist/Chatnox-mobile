export interface AuthState {
    isAuthenticated: boolean;
    userData: User | null
}

export interface User {
    id: number;
    username: string;
    phone: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
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