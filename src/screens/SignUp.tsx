import React from 'react';
import {ScrollView, Text, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";
import FacebookSignIn from "@/components/form/social/FacebookSignInButton";
import GoogleSignIn from "@/components/form/social/GoogleSignInButton";
import IosSignIn from "@/components/form/social/IosSignInButton";
import {socialButton} from "@/styles/components/form/social/socialButton";
import {COLOR_BLACK} from "@/constants/Colors";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {signIn} from "@/styles/sreens/signIn";
import BackArrowNav from "@/navigation/BackArrowNav";
import GuestText from "@/components/GuestText";
import SignUpForm from "@/components/form/SignUpForm";
import {UserSignUpRequest} from "@/interfaces/user/AuthState";

const SignUp = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const sendSignUpRequest = (userSignUpRequest: UserSignUpRequest) => {
        console.log(userSignUpRequest)
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...signIn.container
            }}>
                <BackArrowNav/>
                <GuestText
                    title={'Sign Up to Chatbox'}
                    text={'Create Account and chat with your friends and family'}/>
                <View style={signIn.wrapper}>
                    <View style={socialButton.buttons_box}>
                        <FacebookSignIn color={COLOR_BLACK}/>
                        <GoogleSignIn color={COLOR_BLACK}/>
                        <IosSignIn color={COLOR_BLACK}/>
                    </View>
                </View>
                <View style={socialButton.variant_box}>
                    <View style={socialButton.variant_line}></View>
                    <Text style={socialButton.variant_text}>OR</Text>
                    <View style={socialButton.variant_line}></View>
                </View>

                <SignUpForm onSignUpSubmit={sendSignUpRequest}/>
            </View>
        </ScrollView>
    );
};

export default SignUp;