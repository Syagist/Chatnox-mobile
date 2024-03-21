import React from 'react';
import {FlatList, ScrollView, TouchableOpacity, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {chats} from "@/styles/sreens/chats";
import SearchWithButtonNav from "@/navigation/SearchWithButtonNav";
import RoundedButton from "@/components/form/ui/RoundedButton";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {chatData, user} from "@/constants/AppConstants";
import ChatPreviewItem from "@/components/chat/ChatPreviewItem";
import {SwipeListView} from "react-native-swipe-list-view";
import {COLOR_LIGHT_BLACK, COLOR_RED_ALERT, COLOR_WHITE} from "@/constants/Colors";
import DeleteIcon from "@/components/icons/DeleteIcon";
import NotificationIcon from "@/components/icons/NotificationIcon";
import {Chat} from "@/interfaces/chat/Chat";

interface SwipeableProps {
    item: any,
    handleSwipeLeft: () => void
}

const Chats = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateToSettingsPage = () => {
        // navigation.navigate('ChatDetail');
    };

    const handleNotificationSettings = (item: Chat) => {
        console.log(item)

    };

    const handleSwipeLeft = (item: Chat) => {
        console.log('123')
    }

    const handleDeleteChat = (item: Chat) => {
        console.log(item)
    };

    const SwipeableListItem = ({item, handleSwipeLeft}: SwipeableProps) => {
        return (
            <SwipeListView
                disableRightSwipe
                renderHiddenItem={() => (
                    <TouchableOpacity onPress={handleSwipeLeft} style={chats.buttons_wrapper}>
                        <View style={chats.buttons_container}>

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
                                    handleDeleteChat(item)
                                }}/>

                        </View>
                    </TouchableOpacity>
                )}
                rightOpenValue={-104}
                previewRowKey={item.key}
                data={[item]}
                renderItem={({item}) => (
                    <ChatPreviewItem chat={item} key={item.id}/>
                )}
            />
        );
    };


    return (
        <View style={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...chats.container
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
                        data={chatData.chatList}
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
        </View>
    );
};

export default Chats;