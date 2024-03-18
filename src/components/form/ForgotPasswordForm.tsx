import React from 'react';
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {View} from "react-native";
import InputText from "@/components/form/ui/InputText";
import * as yup from "yup";
import ButtonPrimary from "@/components/form/ui/ButtonPrimary";
import {forgotPassword} from "@/styles/sreens/auth/forgotPassword";
import {UserForgotPasswordRequest} from "@/interfaces/user/AuthState";

interface ForgotPasswordFromProps {
    onForgotPasswordSubmit: (userForgotPasswordRequest: UserForgotPasswordRequest) => void
}

const ForgotPasswordForm = ({onForgotPasswordSubmit}: ForgotPasswordFromProps) => {

    const schema = yup.object().shape({
        phone: yup.string()
            .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
            .required('Phone is required'),
    });

    const {control, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    });

    const onSubmit = (data: UserForgotPasswordRequest) => {
        onForgotPasswordSubmit(data)
    };

    return (
        <View style={forgotPassword.forgot_password_form}>

            <View style={forgotPassword.forgot_password_input_wrapepr}>
                <Controller
                    control={control}
                    render={({field: {onChange, onBlur}}) => (
                        <InputText label={'Your phone'}
                                   type={'phone'}
                                   error={errors.phone}
                                   onBlur={onBlur}
                                   onChange={onChange}/>
                    )}
                    name="phone"
                    defaultValue=""
                />
            </View>
            <ButtonPrimary text='Submit'
                           onPress={handleSubmit(onSubmit)}/>
        </View>
    );
};


export default ForgotPasswordForm;