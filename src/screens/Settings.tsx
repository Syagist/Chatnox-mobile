import React from 'react';
import {Image, ScrollView, View, Text} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {settiings} from "@/styles/sreens/settiings";

const Settings = () => {


    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...settiings.container
            }}>
             <Text>Contacts</Text>
            </View>
        </ScrollView>
    );
};

export default Settings;