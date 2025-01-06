import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../screens/Home';
import Statistics from '../screens/Statistics';
import { Icon } from 'react-native-paper';
import Logo from '../components/atoms/Logo';
import { TabParamList } from './navigationTypes';

const Tab = createBottomTabNavigator<TabParamList>();

const TabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarShowLabel: false,
            headerTitle: () => <Logo/>,
            headerStyle: {height: 110, backgroundColor: '#ebebeb'},
            tabBarStyle: { backgroundColor: '#ebebeb', height: 50, justifyContent: 'center', alignItems: 'center' },
            tabBarInactiveTintColor: '#ff3131',
            tabBarActiveTintColor:  '#ebebeb',
            tabBarActiveBackgroundColor: '#ff3131'            
        }}>
            <Tab.Screen name="Home" component={Home} initialParams={{reRender: false}} options={{

                tabBarIcon: (props: { focused: boolean, color: string, size: number }) =>
                    <Icon
                        source='home'
                        size={35}
                        color={props.color} />
            }} />
            <Tab.Screen name="Statistics" component={Statistics} options={{
                tabBarIcon: (props: { focused: boolean, color: string, size: number }) =>
                    <Icon
                        source={'chart-areaspline'}
                        size={35}
                        color={props.color} />
            }} />
        </Tab.Navigator>
    )
}

export default TabNavigator;