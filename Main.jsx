import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './navigation/Tabs';

export default function Main() {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name='Tabs' component={Tabs} />
    </Stack.Navigator>
  )
}