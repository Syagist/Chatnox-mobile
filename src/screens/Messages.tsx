import React from 'react';
import {FlatList, ScrollView, TouchableOpacity, View,Text} from "react-native";
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
interface SwipableProps {
    item:any,
    handleSwipeLeft: () => void
}
const Messages = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateToSettingsPage = () => {
        navigation.navigate('MessageDetail');
    };
    const SwipeableListItem = ({ item, handleSwipeLeft }:SwipableProps) => {
        return (
            <SwipeListView
                disableRightSwipe
                renderHiddenItem={() => (
                    <TouchableOpacity onPress={handleSwipeLeft} style={{position:'absolute',right:0}}>
                        <View style={{ backgroundColor: 'green', justifyContent: 'center', alignItems: 'center', width: 75 }}>
                            <Text>Button 1</Text>
                        </View>
                    </TouchableOpacity>
                )}
                rightOpenValue={-75}
                previewRowKey={item.key}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                data={[item]}
                renderItem={({ item }) => (
                    <MessagePreviewItem messageItem={item} key={item.id}/>
                )}
            />
        );
    };
    const handleSwipeLeft = () =>{
        console.log('123')
    }
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
                        renderItem={({ item }) => <SwipeableListItem item={item} onSwipeLeft={() => handleSwipeLeft(item)} />}
                    />
                    {/*//handle also empty messageList case*/}

                    {messageData.messageList?.map((messageItem) => {
                        return <MessagePreviewItem messageItem={messageItem} key={messageItem.id}/>
                    })}
                </View>
            </View>
        </ScrollView>
    );
};

export default Messages;