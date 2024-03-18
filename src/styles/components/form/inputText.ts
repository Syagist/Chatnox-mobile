import {StyleSheet} from "react-native";
import {COLOR_LIGHT_GREY, COLOR_PRIMARY, COLOR_RED, COLOR_WHITE} from "@/constants/Colors";

export const inputText = StyleSheet.create({
    wrapper: {
        marginBottom: 30
    },
    label: {
        fontSize: 14,
        lineHeight: 16,
        marginBottom: 10,
        fontWeight: "500",
        color: COLOR_PRIMARY,
        textTransform: "capitalize"
    },
    error_label: {
        color: COLOR_RED,
    },

    input: {
        backgroundColor: COLOR_WHITE,
        padding: 16,
        borderColor: COLOR_LIGHT_GREY,
        borderBottomWidth: 1
    },

    error_input: {
        borderColor: COLOR_RED,
    },

    pass_button: {
        position: 'absolute',
        right: 0,
        bottom: 20,
        width: 20,
        height: 20
    },
    error_text: {
        position: 'absolute',
        right: 0,
        bottom: -20,
        fontSize: 12,
        textAlign: 'right',
        width: '100%',
        color: COLOR_RED
    }
});