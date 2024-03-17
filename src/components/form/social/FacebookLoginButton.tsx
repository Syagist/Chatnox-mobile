    import React, { useState } from 'react';
    import {View, Button, Text, Alert, TouchableOpacity} from 'react-native';
    import * as Facebook from 'expo-facebook';
    import { ResponseType } from 'expo-auth-session';
    import {buttonPrimary} from "@/styles/components/form/buttonPrimary";

    const FacebookLogin: React.FC = () => {
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
            <TouchableOpacity style={buttonPrimary.button}  onPress={handleFacebookLogin}>
                <Text style={buttonPrimary.buttonText}>Login with Facebook</Text>
            </TouchableOpacity>
        );
    };

    export default FacebookLogin;
