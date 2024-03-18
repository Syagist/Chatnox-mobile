import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell} from "react-native-confirmation-code-field";
import {pinInput} from "@/styles/components/form/ui/pinInput";

interface PinInputProps {
    cellCount?: number,
    onFinish: (pinCode: string) => void
}

const PinInput = ({cellCount = 6, onFinish}: PinInputProps) => {
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: cellCount});
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });


    return (
        <CodeField
            ref={ref}
            {...props}
            value={value}
            onChangeText={setValue}
            cellCount={cellCount}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            onEndEditing={() => {
                onFinish(value)
            }}
            renderCell={({index, symbol, isFocused}) => (
                <View
                    key={index}
                    style={[pinInput.cell, isFocused && pinInput.focus_cell]}
                    onLayout={getCellOnLayoutHandler(index)}>
                    <Text
                        style={[pinInput.cell_text, isFocused && pinInput.focus_cell_text]}>{symbol || (isFocused ?
                        <Cursor/> : null)}</Text>
                </View>
            )}
        />
    );
};

export default PinInput;
