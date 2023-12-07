import { StyleSheet } from 'react-native'
import React from 'react'
import { PADDINGS, SIZES } from '../../constants'
import { LinearGradient } from 'expo-linear-gradient'

export default function Overlay() {
  return (
    <LinearGradient style={styles.overlay} colors={['rgba(0, 0, 0, 0.25)', 'rgba(0, 0, 0, 0.25)']} start={{x: 0, y: 0}} end={{x: 0, y: 1}} />
  )
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: SIZES.full,
        height: SIZES.full
    }
})