import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonPrimary} from "@/styles/components/form/buttonPrimary";
import {BUTTON_COLOR_PRIMARY, COLOR_WHITE} from "@/constants/Colors";

interface ButtonPrimaryProps {
    text: string;
    backgroundColor?: string,
    color?: string,
    onPress: () => void
}

const ButtonPrimary = ({
                           text,
                           backgroundColor = BUTTON_COLOR_PRIMARY,
                           color = COLOR_WHITE,
                           onPress
                       }: ButtonPrimaryProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={{...buttonPrimary.button, backgroundColor: backgroundColor}} onPress={onPress}>
            <Text style={{...buttonPrimary.buttonText, color: color}}>{text}</Text>
        </TouchableOpacity>
    );
};


export default ButtonPrimary;
