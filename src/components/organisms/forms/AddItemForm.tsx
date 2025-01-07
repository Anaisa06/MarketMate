import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TextInputField from '../../atoms/Inputs/TextInputField'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import SelectInput from '../../atoms/Inputs/SelectInput';
import { Category } from '../../../interfaces/category';
import SaveButton from '../../atoms/buttons/SaveButton';
import { IItem } from '../../../interfaces/item';
import { itemStatus } from '../../../interfaces/itemStatus';
import { saveItems, updateItem } from '../../../services/itemsServices';

interface IFormInput {
    name: string;
    category: Category;
    quantity: string;
}

interface IProps {
    reRender: () => void;
    onClose: () => void;
    item?: IItem;
}

const AddItemForm = ({ reRender, onClose, item }: IProps) => {
    const { control, handleSubmit, formState: { errors },
    } = useForm<IFormInput>();

    const itemsForSelect = [
        { name: Category.DAIRY, id: Category.DAIRY },
        { name: Category.FRUITS, id: Category.FRUITS },
        { name: Category.GRAINS, id: Category.GRAINS },
        { name: Category.OTHER, id: Category.OTHER },
        { name: Category.PROTEINS, id: Category.PROTEINS },
        { name: Category.VEGETABLES, id: Category.VEGETABLES }
    ]

    const submit: SubmitHandler<IFormInput> = async (data) => {

        if (item) {
            const toUpdate: IItem = {
                ...data,
                status: item.status,
                id: item.id
            };
            await updateItem(toUpdate)
        } else {
            const toSave: IItem = {
                ...data,
                status: itemStatus.PENDING,
                id: Math.floor(Math.random() * 1000)
            }
            await saveItems(toSave);
        }
        reRender();
        onClose();
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title} >{item ? 'Actualizar producto' : 'Nuevo producto'}</Text>
            <Controller
                defaultValue={item ? item.category as Category : undefined}
                control={control}
                name="category"
                rules={{
                    required: 'La categoría es requerida',
                }}
                render={({ field }) => (
                    <SelectInput items={itemsForSelect} onChange={field.onChange} value={field.value} error={errors.category} label={"Categoría"} />
                )}
            />
            <Controller
                defaultValue={item ? item.name : ''}
                control={control}
                name="name"
                rules={{
                    required: 'El nombre es requerida',
                }}
                render={({ field }) => (
                    
                    <TextInputField field={field} error={errors.name} label={"Nombre"} />
                )}
            />
                <Controller
                    defaultValue={item ? item.quantity : ''}
                    control={control}
                    name="quantity"
                    rules={{
                        required: 'La cantidad es requerida',
                    }}
                    render={({ field }) => (
    
                        <TextInputField field={field} error={errors.quantity} label={"Cantidad"} />
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