import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './EventCard.styles'

export default function EventCard({event}) {
  return (
    <TouchableOpacity activeOpacity={0.65} style={styles.btn}>
      <Image style={styles.img} source={{uri: event.image}} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{event.title}</Text>
        <Text style={styles.location}>{event.location}</Text>
      </View>
    </TouchableOpacity>
  )
}