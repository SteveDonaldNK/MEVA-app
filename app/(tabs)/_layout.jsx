import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { HomeIcon } from '../../constants/icons'

export default function Layout() {

  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="Home"
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeIcon fill={"#000"} height={24} width={24} />
        }}
      />
    </Tabs>
  )
}