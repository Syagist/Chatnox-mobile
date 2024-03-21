import Start from "@/screens/Start";
import SignIn from "@/screens/auth/SignIn";
import SignUp from "@/screens/auth/SignUp";
import ForgotPassword from "@/screens/auth/ForgotPassword";
import VerifyAccount from "@/screens/auth/VerifyAccount";
import Chats from "@/screens/Chats";
import Profile from "@/screens/Profile";
import Calls from "@/screens/Calls";
import Contacts from "@/screens/Contacts";
import Settings from "@/screens/Settings";
import ChatDetail from "@/screens/ChatDetail";

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
        name: 'Messsages',
        component: Chats
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
        name: 'ChatDetail',
        component: ChatDetail
    }
]