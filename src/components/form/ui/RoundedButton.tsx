import React from 'react';
import {Image, TouchableOpacity, View, ViewStyle} from 'react-native';
import {buttonRounded} from "@/styles/components/form/ui/buttonRounded";

interface ButtonRoundedProps {
    icon?: React.ReactNode,
    image?: string
    width?: number,
    height?: number,
    backgroundColor?: string,
    borderColor?: string,
    onPress: () => void
}

const RoundedButton = ({icon, image, width, height, backgroundColor, borderColor, onPress}: ButtonRoundedProps) => {

    const buttonStyle: ViewStyle = {
        ...buttonRounded.button,
        width: width || buttonRounded.button.width,
        height: height || buttonRounded.button.height,
        backgroundColor: backgroundColor || buttonRounded.button.backgroundColor,
        borderColor: borderColor || buttonRounded.button.borderColor,
    };
    return (
        <TouchableOpacity
            activeOpacity={0.9}
            style={buttonStyle} onPress={onPress}>
            {
                icon ? <View style={{
                        ...buttonRounded.icon_box,
                        width: width !== undefined ? (width / 2) : buttonRounded.icon_box.width,
                        height: height !== undefined ? (height / 2) : buttonRounded.icon_box.height,
                    }}>{icon}</View>
                    : <View><Image style={buttonRounded.image} src={image}/></View>
            }

        </TouchableOpacity>
    );
};


export default RoundedButton;
