import React from 'react';
import {TouchableOpacity} from 'react-native';
import {socialButton} from "@/styles/components/form/social/socialButton";
import GoogleIcon from "@/components/icons/GoogleIcon";
import {SocialButtonProps} from "@/interfaces/form/SocialButton";

const GoogleSignInButton = ({color}:SocialButtonProps) => {
    const handleGoogleLogin = async () => {

    };

    return (
        <TouchableOpacity style={{...socialButton.button, borderColor: color}} onPress={handleGoogleLogin}>
            <GoogleIcon/>
        </TouchableOpacity>
    );
};

export default GoogleSignInButton;
