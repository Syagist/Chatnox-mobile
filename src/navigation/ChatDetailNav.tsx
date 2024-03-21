import React, {useEffect, useState} from 'react';
import {TouchableOpacity, View} from "react-native";
import {useNavigation, useRoute} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {appNavigator} from "@/styles/appNavigator";
import {COLOR_BLACK} from "@/constants/Colors";
import ArrowIcon from "@/components/icons/ArrowIcon";
import ChatUserImage from "@/components/chat/ChatUserImage";
import {Chat} from "@/interfaces/chat/Chat";

interface ChatDetailNav {
    chat: Chat,
    onCall: () => void
    onVideoCall: () => void
}

const ChatDetailNav = ({chat, onCall, onVideoCall}: ChatDetailNav) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <View style={appNavigator.chat_detail_nav}>
            <TouchableOpacity style={appNavigator.back_arrow_nav_btn}
                              onPress={() => navigation.goBack()}>
                <ArrowIcon color={COLOR_BLACK}/>
            </TouchableOpacity>
            <ChatUserImage chat={chat}/>
        </View>
    )
};

export default ChatDetailNav;