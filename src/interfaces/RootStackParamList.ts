import {MessageItem} from "@/interfaces/message/Message";

export type RootStackParamList = {
    Start: undefined;
    SignIn: undefined;
    SignUp: undefined;
    ForgotPassword: undefined;
    VerifyAccount: undefined;
    Profile: { token: string };
    Messages: undefined;
    Calls: undefined;
    Contacts: undefined;
    Settings: undefined;
    MessageDetail: { messageItem: MessageItem };
};