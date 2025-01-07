import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-paper'

interface IProps {
    onPress: () => void;
}

const AddItemBtn = ({onPress}: IProps) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} activeOpacity={0.6} onPress={onPress}>
        <Icon source='cart-plus' size={45} color='#ebebeb' />
    </TouchableOpacity>
  )
}

export default AddItemBtn

const styles = StyleSheet.create ({
    buttonContainer: {
        borderRadius: 50,
        height: 70,
        width: 70,
        overflow: 'hidden',
        backgroundColor: '#ff3131',
        position: 'absolute',
        bottom: '5%',
        right: '5%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',      

    }
})