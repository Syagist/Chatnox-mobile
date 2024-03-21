import {StyleSheet} from "react-native";
import {COLOR_DARKER_GREY, COLOR_LIGHT_BLACK, COLOR_RED, COLOR_RED_ALERT, COLOR_WHITE} from "@/constants/Colors";

export const chatPreviewItem = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: COLOR_WHITE,
        marginBottom: 30
    },
    inner: {
        width: '100%',
        alignContent:'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    chat_content_box: {
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
    },
    chat_top_box: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    chat_bottom_box: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title_text: {
        fontSize: 20,
        lineHeight: 20,
        color: COLOR_LIGHT_BLACK,
        fontWeight: '700',
        paddingRight: 20
    },
    time: {
        fontSize: 12,
        lineHeight: 12,
        width: '20%',
        textAlign: 'right',
        color: COLOR_DARKER_GREY,
        fontWeight: '400',
    },
    unread_label: {
        width: 22,
        height: 22,
        borderRadius: 20,
        color: COLOR_WHITE,
        backgroundColor: COLOR_RED_ALERT,
        alignItems: "center",
        justifyContent: "center",
        marginTop:7
    },
    unread_label_text: {
        fontSize: 14,
        lineHeight: 16,
        color: COLOR_WHITE,
        fontWeight: '400',
    },
    text: {
        fontSize: 12,
        lineHeight: 16,
        color: COLOR_DARKER_GREY,
        fontWeight: '500',
        flex: 1,
        paddingTop:10,
        paddingRight: 20
    }
});