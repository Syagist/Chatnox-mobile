import {User} from "@/interfaces/user/AuthState";

export interface MessageList {
    id: number
    messageList?: Array<MessageItem>
}

export interface MessageItem {
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

export interface MessageItemProps {
    messageItem: MessageItem;
}