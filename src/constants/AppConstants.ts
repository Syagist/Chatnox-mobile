import Start from "@/screens/Start";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import ForgotPassword from "@/screens/auth/ForgotPassword";
import VerifyAccount from "@/screens/auth/VerifyAccount";

export const BASE_API_URL =  'http://localhost:5000/';
export const AUTH_API =  `${BASE_API_URL}auth/login`;
export const CHECK_AUTH_API =  `${BASE_API_URL}auth/me`;

export
const routes = [
    {
        name: 'Start',
        component: Start
    },
    {
        name: 'SignIn',
        component: SignIn
    },
    {
        name: 'SignUp',
        component: SignUp
    },
    {
        name: 'ForgotPassword',
        component: ForgotPassword
    },
    {
        name: 'VerifyAccount',
        component: VerifyAccount
    }
]

