import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import * as Facebook from 'expo-facebook';
import FacebookIcon from "@/components/icons/FacebookIcon";
import {socialButton} from "@/styles/components/form/social/socialButton";
import {SocialButtonProps} from "@/interfaces/form/SocialButton";


const FacebookSignInButton = ({color}: SocialButtonProps) => {
    const [errorMsg, setErrorMsg] = useState<string | null>(null);

    const handleFacebookLogin = async () => {
        try {
            await Facebook.initializeAsync({
                appId: '1458808944719881',
            });

            const logInWithReadPermissionsAsync = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'phone'],
            });

            //
            // if (type === 'success') {
            //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            //     const userData = await response.json();
            //     console.log(userData);
            // } else {
            //     setErrorMsg('Facebook login failed');
            // }
        } catch (error) {
            console.log(error)
            // setErrorMsg(error?.chat??'');
        }
    };

    return (
        <TouchableOpacity style={{...socialButton.button, borderColor: color}} onPress={handleFacebookLogin}>
            <FacebookIcon/>
        </TouchableOpacity>
    );
};

export default FacebookSignInButton;
