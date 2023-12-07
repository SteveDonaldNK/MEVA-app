import { View, Text } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'


export default function Page() {
    const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Page</Text>
    </View>
  )
}