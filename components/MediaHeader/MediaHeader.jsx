import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ChevronLeft, MoreIcon } from '../../constants/icons'
import { useNavigation } from '@react-navigation/native'
import { COLORS } from '../../constants'
import styles from './MediaHeader.styles'

export default function MediaHeader({title}) {

    const navigation = useNavigation();

    function previousScreen() {
        navigation.goBack();
    } 

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={previousScreen} activeOpacity={0.55}>
        <View style={styles.icon}>
            <ChevronLeft height={16} width={16} fill={COLORS.white} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity activeOpacity={0.55}>
        <View style={styles.icon}>
            <MoreIcon height={16} width={16} fill={COLORS.white} />
        </View>
      </TouchableOpacity>
    </View>
  )
}