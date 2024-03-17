import {StyleSheet} from "react-native";
import {COLOR_GREY, COLOR_PRIMARY, COLOR_WHITE} from "@/constants/Colors";

export const sign_up = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_PRIMARY,
        position: 'relative'
    },
    gradient_wrapper: {
        position: "absolute",
        top: "-25%",
        left: "-25%",
        width: '150%',
        height: '150%',
        objectFit:'cover'
    },
    gradient_image: {
        width: "100%",
        height: "100%"
    },
    wrapper: {},
    title_wrapper: {},
    title: {
        fontSize: 68,
        lineHeight: 78,
        color: COLOR_WHITE,
        flexWrap:'wrap'
    },
    title_bold: {
        fontWeight: '600'
    },
    description: {
        fontSize: 16,
        lineHeight: 26,
        color: COLOR_GREY,
        paddingTop: 16
    },
    bolder: {},
    input_wrapper: {},
    logo_wrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        paddingTop: 18,
        paddingBottom: 44
    },
    logo: {

        width: 150,
        height: 20,
    },
});