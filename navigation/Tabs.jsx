import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar/TabBar';
import { Contribution, Home, Library, Meditation, News } from '../screens';

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props}/>}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Meditation" component={Meditation}/>
      <Tab.Screen name="News" component={News}/>
      <Tab.Screen name="Library" component={Library}/>
      <Tab.Screen name="Contribution" component={Contribution}/>
    </Tab.Navigator>
  )
}