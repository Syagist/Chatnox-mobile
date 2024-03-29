import {StyleSheet} from "react-native";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";
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
    },
    chat_detail_nav: {
        backgroundColor:COLOR_WHITE,
        marginLeft:APP_LEFT_PADDING * -1,
        marginRight:APP_RIGHT_PADDING * -1
    },
    chat_detail_nav_back_button: {}
});

export const bottomNavigator = StyleSheet.create({
    navigator_wrapper: {},

    navigator_item: {
        height: 90,
        paddingTop: 10,
    },
    navigator_icon: {
        width: 22,
        height: 22,
    },
    navigator_text: {
        width: '100%',
        fontSize: 14,
        paddingTop: 5,
        textAlign: 'center',
    },
})