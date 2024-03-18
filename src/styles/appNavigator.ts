import {StyleSheet} from "react-native";
import {APP_LEFT_PADDING} from "@/constants/Sizes";

export const appNavigator = StyleSheet.create({
    back_arrow_nav_btn: {
        width:48,
        position:'absolute',
        top:30,
        left:APP_LEFT_PADDING,
        height:48,
        padding:15,
        transform: [{ translateX: -15 }]
    }

});