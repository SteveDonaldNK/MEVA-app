import { View, Text } from 'react-native'
import React from 'react'
import styles from './Header.styles'
import { Link } from 'expo-router'

export default function SectionHeader({heading, link}) {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{heading}</Text>
      <Link href={link} style={styles.link}>
        <Text style={styles.text}>voir plus</Text>
      </Link>
    </View>
  )
}