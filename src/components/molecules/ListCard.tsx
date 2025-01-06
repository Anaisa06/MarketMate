import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Checkbox } from 'react-native-paper'
import { itemStatus } from '../../interfaces/itemStatus';
import { IItem } from '../../interfaces/item';
import { updateItem } from '../../services/itemsServices';

interface IProps {
    item: IItem;
    reRender: () => void;
}

const ListCard = ({ item, reRender }: IProps) => {

    const handlePress = async() => {
        await updateItem(item);
        reRender();
    }

    return (
        <View style={styles.mainContainer} >
            <View style={styles.leftContainer}>
                <Checkbox onPress={handlePress} status={item.status === 'Comprado' ? 'checked' : 'unchecked' } color='#ff3131' />
                <Text style={item.status === itemStatus.BOUGHT ? styles.nameTextBought : styles.nameTextPending}>
                    {item.name}
                </Text>
            </View>
            <Text style={styles.statusText}>
                {item.status}
            </Text>
        </View>
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
        // borderColor: '#ff3131',
        // borderWidth: 2
    },
    leftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
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
    }
})

export default ListCard