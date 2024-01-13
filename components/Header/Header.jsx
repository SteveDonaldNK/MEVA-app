import { View, Text } from 'react-native'
import React from 'react'
import styles from './Header.styles'
import Animated from 'react-native-reanimated';
import { COLORS } from '../../constants';

export default function Header({ heading, subHeading, viewStyle, headingStyle, headerAnimatedStyle, textAnimatedStyle, LeftIcon, RightIcon, btnStyle, iconColor}) {
  return (
    <Animated.View style={[styles.container, viewStyle, headerAnimatedStyle]}>
        { LeftIcon && <LeftIcon fill={iconColor||COLORS.dark} btnStyle={btnStyle} /> }
        <View style={styles.textContainer}>
            <Animated.Text style={[styles.heading, headingStyle, textAnimatedStyle]}>{heading}</Animated.Text>
            { subHeading && <Text style={styles.subHeading}>{subHeading}</Text>}
        </View>
        { RightIcon && <RightIcon />}
    </Animated.View>
  )
}