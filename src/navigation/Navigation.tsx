import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import TabNavigator from './TabNavigator'

const Navigation = () => {
  return (
    <NavigationContainer>
        <TabNavigator/>
    </NavigationContainer>
  )
}

export default Navigation