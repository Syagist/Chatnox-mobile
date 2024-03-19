import React from 'react';
import {ScrollView, View, Text} from "react-native";
import {globalStyles} from "@/styles/globalStyles";
import {contacts} from "@/styles/sreens/contacts";
import SearchWithButtonNav from "@/navigation/SearchWithButtonNav";
import RoundedButton from "@/components/form/ui/RoundedButton";
import {COLOR_WHITE} from "@/constants/Colors";
import PhoneIcon from "@/components/icons/UserAddIcon";

const Contacts = () => {

    const loadContactsList = () => {

    };

    return (
        <ScrollView contentContainerStyle={globalStyles.scrollViewContainer}>
            <View style={{
                ...globalStyles.container,
                ...contacts.container
            }}>
                <SearchWithButtonNav
                    text={'Contacts'}
                    button={
                        <RoundedButton
                            onPress={loadContactsList}
                            icon={<PhoneIcon color={COLOR_WHITE}/>}
                        />}
                />
            </View>
        </ScrollView>
    );
};

export default Contacts;