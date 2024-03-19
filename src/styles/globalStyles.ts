import {StyleSheet} from "react-native";
import {COLOR_WHITE} from "@/constants/Colors";
import {APP_LEFT_PADDING, APP_RIGHT_PADDING} from "@/constants/Sizes";

export const globalStyles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingBottom: 24,
        paddingLeft: APP_LEFT_PADDING,
        paddingRight: APP_RIGHT_PADDING,
        backgroundColor: COLOR_WHITE,
        flex: 1
    },
    wrapper: {},
    app_navigation: {},
    app_navigation_label: {
        textAlign: "center",
        fontSize: 10,
        lineHeight: 12,
        fontWeight: "400",
        textTransform: 'capitalize'
    },
    scrollViewContainer: {
        minHeight: '100%'
    },
    card_background: {
        flex:1,
        backgroundColor: COLOR_WHITE,
        paddingVertical: 40,
        paddingHorizontal: 24,
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        marginLeft: APP_LEFT_PADDING * -1,
        marginRight: APP_RIGHT_PADDING * -1
    }

});