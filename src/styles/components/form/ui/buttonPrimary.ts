import {StyleSheet} from "react-native";
import {COLOR_WHITE} from "@/constants/Colors";

export const buttonPrimary = StyleSheet.create({
    button: {
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 16,
        textAlign: "center",
        height: 48,
        justifyContent: "center"
    },

    buttonText: {
        color: COLOR_WHITE,
        textAlign: "center",
        fontSize: 16,
        fontWeight: "500"
    },
});