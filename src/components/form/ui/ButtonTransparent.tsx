import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {buttonTransparent} from "@/styles/components/form/ui/buttonTransparent";
import {COLOR_PRIMARY} from "@/constants/Colors";

interface ButtonTransparentProps {
    text: string;
    color?: string,
    onPress: () => void
}

const ButtonTransparent = ({
                               text,
                               color = COLOR_PRIMARY,
                               onPress
                           }: ButtonTransparentProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={buttonTransparent.button} onPress={onPress}>
            <Text style={{...buttonTransparent.buttonText, color: color}}>{text}</Text>
        </TouchableOpacity>
    );
};


export default ButtonTransparent;
