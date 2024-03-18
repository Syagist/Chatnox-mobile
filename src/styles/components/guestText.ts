import {StyleSheet} from "react-native";
import {COLOR_BLACK, COLOR_DARKER_GREY, TURQUOISE} from "@/constants/Colors";

export const guestText = StyleSheet.create({
    wrapper: {
        width: '100%',
        alignItems: 'center',
        marginTop: 60,
        marginBottom: 30
    },
    title: {

        marginBottom: 16,
        position: 'relative'
    },
    title_text: {
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
        color: COLOR_BLACK,
        fontWeight: '700',
    },
    title_color_box: {
        backgroundColor: TURQUOISE,
        width: 56,
        height: 8,
        position: "absolute",
        left: 0,
        bottom: 0,
        zIndex: -1
    },
    text: {
        width: '80%',
        fontSize: 14,
        lineHeight: 20,
        textAlign: 'center',
        color: COLOR_DARKER_GREY,
        fontWeight: '500'
    }
});