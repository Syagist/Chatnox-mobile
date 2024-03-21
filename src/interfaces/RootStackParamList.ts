import {Chat} from "@/interfaces/chat/Chat";

export type RootStackParamList = {
    Start: undefined;
    SignIn: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    VerifyAccount: undefined;
    Profile: { token: string };
    Chats: undefined;
    Calls: undefined;
    Contacts: undefined;
    Settings: undefined;
    ChatDetail: { chat: Chat };
};