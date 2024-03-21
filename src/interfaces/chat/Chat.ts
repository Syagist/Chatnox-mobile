import {User} from "@/interfaces/user/AuthState";

export interface ChatList {
    id: number
    chatList?: Array<Chat>
}

export interface Chat {
    id: number
    isGroup?: boolean,
    groupName?: string,
    isOnline: boolean,
    unReadMessagesCount: number
    participants: Array<User>
    messages?: Array<Message>
}

export interface Message {
    text: string,
    time: string,
    isUnset?: boolean
}

export interface ChatProps {
    chat: Chat;
}