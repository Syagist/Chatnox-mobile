import Start from "@/screens/Start";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import ForgotPassword from "@/screens/auth/ForgotPassword";
import VerifyAccount from "@/screens/auth/VerifyAccount";
import Messages from "@/screens/Messages";
import Profile from "@/screens/Profile";
import Calls from "@/screens/Calls";
import Contacts from "@/screens/Contacts";
import Settings from "@/screens/Settings";
import MessageDetail from "@/screens/MessageDetail";

export const authRoutes = [
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
    },
]
export const routes = [
    {
        name: 'Messages',
        component: Messages
    },
    {
        name: 'Profile',
        component: Profile
    },

    {
        name: 'Calls',
        component: Calls
    },
    {
        name: 'Contacts',
        component: Contacts
    },
    {
        name: 'Settings',
        component: Settings
    }, {
        name: 'MessageDetail',
        component: MessageDetail
    }
]