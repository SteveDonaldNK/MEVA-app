import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronLeft } from '../../constants/icons'
import { useNavigation } from '@react-navigation/native';

export default function BackBtn() {
    const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <ChevronLeft />
    </TouchableOpacity>
  )
}