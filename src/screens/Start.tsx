import React from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {start} from "@/styles/sreens/start";
import LogoIcon from "@/components/icons/LogoIcon";
import {socialButton} from "@/styles/components/form/social/socialButton";
import {COLOR_BLACK, COLOR_DARK_GREY, COLOR_WHITE} from "@/constants/Colors";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import FacebookSignInButton from "@/components/form/social/FacebookSignInButton";
import GoogleSignInButton from "@/components/form/social/GoogleSignInButton";
import IosSignInButton from "@/components/form/social/IosSignInButton";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";

const Start = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const redirectToSignUp = () => {
        navigation.navigate('SignUp');
    };

    const redirectToSignIn = () => {
        navigation.navigate('SignIn');
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
                            Connect friends {'\n'}
                            <Text style={start.title_bold}>
                                easily & quickly
                            </Text>
                        </Text>
                        <Text style={start.description}>
                            Our chat app is the perfect way to stay connected with friends and family.
                        </Text>
                    </View>
                    <View style={socialButton.buttons_box}>
                        <FacebookSignInButton color={COLOR_DARK_GREY}/>
                        <GoogleSignInButton color={COLOR_DARK_GREY}/>
                        <IosSignInButton color={COLOR_DARK_GREY}/>
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
                            onPress={redirectToSignIn}>
                            <Text style={start.loginText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default Start;