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

            const gago = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });

            console.log(gago)
            //
            // if (type === 'success') {
            //     // Get the user's info using the token
            //     const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
            //     const userData = await response.json();
            //     console.log(userData);
            //     // You can do something with the userData, like storing it in your app's state
            // } else {
            //     setErrorMsg('Facebook login failed');
            // }
        } catch (error) {
            console.log(error)
            // setErrorMsg(error?.message??'');
        }
    };

    return (
        <TouchableOpacity style={{...socialButton.button, borderColor: color}} onPress={handleFacebookLogin}>
            <FacebookIcon/>
        </TouchableOpacity>
    );
};

export default FacebookSignInButton;
