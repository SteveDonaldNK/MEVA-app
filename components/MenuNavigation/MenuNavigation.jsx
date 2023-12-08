import { View, Text, TouchableNativeFeedback } from 'react-native'
import React from 'react'
import styles from './MenuNavigation.styles'
import { ChevronRight } from '../../constants/icons'
import { COLORS } from '../../constants'

export default function MenuNavigation({links}) {
  return (
    <View style={styles.container}>
      {
        links.map((link, index) => (
            <View key={index} style={styles.btn}>
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.Ripple(
                    COLORS.lightGray,
                    true,
                    )}
                >
                    <View style={styles.innerContainer}>
                        <View style={styles.iconContainer}>
                            <link.Icon />
                            <Text style={styles.label}>{link.label}</Text>
                        </View>
                        <ChevronRight />
                    </View>
                </TouchableNativeFeedback>
            </View>
        ))
      }
    </View>
  )
}