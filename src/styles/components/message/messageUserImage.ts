import {StyleSheet} from "react-native";
import {COLOR_DARK_GREY, COLOR_GREEN, COLOR_RED, COLOR_WHITE} from "@/constants/Colors";

export const messageUserImage = StyleSheet.create({
    container: {
        width: 56,
        height: 56,
        padding: 4,
        marginRight:8
    },
    wrapper: {
        borderRadius: 100,
        width: '100%',
        height: '100%',
        overflow: "hidden",
        position: "relative",
        backgroundColor: COLOR_WHITE
    },
    full_image: {
        height: '100%',
        width: '100%',
    },
    left_image: {
        height: '100%',
        width: '50%',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    top_right_image: {
        position: 'absolute',
        height: '50%',
        width: '50%',
        top: 0,
        right: -1,
    },
    bottom_right_image: {
        position: 'absolute',
        height: '50%',
        width: '50%',
        bottom: -1,
        right: -1,
    },

    status_dot_offline: {
        width: 8,
        height: 8,
        position: 'absolute',
        right: 7,
        bottom: 7,
        borderRadius: 10,
        backgroundColor: COLOR_DARK_GREY
    },
    status_dot_online: {
        width: 8,
        height: 8,
        position: 'absolute',
        right: 7,
        bottom: 7,
        borderRadius: 10,
        backgroundColor: COLOR_GREEN
    }
});