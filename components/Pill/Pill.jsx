import { View, Text } from 'react-native'
import React from 'react'
import styles from './Pill.styles'
import { CalendarIcon } from '../../constants/icons'
import { COLORS } from '../../constants'

export default function Pill() {
  return (
    <View style={styles.container}>
        <CalendarIcon stroke={COLORS.white} height={20} width={20} />
        <Text style={styles.date}>Nov 25, 2023</Text>
    </View>
  )
}