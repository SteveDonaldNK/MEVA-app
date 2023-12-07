import { Text, ImageBackground, View } from 'react-native'
import React from 'react'
import styles from './DiscoveryCard.styles'
import { LocationIcon } from '../../constants/icons'
import { COLORS } from '../../constants'
import _ from 'lodash'
import Overlay from '../Overlay/Overlay'

export default function DiscoveryCard({item}) {
  return (
    <ImageBackground resizeMode='cover' source={{uri: item.image}} style={styles.container}>
      <Overlay />
      <View style={styles.content}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{_.capitalize(item.title)}</Text>
          <Text style={styles.text}>{_.truncate(_.capitalize(item.content), {length: 100})}</Text>
        </View>
        <View style={styles.locationContainer}>
          <LocationIcon fill={COLORS.white} height={20} width={20} />
          <Text style={styles.location}>{item.location}</Text>
        </View>
      </View>
    </ImageBackground>
  )
}