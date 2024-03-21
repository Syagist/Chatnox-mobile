import React from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {appNavigator} from "@/styles/appNavigator";
import {COLOR_BLACK, COLOR_WHITE} from "@/constants/Colors";
import SearchIcon from "@/components/icons/SearchIcon";
import RoundedButton from "@/components/form/ui/RoundedButton";
import {User} from "@/interfaces/user/AuthState";
import ArrowIcon from "@/components/icons/ArrowIcon";
import MessageUserImage from "@/components/message/MessageUserImage";
import {MessageItem} from "@/interfaces/message/Message";

interface MessageDetailNav {
    messageItem: MessageItem,
    onCall: () => void
    onVideoCall: () => void
}

const MessageDetailNav = ({messageItem, onCall,onVideoCall}: MessageDetailNav) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    console.log(messageItem)

    return (
        <View style={appNavigator.message_detail_nav}>
            <TouchableOpacity style={appNavigator.back_arrow_nav_btn}
                              onPress={() => navigation.goBack()}>
                <ArrowIcon color={COLOR_BLACK}/>
            </TouchableOpacity>
            <MessageUserImage messageItem={messageItem}/>


        </View>
    )
};

export default MessageDetailNav;