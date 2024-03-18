import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import FacebookLogin from "@/components/form/social/FacebookSignInButton";
import GoogleLogin from "@/components/form/social/GoogleSignInButton";
import IosLogin from "@/components/form/social/IosSignInButton";
import {socialButton} from "@/styles/components/form/social/socialButton";
import {COLOR_BLACK} from "@/constants/Colors";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import {signIn} from "@/styles/sreens/signIn";
import BackArrowNav from "@/navigation/BackArrowNav";
import GuestText from "@/components/GuestText";

const SignIn = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const redirectToSignUp = () => {

    };

    const redirectToLogin = () => {
        navigation.navigate('SignIn');
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...signIn.container
            }}>
                <BackArrowNav/>
                <GuestText
                    title={'Log in to Chatbox'}
                    text={'Welcome back! Sign in using your social account or email to continue us'}/>
                <View style={signIn.wrapper}>
                    <View style={socialButton.buttons_box}>
                        <FacebookLogin color={COLOR_BLACK}/>
                        <GoogleLogin color={COLOR_BLACK}/>
                        <IosLogin color={COLOR_BLACK}/>
                    </View>
                </View>
                <View style={socialButton.variant_box}>
                    <View style={socialButton.variant_line}></View>
                    <Text style={socialButton.variant_text}>OR</Text>
                    <View style={socialButton.variant_line}></View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignIn;