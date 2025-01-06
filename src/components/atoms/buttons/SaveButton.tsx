import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface Props {
    text: string;
    handleSubmit: () => void;
    backgroundColor?: string;
}

const SaveButton = ({ handleSubmit, text, backgroundColor }: Props) => {
  return (
    <TouchableOpacity style={styles.button} onPress={handleSubmit} activeOpacity={0.8}>
    <Text style={styles.buttonText}>{text}</Text>
</TouchableOpacity>
  )
}

export default SaveButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff3131',
        width: '45%',
        height: 55,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
        alignSelf: 'center',
    },
    buttonText: {
        color: '#ebebeb',
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});