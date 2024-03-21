import React from 'react';
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import {Text, TouchableHighlight, View} from "react-native";
import {MessageItemProps} from "@/interfaces/message/Message";
import {messagePreviewItem} from "@/styles/components/message/messagePreviewItem";
import MessageUserImage from "@/components/message/MessageUserImage";
import {user} from "@/constants/AppConstants";
import {User} from "@/interfaces/user/AuthState";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {COLOR_WHITE} from "@/constants/Colors";
import {buttonRounded} from "@/styles/components/form/ui/buttonRounded";


const MessagePreviewItem = ({messageItem}: MessageItemProps) => {
    const {messages, isGroup, groupName, unReadMessagesCount} = messageItem;
    const participants: User[] = messageItem.participants.filter(participant => participant.id !== user.id)
    const currentUser = participants[0];
    const hasMessages = messages && messages.length > 1;
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const openMessageDetail = () => {
            navigation.navigate('MessageDetail',{messageItem:messageItem})
    };

    return (
        <TouchableHighlight underlayColor={COLOR_WHITE} style={messagePreviewItem.wrapper} onPress={openMessageDetail}>
            <View style={messagePreviewItem.inner}>
                <MessageUserImage messageItem={messageItem}/>
                <View style={messagePreviewItem.message_content_box}>
                    <View style={messagePreviewItem.message_top_box}>
                        {isGroup && groupName ?
                            <Text style={messagePreviewItem.title_text} numberOfLines={1}
                                  ellipsizeMode="tail">{groupName}</Text> :
                            <Text style={messagePreviewItem.title_text} numberOfLines={1}
                                  ellipsizeMode="tail">{currentUser.name}</Text>}
                        {hasMessages &&
                            <Text style={messagePreviewItem.time}>{messages[0].time}</Text>
                        }
                    </View>
                    <View style={messagePreviewItem.message_bottom_box}>
                        {
                            hasMessages ?
                                <Text style={messagePreviewItem.text} numberOfLines={1}
                                      ellipsizeMode="tail">{messages[0]?.text}
                                </Text>
                                : <React.Fragment/>
                        }
                        {unReadMessagesCount > 0 &&
                            <View style={messagePreviewItem.unread_label}>
                                <Text
                                    style={{...messagePreviewItem.unread_label_text,
                                        fontSize: unReadMessagesCount > 9 ? 10 : messagePreviewItem.unread_label_text.fontSize,
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


export default MessagePreviewItem;