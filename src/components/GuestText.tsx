import React from 'react';
import {Text, View} from "react-native";
import {guestText} from "@/styles/components/guestText";

interface GuestText {
    title: string,
    text: string
}

const GuestText = ({title, text}: GuestText) => {
    return (
        <View style={guestText.wrapper}>
            <View style={guestText.title}>
                <View style={guestText.title_color_box}></View>
                <Text style={guestText.title_text}>{title}</Text>
            </View>
            <Text style={guestText.text}>
                {text}
            </Text>
        </View>

    );
};

export default GuestText;