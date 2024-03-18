import React, {useState} from 'react';
import {ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import BackArrowNav from "@/navigation/BackArrowNav";
import GuestText from "@/components/GuestText";
import {verifyAccount} from "@/styles/sreens/auth/verifyAccount";
import PinInput from "@/components/form/ui/PinInput";
import ButtonTransparent from "@/components/form/ui/ButtonTransparent";

const VerifyAccount = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
    const [code, setCode] = useState();

    const checkCode = (value: any) => {
        if (code === '222222') {
            // navigation.navigate('Profile')
        } else {
            //error code is incorrect
        }
    }

    const resendCode = () => {

    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...verifyAccount.container
            }}>
                <BackArrowNav/>
                <GuestText
                    title={'Verify Account'}
                    text={'To Verify Account fill code we sent to your phone'}/>
                <View style={verifyAccount.pin_wrapper}>
                    <PinInput onFinish={checkCode}/>
                </View>
                <ButtonTransparent text='Resend Code?'
                                   onPress={resendCode}/>
            </View>
        </ScrollView>
    );
};

export default VerifyAccount;