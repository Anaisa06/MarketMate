import AsyncStorage from "@react-native-async-storage/async-storage";
import { IItem } from "../interfaces/item";
import { itemStatus } from "../interfaces/itemStatus";

export const getItems = async (): Promise<IItem[]>  => {
    try {
        const items = await AsyncStorage.getItem('Items');
        return items != null ? JSON.parse(items) : [];
    } catch (error) {
        console.error('Error getting items', error);
        return [];
    }
}

export const saveItems = async (newItem: IItem) => {
    try {
        let items = await getItems();
        items = [
            ...items,
            newItem
        ]
        const jsonValue = JSON.stringify(items);
        await AsyncStorage.setItem('Items', jsonValue);
        return {
            statusCode: 201
        }
    } catch (error) {
        console.error('Error saving items', error);
    }
}

export const updateItem = async (updateItem: IItem) => {
    let items = await getItems();
    const filteredItems = items.filter(item => item.id != updateItem.id)
    const toSave: IItem[] = [  
        ...filteredItems,   
        {
            ...updateItem,
            status: updateItem.status === itemStatus.PENDING ? itemStatus.BOUGHT : itemStatus.PENDING
        }
    ]    
    await AsyncStorage.removeItem('Items');
    await AsyncStorage.setItem('Items', JSON.stringify(toSave))
    return {
        statusCode: 201
    }
}


