import {StyleSheet} from "react-native";
import {COLOR_LIGHT_GREY, COLOR_PRIMARY, COLOR_TRANSPARENT} from "@/constants/Colors";

export const pinInput = StyleSheet.create({
    cell: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderBottomColor: COLOR_LIGHT_GREY,
        borderTopColor: COLOR_TRANSPARENT,
        borderLeftColor: COLOR_TRANSPARENT,
        borderRightColor: COLOR_TRANSPARENT,
    },
    focus_cell: {
        borderBottomColor: COLOR_PRIMARY,
    },
    cell_text: {
        lineHeight: 38,
        fontSize: 18,
        textAlign: 'center',
    },
    focus_cell_text: {
        color: COLOR_PRIMARY
    },
});