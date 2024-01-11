import React from 'react'
import Slider from '@react-native-community/slider'
import { COLORS, SIZES } from '../../constants'

export default function seekBar() {
  return (
    <Slider
        maximumValue={100}
        minimumValue={0}
        minimumTrackTintColor={COLORS.dark}
        maximumTrackTintColor={COLORS.dark}
        thumbTintColor={COLORS.dark}
        step={1}
        value={20}
        style={{width: SIZES.full}}
    />
  )
}