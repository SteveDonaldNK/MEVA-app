import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import styles from './LibraryCategoryCard.styles'

export default function LibraryCategoryCard({item}) {
  return (
    <ImageBackground fadeDuration={0} resizeMode='cover' source={item.image} style={styles.card}>
      <Text style={styles.label}>{item.category}</Text>
    </ImageBackground>
  )
}