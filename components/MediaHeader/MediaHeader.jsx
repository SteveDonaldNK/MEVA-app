import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeft, MoreIcon } from '../../constants/icons'
import { COLORS } from '../../constants'
import styles from './MediaHeader.styles'

export default function MediaHeader({navigation, title}) {

    function previousScreen() {
        navigation.goBack();
    } 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={previousScreen} activeOpacity={0.55}>
        <View style={styles.icon}>
            <ChevronLeft height={18} width={18} fill={COLORS.white} />
        </View>
      </TouchableOpacity>
      <Text>{title}</Text>
      <TouchableOpacity activeOpacity={0.55}>
        <View style={styles.icon}>
            <MoreIcon height={18} width={18} fill={COLORS.white} />
        </View>
      </TouchableOpacity>
    </View>
  )
}