import {StyleSheet} from "react-native";

export const appNavigator = StyleSheet.create({
    nav_with_back_and_search: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom: 4,
        paddingTop: 4,
        width: '100%'
    },
    logo: {
        width: 43,
        height: 26,
    },
    back_button: {
        width: 24,
        height: 24,
    },
    content: {
        flex: 1,
        fontSize: 16,
        lineHeight: 20,
        fontWeight: "500",
        textAlign: "center",
        textTransform: "uppercase"
    },

});