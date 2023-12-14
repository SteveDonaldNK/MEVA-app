import { Text } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientText({styles, text}) {
  return (
    <MaskedView maskElement={
        <Text style={[styles.heading, styles.text]}>{text}</Text>
    }>
        <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.white, COLORS.skyBlue]}
        >
            <Text style={{...styles.heading, ...styles.text, opacity: 0}}>{text}</Text>
        </LinearGradient>
    </MaskedView>
  )
}