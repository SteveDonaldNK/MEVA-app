import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './Header.styles'
import { useNavigation } from '@react-navigation/native';

export default function SectionHeader({heading, link}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{heading}</Text>
      <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.navigate("News")}>
        <Text style={styles.text}>voir plus</Text>
      </TouchableOpacity>
    </View>
  )
}