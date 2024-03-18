import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {start_screen} from "@/styles/sreens/startScreen";
import LogoIcon from "@/components/icons/LogoIcon";
import FacebookLogin from "@/components/form/social/FacebookLoginButton";
import GoogleLogin from "@/components/form/social/GoogleLoginButton";
import IosLogin from "@/components/form/social/IosLoginButton";
import {socialButton} from "@/styles/components/form/social/socialButton";
import {COLOR_BLACK, COLOR_DARK_GREY, COLOR_WHITE} from "@/constants/Colors";
import ButtonPrimary from "@/components/form/ButtonPrimary";

const StartScreen = () => {

    const redirectToSignUp = () => {

    };

    const redirectToLogin = () => {

    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...start_screen.container
            }}>
                <View style={start_screen.wrapper}>
                    <View style={start_screen.gradient_wrapper}>
                        <Image style={start_screen.gradient_image} source={require('../assets/images/gradient.png')}/>
                    </View>
                    <View style={start_screen.logo_wrapper}>
                        <View style={start_screen.logo}>
                            <LogoIcon/>
                        </View>
                    </View>
                    <View style={start_screen.title_wrapper}>
                        <Text style={start_screen.title}>
                            Connect friends {'\n'}
                            <Text style={start_screen.title_bold}>
                                easily & quickly
                            </Text>
                        </Text>
                        <Text style={start_screen.description}>
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
                    <View style={start_screen.input_wrapper}>
                        <ButtonPrimary text='Sign up withn mail'
                                       onPress={redirectToSignUp}
                                       color={COLOR_BLACK}
                                       backgroundColor={COLOR_WHITE}/>
                    </View>

                    <View style={start_screen.login}>
                        <Text style={socialButton.variant_text}>Existing account?</Text>
                        <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={redirectToLogin}>
                            <Text style={start_screen.loginText}>Log in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default StartScreen;