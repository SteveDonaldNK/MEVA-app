import React from 'react'
import { TouchableOpacity } from 'react-native'
import { ChevronLeft } from '../../constants/icons'
import { useNavigation } from '@react-navigation/native';

export default function BackBtn({ fill, btnStyle }) {
    const navigation = useNavigation();
  return (
    <TouchableOpacity style={[{padding: 10, borderRadius: 50}, btnStyle]} activeOpacity={0.5} onPress={() => navigation.goBack()}>
        <ChevronLeft fill={fill} />
    </TouchableOpacity>
  )
}