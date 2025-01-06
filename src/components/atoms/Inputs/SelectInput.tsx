import { Picker } from '@react-native-picker/picker';
import React from 'react'
import { FieldError } from 'react-hook-form';
import { View, Text, StyleSheet } from 'react-native';

interface IProps {
    items: {
        name: string;
        id: any;
    }[];
    onChange: any
    value: any;
    error?: FieldError;
    label: string;
}

const SelectInput = ({ items, onChange, value, error, label }: IProps) => {

  return (
    <View style={{gap: 5}}>
            <View style={styles.container} >
                <Picker
                    dropdownIconColor={'#646464'}
                    selectionColor={'#ff3131'}
                    style={styles.pickerContainer}

                    selectedValue={value}
                    onValueChange={onChange}>

                    <Picker.Item label={label} enabled={false} value={''} style={styles.item} />

                    {
                        items.map(item =>
                            <Picker.Item label={item.name} value={item.id} key={item.id} style={styles.item} />
                        )
                    }

                </Picker>
            </View>
            {
                error &&
                <Text style={styles.errorText}>
                    {error.message}
                </Text>
            }

        </View>
  )
}

export default SelectInput

const styles = StyleSheet.create({

    container: {
        height: 60,
        width: 250,
        margin: 'auto',
        padding: 5,
        borderRadius: 8,
        backgroundColor: '#ebebeb',
        color: '#646464',
        justifyContent: 'center',
    },
    pickerContainer: {
        color: '#646464',
        padding: 10,
        fontWeight: 'bold'
    },
    item: {
        color: '#646464',
        backgroundColor: '#ebebeb' ,
        fontSize: 14,
        borderRadius: 8,
        fontWeight: 'bold'
    },
    inputError: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 10,
        textAlign: 'center',
        letterSpacing: 1,
    },
});