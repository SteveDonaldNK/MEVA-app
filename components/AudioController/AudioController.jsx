import { View, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { LeftControlIcon, LoopIcon, PlayIcon, RightControlIcon, ShuffleIcon } from '../../constants/icons'
import { COLORS } from '../../constants'
import styles from './AudioController.styles'

export default function AudioController() {
  return (
    <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.5}>
            <ShuffleIcon fill={COLORS.dark} height={24} width={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
            <LeftControlIcon fill={COLORS.dark} height={24} width={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
            <PlayIcon fill={COLORS.dark} height={56} width={56} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
            <RightControlIcon fill={COLORS.dark} height={24} width={24} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5}>
            <LoopIcon fill={COLORS.dark} height={24} width={24} />
        </TouchableOpacity>
    </View>
  )
}