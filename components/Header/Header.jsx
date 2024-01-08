import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles'
import { CalendarIcon } from '../../constants/icons'
import Animated from 'react-native-reanimated';

export default function Header({ heading, subHeading, icon, style, headingStyle, headerAnimatedStyle, textAnimatedStyle}) {
  return (
    <Animated.View style={[styles.container, style, headerAnimatedStyle]}>
        <View style={styles.textContainer}>
            <Animated.Text style={[styles.heading, headingStyle, textAnimatedStyle]}>{heading}</Animated.Text>
            { subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
        </View>
        {
            icon && 
            <TouchableOpacity activeOpacity={0.5} onPress={() => null}>
                <CalendarIcon />
            </TouchableOpacity>
        }
    </Animated.View>
  )
}