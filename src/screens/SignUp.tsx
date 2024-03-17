import React, {useState} from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import ButtonPrimary from "@/components/form/ButtonPrimary";
import {globalStyles} from "@/styles/globalStyles";
import InputText from "@/components/form/InputText";
import {sign_up} from "@/styles/sreens/signUp";
import LogoIcon from "@/components/icons/LogoIcon";
import {useAppDispatch} from "@/store/store";
import {useLoader} from "@/context/LoaderProvider";
import FacebookLogin from "@/components/form/social/FacebookLoginButton";

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();
    const {showLoader, hideLoader} = useLoader();

    const handleLogin = async () => {
        try {
            showLoader();
            hideLoader();
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...sign_up.container
            }}>
                <View style={sign_up.wrapper}>
                    <View style={sign_up.gradient_wrapper}>
                        <Image style={sign_up.gradient_image} source={require('../assets/images/gradient.png')}/>
                    </View>

                    <View style={sign_up.logo_wrapper}>
                        <View style={sign_up.logo}>
                            <LogoIcon/>
                        </View>
                    </View>
                    <FacebookLogin/>

                    <View style={sign_up.title_wrapper}>
                        <Text style={sign_up.title}>
                            Connect friends {'\n'}
                            <Text style={sign_up.title_bold}>
                                easily & quickly
                            </Text>
                        </Text>
                        <Text style={sign_up.description}>
                            Our chat app is the perfect way to stay connected with friends and family.
                        </Text>
                    </View>
                    <View style={sign_up.input_wrapper}>
                        <View style={sign_up.input_wrapper}>
                            <InputText
                                label='Username  (kminchelle)'
                                type='text'
                                required={true}
                                onChange={(value) => setUserName(value)}/>
                        </View>
                        <View style={sign_up.input_wrapper}>
                            <InputText
                                label='Password (0lelplR)'
                                type='password'
                                required={true}
                                onChange={(value) => setPassword(value)}
                            />
                        </View>
                    </View>

                    <View style={sign_up.input_wrapper}>
                        <ButtonPrimary text='SignUp' onPress={handleLogin}/>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default SignUp;