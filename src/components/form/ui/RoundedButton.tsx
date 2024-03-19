import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {buttonRounded} from "@/styles/components/form/ui/buttonRounded";

interface ButtonPrimaryProps {
    icon?: React.ReactNode,
    image?: string
    onPress: () => void
}

const RoundedButton = ({icon, image, onPress}: ButtonPrimaryProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={buttonRounded.button} onPress={onPress}>
            {
                icon ? <View style={buttonRounded.icon_box}>{icon}</View>
                    :  <View><Image style={buttonRounded.image} src={image}/></View>
            }

        </TouchableOpacity>
    );
};


export default RoundedButton;
