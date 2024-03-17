import {StyleSheet} from "react-native";
import {COLOR_WHITE} from "@/constants/Colors";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";

export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 24,
        paddingLeft: APP_LEFT_PADDING,
        paddingRight: APP_RIGHT_PADDING,
        height: '100%',
        backgroundColor: COLOR_WHITE,
    },
    app_navigation: {

    },
    app_navigation_label: {
        textAlign: "center",
        fontSize: 10,
        lineHeight: 12,
        fontWeight: "400",
        textTransform: 'capitalize'
    },
    scrollViewContainer: {},

});