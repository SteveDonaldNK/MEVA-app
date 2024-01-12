import { TouchableOpacity } from 'react-native'
import React from 'react'
import { CalendarIcon } from '../../constants/icons'

export default function CalendarBtn() {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => null}>
        <CalendarIcon />
    </TouchableOpacity>
  )
}