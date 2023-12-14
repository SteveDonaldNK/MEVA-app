import { View, Text } from 'react-native'
import React from 'react'
import styles from './Header.styles'
import { CalendarIcon } from '../../constants/icons'

export default function Header({ heading, subHeading, icon }) {
  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
            <Text style={styles.heading}>{heading}</Text>
            <Text style={styles.subHeading}>{subHeading}</Text>
        </View>
        {
            icon && 
            <View>
                <CalendarIcon />
            </View>
        }
    </View>
  )
}