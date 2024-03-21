import React from 'react';
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import {Text, TouchableHighlight, View} from "react-native";
import {ChatProps} from "@/interfaces/chat/Chat";
import {chatPreviewItem} from "@/styles/components/chat/chatPreviewItem";
import {user} from "@/constants/AppConstants";
import {User} from "@/interfaces/user/AuthState";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {COLOR_WHITE} from "@/constants/Colors";
import ChatUserImage from "@/components/chat/ChatUserImage";


const ChatPreviewItem = ({chat}: ChatProps) => {
    const {messages, isGroup, groupName, unReadMessagesCount} = chat;
    const participants: User[] = chat.participants.filter(participant => participant.id !== user.id)
    const currentUser = participants[0];
    const hasMessages = messages && messages.length > 1;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const openChatDetail = () => {
        navigation.navigate('ChatDetail', {chat: chat})
    };

    return (
        <TouchableHighlight underlayColor={COLOR_WHITE} style={chatPreviewItem.wrapper} onPress={openChatDetail}>
            <View style={chatPreviewItem.inner}>
                <ChatUserImage chat={chat}/>
                <View style={chatPreviewItem.chat_content_box}>
                    <View style={chatPreviewItem.chat_top_box}>
                        {isGroup && groupName ?
                            <Text style={chatPreviewItem.title_text} numberOfLines={1}
                                  ellipsizeMode="tail">{groupName}</Text> :
                            <Text style={chatPreviewItem.title_text} numberOfLines={1}
                                  ellipsizeMode="tail">{currentUser.name}</Text>}
                        {hasMessages &&
                            <Text style={chatPreviewItem.time}>{messages[0].time}</Text>
                        }
                    </View>
                    <View style={chatPreviewItem.chat_bottom_box}>
                        {
                            hasMessages ?
                                <Text style={chatPreviewItem.text} numberOfLines={1}
                                      ellipsizeMode="tail">{messages[0]?.text}
                                </Text>
                                : <React.Fragment/>
                        }
                        {unReadMessagesCount > 0 &&
                            <View style={chatPreviewItem.unread_label}>
                                <Text
                                    style={{
                                        ...chatPreviewItem.unread_label_text,
                                        fontSize: unReadMessagesCount > 9 ? 10 : chatPreviewItem.unread_label_text.fontSize,
                                        paddingLeft: unReadMessagesCount > 9 ? 3 : 0,
                                    }}>{unReadMessagesCount > 9 ? '9+' : unReadMessagesCount}</Text>
                            </View>
                        }
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};


export default ChatPreviewItem;