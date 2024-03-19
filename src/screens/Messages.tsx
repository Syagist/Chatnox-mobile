import React from 'react';
import {ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {messages} from "@/styles/sreens/messages";
import SearchWithButtonNav from "@/navigation/SearchWithButtonNav";
import RoundedButton from "@/components/form/ui/RoundedButton";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {user} from "@/constants/AppConstants";

const Messages = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateToSettingsPage = () => {
        navigation.navigate('MessageDetail');
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
            </View>
        </ScrollView>
    );
};

export default Messages;