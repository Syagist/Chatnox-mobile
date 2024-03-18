import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {inputText} from "@/styles/components/form/inputText";
import {COLOR_BLACK} from "@/constants/Colors";
import ShowIcon from "@/components/icons/ShowIcon";
import HideIcon from "@/components/icons/HideIcon";

interface TextInputProps {
    label: string;
    type: string;
    error: any
    onChange: (value: string) => void;
    onBlur: () => void;
}

const InputText = ({label, type, error, onChange, onBlur}: TextInputProps) => {
    const [currentType, setCurrentType] = useState(type)
    const togglePassword = () => {
        currentType === "password" ? setCurrentType('text') : setCurrentType('password')
    };
    const getPasswordIcons = () => {
        return type === "password" ?
            <TouchableOpacity style={inputText.pass_button} onPress={togglePassword}>
                {currentType === "password" ? (
                    <ShowIcon color={COLOR_BLACK}/>
                ) : (
                    <HideIcon color={COLOR_BLACK}/>
                )}
            </TouchableOpacity>
            :
            <View></View>
    };

    return (
        <View style={inputText.wrapper}>
            <Text
                style={[
                    inputText.label,
                    error && inputText.error_label
                ]}>
                {label}
            </Text>
            <TextInput secureTextEntry={currentType === 'password'}
                       style={[
                           inputText.input,
                           error && inputText.error_input
                       ]}
                       onBlur={onBlur}
                       onChangeText={onChange}/>
            {getPasswordIcons()}
            {error && <Text style={inputText.error_text}>{error.message}</Text>}
        </View>
    );
};

export default InputText;
