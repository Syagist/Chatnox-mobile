import {StyleSheet} from "react-native";
import {COLOR_WHITE} from "@/constants/Colors";

export const forgotPassword = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOR_WHITE,
        justifyContent: 'center'
    },
    forgot_password_form: {
        paddingTop: 40,
        paddingBottom: 40
    },
    forgot_password_input_wrapepr: {
        paddingBottom: 20
    }
});