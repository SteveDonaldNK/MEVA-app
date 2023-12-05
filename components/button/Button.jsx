import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.styles'
import { COLORS } from '../../constants'

export default function Button({name, bg, variant}) {
    const color = bg ? COLORS.dark : COLORS.white
    const borderRadius = variant === 'pill' ? 50 : 0;

  return (
    <TouchableOpacity style={{...styles.btn, backgroundColor: bg, borderRadius}}>
        <Text style={{...styles.btnTitle, color}}>{name}</Text>
    </TouchableOpacity>
  )
}