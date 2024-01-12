import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar/TabBar';
import { Contribution, Home, Library, Meditation, News } from '../screens';

export default function Tabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}} tabBar={props => <TabBar {...props}/>}>
      <Tab.Screen name="home" component={Home} />
      <Tab.Screen name="meditation" component={Meditation}/>
      <Tab.Screen name="news" component={News}/>
      <Tab.Screen name="library" component={Library}/>
      <Tab.Screen name="contribution" component={Contribution}/>
    </Tab.Navigator>
  )
}