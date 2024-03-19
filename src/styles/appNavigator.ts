import {StyleSheet} from "react-native";
import {APP_LEFT_PADDING} from "@/constants/Sizes";
import {COLOR_WHITE} from "@/constants/Colors";

export const appNavigator = StyleSheet.create({
    back_arrow_nav_btn: {
        width: 48,
        position: 'absolute',
        top: 30,
        left: APP_LEFT_PADDING,
        height: 48,
        padding: 15,
        transform: [{translateX: -15}]
    },
    search_with_button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        paddingTop: 17,
        paddingBottom: 20
    },
    search_with_button_title: {
        fontSize: 20,
        lineHeight: 20,
        fontWeight: '500',
        padding: 10,
        color: COLOR_WHITE
    }
});