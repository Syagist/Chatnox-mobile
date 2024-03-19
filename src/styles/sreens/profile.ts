import {StyleSheet} from "react-native";
import {COLOR_DARK_BG, COLOR_WHITE} from "@/constants/Colors";

export const profile = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_DARK_BG,
        position: 'relative'
    },
    wrapper:{
        backgroundColor:COLOR_WHITE,
    },
    img:{
        backgroundColor:COLOR_WHITE,
        width:100,
        height:100
    }
});