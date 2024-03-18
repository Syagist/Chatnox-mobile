    import React from 'react';
    import {TouchableOpacity} from 'react-native';
    import {socialButton} from "@/styles/components/form/social/socialButton";
    import IosIcon from "@/components/icons/IosIcon";
    import {SocialButtonProps} from "@/interfaces/form/SocialButton";
    import {COLOR_BLACK, COLOR_DARK_GREY, COLOR_WHITE} from "@/constants/Colors";

    const IosSignInButton = ({color}:SocialButtonProps) => {
        const handleIosLogin = async () => {
           
        };

        return (
            <TouchableOpacity style={{...socialButton.button, borderColor: color}}  onPress={handleIosLogin}>
                {color === COLOR_DARK_GREY ? <IosIcon color={COLOR_WHITE}/> : <IosIcon color={COLOR_BLACK}/>}
            </TouchableOpacity>
        );
    };

    export default IosSignInButton;
