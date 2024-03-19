import React from 'react';
import {user} from "@/constants/AppConstants";
import {MessageItemProps} from "@/interfaces/message/Message";
import {Image, View} from "react-native";
import {messageUserImage} from "@/styles/components/message/messageUserImage";

const MessageUserImage = ({messageItem}: MessageItemProps) => {

    const images = messageItem.participants
        .filter(participant => participant.id !== user.id && participant.image)
        .slice(0, 3)
        .map(participant => participant.image);


    if (messageItem.isGroup) {
        return (
            <View style={messageUserImage.container}>
                <View style={messageUserImage.wrapper}>
                    <Image
                        src={images[0]}
                        style={messageUserImage.left_image}>
                    </Image>
                    <Image
                        src={images[1]}
                        style={messageUserImage.top_right_image}
                    />
                    <Image
                        src={images[2]}
                        style={messageUserImage.bottom_right_image}
                    />
                </View>
                <View style={messageItem.isOnline ? messageUserImage.status_dot_online : messageUserImage.status_dot_offline}></View>
            </View>)
    }
    return (
        <View style={messageUserImage.container}>
            <View style={messageUserImage.wrapper}>
                <Image style={messageUserImage.full_image} src={images[0]}/>
            </View>

            <View style={messageItem.isOnline ? messageUserImage.status_dot_online : messageUserImage.status_dot_offline}></View>
        </View>
    )
};


export default MessageUserImage;