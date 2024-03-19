import Start from "@/screens/Start";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import ForgotPassword from "@/screens/auth/ForgotPassword";
import VerifyAccount from "@/screens/auth/VerifyAccount";
import Profile from "@/screens/Profile";
import Messages from "@/screens/Messages";
import Calls from "@/screens/Calls";
import Contacts from "@/screens/Contacts";
import Settings from "@/screens/Settings";
import MessageDetail from "@/screens/MessageDetail";
import {User} from "@/interfaces/user/AuthState";

export const BASE_API_URL =  'http://localhost:5000/';
export const AUTH_API =  `${BASE_API_URL}auth/login`;
export const CHECK_AUTH_API =  `${BASE_API_URL}auth/me`;



// test data
export
const user: User = {
    id: 1,
    name: 'Samvel',
    phone: '+37498942042',
    gender: 'male',
    image: 'https://picsum.photos/200/300',
    token: '',
    contacts: [
        {
            id: 2,
            name: 'Adil Adnan',
            phone: '+37498272721',
            gender: 'male',
            image: 'https://picsum.photos/200/300',
        },
        {
            id: 3,
            name: 'Bristy Haque',
            phone: '+37498272929',
            gender: 'male',
            image: 'https://picsum.photos/333/300',
        }
    ]
}
