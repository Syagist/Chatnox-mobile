export interface AuthState {
    isAuthenticated: boolean;
    userData: User | null
}

export interface User {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
    token: string;
}
export interface UserSignInRequest {
    email: string;
    password: string;
}

export interface UserSignUpRequest {
    name: string;
    email: string;
    password: string;
}