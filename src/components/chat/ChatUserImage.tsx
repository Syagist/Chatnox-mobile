import React from 'react';
import {user} from "@/constants/AppConstants";
import {Image, View} from "react-native";
import {chatUserImage} from "@/styles/components/chat/chatUserImage";
import {ChatProps} from "@/interfaces/chat/Chat";

const ChatUserImage = ({chat}: ChatProps) => {

    const images = chat.participants
        .filter(participant => participant.id !== user.id && participant.image)
        .slice(0, 3)
        .map(participant => participant.image);


    if (chat.isGroup) {
        return (
            <View style={chatUserImage.container}>
                <View style={chatUserImage.wrapper}>
                    <Image
                        src={images[0]}
                        style={chatUserImage.left_image}>
                    </Image>
                    <Image
                        src={images[1]}
                        style={chatUserImage.top_right_image}
                    />
                    <Image
                        src={images[2]}
                        style={chatUserImage.bottom_right_image}
                    />
                </View>
                <View style={chat.isOnline ? chatUserImage.status_dot_online : chatUserImage.status_dot_offline}></View>
            </View>)
    }
    return (
        <View style={chatUserImage.container}>
            <View style={chatUserImage.wrapper}>
                <Image style={chatUserImage.full_image} src={images[0]}/>
            </View>

            <View style={chat.isOnline ? chatUserImage.status_dot_online : chatUserImage.status_dot_offline}></View>
        </View>
    )
};


export default ChatUserImage;