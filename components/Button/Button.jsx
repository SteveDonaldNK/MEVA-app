import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Button.styles'
import { COLORS } from '../../constants'
import _ from 'lodash'

export default function Button({ style, name, bg, border,variant, onPress, color}) {
    const borderRadius = variant === 'pill' ? 50 : 0;
    const borderColor = border || COLORS.white

  return (
    <TouchableOpacity activeOpacity={0.85} onPress={() => {
      onPress && onPress()
    }} style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: bg, borderColor, borderRadius, ...styles.btn, ...style }}>
        <Text style={{...styles.btnTitle, color}}>{_.capitalize(name)}</Text>
    </TouchableOpacity>
  )
}