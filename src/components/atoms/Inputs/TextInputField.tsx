import React from 'react'
import { ControllerRenderProps, FieldError } from 'react-hook-form';
import { KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    label: string;
    value?: any;
    field: ControllerRenderProps<any>;
    error?: FieldError;
    type?: KeyboardTypeOptions | undefined;
    isPassword?: boolean;
}

const TextInputField = ({ value, label, field, error, type = 'default', isPassword = false }: Props) => {

    return (
        <View style={{ gap: 5 }}>
            <TextInput
                style={[styles.input, error ? styles.inputError : null]}
                onChangeText={field.onChange}
                value={value ? value : field.value}
                placeholder={label}
                keyboardType={type}
                placeholderTextColor='#646464'
                secureTextEntry={isPassword}
            />
            {
                error &&
                <Text style={styles.errorText}>
                    {error.message}
                </Text>
            }
        </View>
    );
}

export default TextInputField

const styles = StyleSheet.create({
    input: {
        height: 60,
        width: 250,
        margin: 'auto',
        padding: 15,
        borderRadius: 8,
        backgroundColor: '#ebebeb',
        color: '#646464',
        fontSize: 14,
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 10,
        textAlign: 'center',
        letterSpacing: 1,
    }
});