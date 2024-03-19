import {StyleSheet} from "react-native";
import {COLOR_LIGHT_BLACK} from "@/constants/Colors";

export const buttonRounded = StyleSheet.create({
    button: {
        height: 44,
        width: 44,
        justifyContent: "center"
    },
    icon_box: {
        width: '100%',
        height: '100%',
        padding: 12,
        borderRadius: 50,
        borderColor: COLOR_LIGHT_BLACK,
        borderWidth: 1,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 50
    }
});