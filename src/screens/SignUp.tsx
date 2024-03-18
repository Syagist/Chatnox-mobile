import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {start} from "@/styles/sreens/start";
import LogoIcon from "@/components/icons/LogoIcon";
import FacebookLogin from "@/components/form/social/FacebookSignInButton";
import GoogleLogin from "@/components/form/social/GoogleSignInButton";
import IosLogin from "@/components/form/social/IosSignInButton";
import {socialButton} from "@/styles/components/form/social/socialButton";
import {COLOR_BLACK, COLOR_DARK_GREY, COLOR_WHITE} from "@/constants/Colors";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {StackNavigationProp} from "@react-navigation/stack";
import {useNavigation} from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const redirectToSignUp = () => {

    };

    const redirectToLogin = () => {
    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...start.container
            }}>
                <View style={start.wrapper}>
                    <View style={start.gradient_wrapper}>
                        <Image style={start.gradient_image} source={require('../assets/images/gradient.png')}/>
                    </View>
                    <View style={start.logo_wrapper}>
                        <View style={start.logo}>
                            <LogoIcon/>
                        </View>
                    </View>
                    <View style={start.title_wrapper}>
                        <Text style={start.title}>
                            Sign Up {'\n'}
                            <Text style={start.title_bold}>
                                easily & quickly
                            </Text>
                        </Text>
                        <Text style={start.description}>
                            Our chat app is the perfect way to stay connected with friends and family.
                        </Text>
                    </View>
                    <View style={socialButton.buttons_box}>
                        <FacebookLogin color={COLOR_DARK_GREY}/>
                        <GoogleLogin color={COLOR_DARK_GREY}/>
                        <IosLogin color={COLOR_DARK_GREY}/>
                    </View>
                    <View style={socialButton.variant_box}>
                        <View style={socialButton.variant_line}></View>
                        <Text style={socialButton.variant_text}>OR</Text>
                        <View style={socialButton.variant_line}></View>
                    </View>
                    <View style={start.input_wrapper}>
                        <ButtonPrimary text='Sign up withn mail'
                                       onPress={redirectToSignUp}
                                       color={COLOR_BLACK}
                                       backgroundColor={COLOR_WHITE}/>
                    </View>

                    <View style={start.login}>
                        <Text style={socialButton.variant_text}>Existing account?</Text>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={redirectToLogin}>
                            <Text style={start.loginText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;