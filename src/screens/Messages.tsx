import React from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {messages} from "@/styles/sreens/messages";
import SearchWithButtonNav from "@/navigation/SearchWithButtonNav";
import RoundedButton from "@/components/form/ui/RoundedButton";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {messageData, user} from "@/constants/AppConstants";
import MessagePreviewItem from "@/components/message/MessagePreviewItem";
import {SwipeListView} from "react-native-swipe-list-view";
import {COLOR_LIGHT_BLACK, COLOR_RED_ALERT, COLOR_WHITE} from "@/constants/Colors";
import DeleteIcon from "@/components/icons/DeleteIcon";
import NotificationIcon from "@/components/icons/NotificationIcon";
import {MessageItem} from "@/interfaces/message/Message";

interface SwipeableProps {
    item: any,
    handleSwipeLeft: () => void
}

const Messages = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateToSettingsPage = () => {
        navigation.navigate('MessageDetail');
    };

    const handleNotificationSettings = (item: MessageItem) => {
        console.log(item)
    };

    const handleSwipeLeft = (item: MessageItem) => {
        console.log('123')
    }

    const handleDeleteMessage = (item: MessageItem) => {
        console.log(item)
    };

    const SwipeableListItem = ({item, handleSwipeLeft}: SwipeableProps) => {
        return (
            <SwipeListView
                disableRightSwipe
                renderHiddenItem={() => (
                    <TouchableOpacity onPress={handleSwipeLeft} style={messages.buttons_wrapper}>
                        <View style={messages.buttons_container}>

                            <RoundedButton
                                icon={<NotificationIcon color={COLOR_WHITE}/>}
                                width={36}
                                height={36}
                                backgroundColor={COLOR_LIGHT_BLACK}
                                borderColor={COLOR_LIGHT_BLACK}
                                onPress={() => {
                                    handleNotificationSettings(item)
                                }}/>
                            <RoundedButton
                                icon={<DeleteIcon color={COLOR_WHITE}/>}
                                width={36}
                                height={36}
                                backgroundColor={COLOR_RED_ALERT}
                                borderColor={COLOR_RED_ALERT}
                                onPress={() => {
                                    handleDeleteMessage(item)
                                }}/>

                        </View>
                    </TouchableOpacity>
                )}
                rightOpenValue={-104}
                previewRowKey={item.key}
                data={[item]}
                renderItem={({item}) => (
                    <MessagePreviewItem messageItem={item} key={item.id}/>
                )}
            />
        );
    };


    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...messages.container
            }}>
                <SearchWithButtonNav
                    text={'Home'}
                    button={
                        <RoundedButton
                            onPress={navigateToSettingsPage}
                            image={user.image}
                        />}
                />
                <View style={globalStyles.card_background}>
                    <FlatList
                        data={messageData.messageList}
                        keyExtractor={(item) => String(item.id)}
                        renderItem={({item}) => {
                            return (
                                <SwipeableListItem
                                    item={item}
                                    handleSwipeLeft={() => handleSwipeLeft(item)}/>
                            )
                        }
                        }/>
                </View>
            </View>
        </ScrollView>
    );
};

export default Messages;