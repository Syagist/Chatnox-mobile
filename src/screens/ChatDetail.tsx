import React from 'react';
import {ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {Route, useNavigation, useRoute} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {chatDetail} from "@/styles/sreens/chatDetail";
import ChatDetailNav from "@/navigation/ChatDetailNav";
import {Chat} from "@/interfaces/chat/Chat";


const ChatDetail = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const route = useRoute<Route<"ChatDetail", { chat: Chat }>>();
    const chat = route.params?.chat;

    const navigateToSettingsPage = () => {
    };


    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...chatDetail.container
            }}>
                <ChatDetailNav chat={chat}
                                  onCall={() => {
                                  }}
                                  onVideoCall={() => {
                                  }}/>
            </View>
        </ScrollView>
    );
};

export default ChatDetail;