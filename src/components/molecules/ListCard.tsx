import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Checkbox, Icon, IconButton } from 'react-native-paper'
import { itemStatus } from '../../interfaces/itemStatus';
import { IItem } from '../../interfaces/item';
import { deleteItem, checkItem } from '../../services/itemsServices';
import CustomModal from './CustomModal';
import AddItemBtn from '../atoms/AddItemBtn';
import AddItemForm from '../organisms/forms/AddItemForm';
import { set } from 'react-hook-form';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {
    item: IItem;
    reRender: () => void;
}

const ListCard = ({ item, reRender }: IProps) => {

    const [showIcons, setShowIcons] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handlePress = async () => {
        await checkItem(item);
        reRender();
    }

    const handleLongPress = () => {
        setShowIcons(true)
    }

    const handleDelete = async () => {
        await deleteItem(item);
        reRender();
    }

    const handleUpdate = () => {
        setOpenModal(true)
    }

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.9} style={styles.mainContainer} onLongPress={handleLongPress} >
            <View style={styles.leftContainer} >
                <Checkbox onPress={handlePress} status={item.status === 'Comprado' ? 'checked' : 'unchecked'} color='#ff3131' />
                <Text style={item.status === itemStatus.BOUGHT ? styles.nameTextBought : styles.nameTextPending}>
                    {item.name}
                    <Text style={item.status === itemStatus.BOUGHT ? styles.quantityTextBought : styles.quantityTextPending}>
                    {`    ${item.quantity}`}
                </Text>
                </Text>

            </View>
            {
                showIcons ?
                    <View style={[styles.iconsContainer]}>
                        <IconButton onPress={handleUpdate} icon={'pen'} size={25} iconColor='#ff3131' style={{backgroundColor:'#d9d8d8'}} />
                        <IconButton onPress={handleDelete} icon={'trash-can'} size={25} iconColor='#ff3131' style={{ backgroundColor:'#d9d8d8'}} />
                        <IconButton icon={'close'} size={15} iconColor='#646464' onPress={() => setShowIcons(false)} style={{padding: 0}} />
                    </View> :
                    <Text style={styles.statusText}>
                        {item.status}
                    </Text>
            }
            <CustomModal onClose={() => setOpenModal(false)} openModal={openModal} >
                <AddItemForm item={item} reRender={reRender} onClose={() => setOpenModal(false)}/>
            </CustomModal>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ebebeb',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        borderRadius: 8,
        marginVertical: 3,
        marginHorizontal: 10,
        elevation: 1
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    nameTextBought: {
        color: '#646464',
        fontWeight: 'bold',
        textDecorationLine: 'line-through'
    },
    nameTextPending: {
        color: '#646464',
        fontWeight: 'bold',
    },
    statusText: {
        color: '#646464',
        fontWeight: 'bold',
    },
    quantityTextPending: {
        color: '#64646493',
        fontWeight: 'normal',
        fontStyle: 'italic',
        marginLeft: 10
    },
    quantityTextBought: {
        color: '#64646493',
        fontWeight: 'normal',
        fontStyle: 'italic',
        textDecorationLine: 'line-through'
    }
})

export default ListCard