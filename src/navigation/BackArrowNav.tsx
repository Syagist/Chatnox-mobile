import React from 'react';
import {TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {appNavigator} from "@/styles/appNavigator";
import ArrowIcon from "@/components/icons/ArrowIcon";
import {COLOR_BLACK} from "@/constants/Colors";

const BackArrowNav = () => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    return (
        <TouchableOpacity style={appNavigator.back_arrow_nav_btn} onPress={() => navigation.goBack()}>
            <ArrowIcon color={COLOR_BLACK}/>
        </TouchableOpacity>
    );
};

export default BackArrowNav;