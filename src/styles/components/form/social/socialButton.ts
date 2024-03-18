import {StyleSheet} from "react-native";
import {COLOR_LIGHT_GREY, COLOR_TRANSPARENT} from "@/constants/Colors";

export const socialButton = StyleSheet.create({
    buttons_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%'
    },
    button: {
        backgroundColor: COLOR_TRANSPARENT,
        padding: 10,
        borderRadius: 50,
        borderWidth: 1,
        marginLeft: 10,
        marginRight: 10,
        height: 48,
        width: 48,
    },
    variant_box: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 30,
        paddingBottom: 30
    },
    variant_line: {
        flex: 1,
        height: 1,
        opacity: 0.2,
        backgroundColor: COLOR_LIGHT_GREY,
    },
    variant_text: {
        color: COLOR_LIGHT_GREY,
        fontSize: 14,
        lineHeight: 18,
        paddingLeft: 7,
        paddingRight: 7
    }
});