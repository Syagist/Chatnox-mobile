import React from 'react';
import {Image, ScrollView, View, Text} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {calls} from "@/styles/sreens/calls";
import SearchWithButtonNav from "@/navigation/SearchWithButtonNav";
import RoundedButton from "@/components/form/ui/RoundedButton";
import {COLOR_WHITE} from "@/constants/Colors";
import CallUserIcon from "@/components/icons/CallUserIcon";

const Calls = () => {


    const openKeyboard = () => {

    };
    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...calls.container
            }}>
                <SearchWithButtonNav
                    text={'Calls'}
                    button={
                        <RoundedButton
                            onPress={openKeyboard}
                            icon={<CallUserIcon color={COLOR_WHITE}/>}
                        />}
                />
            </View>
        </ScrollView>
    );
};

export default Calls;