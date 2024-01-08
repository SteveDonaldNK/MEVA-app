import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles'

export default function SectionHeader({heading, link}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{heading}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={() => null}>
        <Text style={styles.text}>voir plus</Text>
      </TouchableOpacity>
    </View>
  )
}