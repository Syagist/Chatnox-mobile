import React from 'react';
import {ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import BackArrowNav from "@/navigation/BackArrowNav";
import GuestText from "@/components/GuestText";
import {forgotPassword} from "@/styles/sreens/auth/forgotPassword";

const VerifyAccount = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...forgotPassword.container
            }}>
                <BackArrowNav/>
                <GuestText
                    title={'Verify Account'}
                    text={'To Verify Account fill code we sent to your email'}/>
            </View>
        </ScrollView>
    );
};

export default VerifyAccount;