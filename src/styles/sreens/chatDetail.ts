import {StyleSheet} from "react-native";
import {COLOR_DARK_BG, COLOR_WHITE} from "@/constants/Colors";

export const chatDetail = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
    },
    buttons_wrapper: {
        position: "absolute",
        height: '100%',
        right: 0
    },
    buttons_container: {
        flexDirection: 'row',
        width: 88,
        height: '100%',
        paddingTop: 10,
        flex: 1,
        justifyContent: 'space-between'
    }
});