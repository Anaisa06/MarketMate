import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextInputField from '../../atoms/Inputs/TextInputField'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import SelectInput from '../../atoms/Inputs/SelectInput';
import { Category } from '../../../interfaces/category';
import SaveButton from '../../atoms/buttons/SaveButton';
import { IItem } from '../../../interfaces/item';
import { itemStatus } from '../../../interfaces/itemStatus';
import { saveItems } from '../../../services/itemsServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IFormInput {
    name: string;
    category: Category;
}

interface IProps {
    reRender: () => void;
    onClose: () => void;
}

const AddItemForm = ({ reRender, onClose }: IProps) => {
    const { control, handleSubmit, formState: { errors },
} = useForm<IFormInput>();

const itemsForSelect = [
    {name: Category.DAIRY, id:  Category.DAIRY},
    {name: Category.FRUITS, id: Category.FRUITS},
    {name: Category.GRAINS, id:  Category.GRAINS},
    {name: Category.OTHER, id: Category.OTHER},
    {name: Category.PROTEINS, id: Category.PROTEINS},
    {name: Category.VEGETABLES, id: Category.VEGETABLES}
]

const submit: SubmitHandler<IFormInput> = async (data) => {
    const toSave: IItem = {
        ...data,
        status: itemStatus.PENDING,
        id: Math.floor(Math.random() * 1000)
    }
    const response = await saveItems(toSave);
    reRender();
    onClose();
}

  return (
      <View style={styles.container} >
        <Text style={styles.title} >Nuevo producto</Text>
        <Controller
                control={control}
                name="category"
                rules={{
                    required: 'La categoría es requerida',
                }}
                render={({ field }) => (
                    <SelectInput items={itemsForSelect} onChange={field.onChange} value={field.value}  error={errors.category} label="Categoría" />
                )}
        />
        <Controller
                control={control}
                name="name"
                rules={{
                    required: 'La categoría es requerida',
                }}
                render={({ field }) => (
                    <TextInputField field={field} error={errors.name} label="Nombre" />
                )}
        />
        <SaveButton text='Guardar' handleSubmit={handleSubmit(submit)} />

    </View>
  )
}

export default AddItemForm

const styles = StyleSheet.create({
    title: {
        color: '#ff3131',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    container: {
        gap: 15,
        alignItems: 'center'
    }
})