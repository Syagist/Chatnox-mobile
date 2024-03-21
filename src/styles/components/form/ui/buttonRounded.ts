import {StyleSheet} from "react-native";
import {COLOR_LIGHT_BLACK, COLOR_TRANSPARENT} from "@/constants/Colors";

export const buttonRounded = StyleSheet.create({
    button: {
        height: 44,
        width: 44,
        position: 'relative',
        justifyContent: "center",
        alignContent: 'center',
        borderRadius: 50,
        borderColor: COLOR_LIGHT_BLACK,
        backgroundColor: COLOR_TRANSPARENT,
        borderWidth: 1,
    },
    icon_box: {
        width: 24,
        height: 24,
        alignSelf: 'center'
    },
    image: {
        width: '100%',
        height: '100%',

        borderRadius: 50
    }
});