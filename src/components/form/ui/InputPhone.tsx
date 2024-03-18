import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {inputText} from "@/styles/components/form/ui/inputText";
import PhoneInput from "react-native-phone-number-input";

interface PhoneInputProps {
    label: string;
    error: any
    onChange: (value: string) => void;
}

const InputText = ({label, error, onChange}: PhoneInputProps) => {
    const phoneInput = useRef<PhoneInput>(null);

    return (
        <View style={inputText.wrapper}>
            <Text
                style={[
                    inputText.label,
                    error && inputText.error_label
                ]}>
                {label}
            </Text>
            <PhoneInput
                ref={phoneInput}
                defaultCode="AM"
                containerStyle={inputText.phone}
                textContainerStyle={inputText.phone_inner}
                onChangeFormattedText={onChange}
            />
            {error && <Text style={inputText.error_text}>{error.message}</Text>}
        </View>
    );
};

export default InputText;
