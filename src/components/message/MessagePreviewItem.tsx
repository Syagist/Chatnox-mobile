import React from 'react';
import {MessageItemProps} from "@/interfaces/message/Message";
import {Text, TouchableHighlight, View} from "react-native";
import {messagePreviewItem} from "@/styles/components/message/messagePreviewItem";
import MessageUserImage from "@/components/message/MessageUserImage";
import {user} from "@/constants/AppConstants";
import {User} from "@/interfaces/user/AuthState";


const MessagePreviewItem = ({messageItem}: MessageItemProps) => {
    const {messages, isGroup, groupName} = messageItem;
    const participants: User[] = messageItem.participants.filter(participant => participant.id !== user.id)
    const currentUser = participants[0];

    return (
        <TouchableHighlight style={messagePreviewItem.wrapper}>
            <View>
                <MessageUserImage messageItem={messageItem}/>
                {isGroup && groupName ? <Text>{groupName}</Text> : <Text>{currentUser.name}</Text>}
                {
                    messages && messages.length > 1 ?
                        <Text>{messages[0]?.text}</Text>
                        : <View></View>
                }
            </View>
        </TouchableHighlight>
    );
};


export default MessagePreviewItem;