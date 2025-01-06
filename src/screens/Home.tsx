import React, { useEffect, useState } from 'react'
import { SectionList, StyleSheet, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ListCard from '../components/molecules/ListCard'
import { itemStatus } from '../interfaces/itemStatus'
import { IItem } from '../interfaces/item'
import AddItemBtn from '../components/atoms/AddItemBtn'
import CustomModal from '../components/molecules/CustomModal'
import AddItemForm from '../components/organisms/forms/AddItemForm'
import { getItems } from '../services/itemsServices'
import { useNavigation } from '@react-navigation/native'
import { HomeNavigationProp, HomeRouteParams } from '../navigation/navigationTypes'
import { groupItems } from '../utils/groupItems'

interface IProps {
    route: HomeRouteParams
}

const Home = ({ route }: IProps) => {

    const [items, setItems] = useState<IItem[]>([])

    const navigation = useNavigation<HomeNavigationProp>();
     
    const reRender = () => { 
        navigation.setParams({reRender: !route.params.reRender}) 
    } 

    useEffect(() => {
        const fetchItems = async() => {
            const data = await getItems()
            setItems(data);            
        }
        fetchItems()
    }, [route.params.reRender])

    const [openModal, setOpenModal] = useState(false);

    const itemsForList = groupItems(items)

    return (
        <SafeAreaView style={{flex: 1}} >
            <SectionList
                sections={itemsForList}
                style={{ marginVertical: 10 }}
                keyExtractor={(item) => item.id.toString()}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={styles.header} >{title}</Text>
                )}
                renderItem={({ item }) => (
                    <ListCard item={item} reRender={reRender} />
                )}
            />
            <AddItemBtn onPress={() => setOpenModal(true)}/>
            <CustomModal openModal={openModal} onClose={() => setOpenModal(false)}>
                <AddItemForm reRender={reRender} onClose={() => setOpenModal(false)} />
            </CustomModal> 
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        color: '#ff3131',
        fontWeight: 'bold',
        textAlign: 'left',
        marginVertical: 8,
        marginHorizontal: 25,
        fontSize: 20
    }
})

export default Home