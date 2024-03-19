import React from 'react';
import {Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "@/interfaces/RootStackParamList";
import {appNavigator} from "@/styles/appNavigator";
import {COLOR_WHITE} from "@/constants/Colors";
import SearchIcon from "@/components/icons/SearchIcon";
import RoundedButton from "@/components/form/ui/RoundedButton";

interface SearchWithButtonNav {
    text: string,
    button: React.ReactNode
}

const SearchWithButtonNav = ({text, button}: SearchWithButtonNav) => {
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    const navigateToSearchPage = () => {
        // navigation.navigate('Search')
    }

    return (
        <View style={appNavigator.search_with_button}>
            <RoundedButton
                icon={<SearchIcon color={COLOR_WHITE}/>}
                onPress={navigateToSearchPage}/>
            <Text style={appNavigator.search_with_button_title}>{text}</Text>
            {button}
        </View>
    )
};

export default SearchWithButtonNav;