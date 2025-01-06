import React, { useCallback, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Pie, PolarChart } from 'victory-native'
import { useFocusEffect } from '@react-navigation/native'
import { getItems } from '../services/itemsServices'
import { IItem } from '../interfaces/item'
import { sortCategories, sortItemsByStatus } from '../utils/sortForChart'
import PieChart from '../components/organisms/charts/PieChart'
import { ScrollView, View } from 'react-native'


const Statistics = () => {

  const [items, setItems] = useState<IItem[]>([]);
  const sortedCategories = sortCategories(items);
  const sortedStatus = sortItemsByStatus(items);

  const fetchItems = () => {
    const fetch = async () => {
      const data = await getItems();
      setItems(data);
    }
    fetch()
  }

  useFocusEffect(useCallback(fetchItems, []))

  return (
    <SafeAreaView style={{ flex: 1, padding: 15 }}>
      <ScrollView>

        <PieChart data={sortedCategories} title='Categorías' />
        <View style={{
            borderBottomColor: '#ff3131',
            borderBottomWidth: 2,
            marginVertical: 10,
        }} />
        <PieChart data={sortedStatus} title='Estado' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Statistics