import React from 'react';
import {ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {messages} from "@/styles/sreens/messages";
import {Route, useNavigation, useRoute} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import MessageDetailNav from "@/navigation/MessageDetailNav";
import {MessageItem} from "@/interfaces/message/Message";


const MessageDetail = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const route = useRoute<Route<"MessageDetail", { messageItem: MessageItem }>>();
    const messageItem = route.params?.messageItem;

    console.log(messageItem)
    const navigateToSettingsPage = () => {
    };
    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...messages.container
            }}>
                <MessageDetailNav messageItem={messageItem}
                                  onCall={() => {
                                  }}
                                  onVideoCall={() => {
                                  }}/>
            </View>
        </ScrollView>
    );
};

export default MessageDetail;