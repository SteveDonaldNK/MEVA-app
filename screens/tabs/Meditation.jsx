import { View, StyleSheet, SafeAreaView } from 'react-native'
import { COLORS, PADDINGS } from '../../constants'
import React from 'react'
import Header from '../../components/Header/Header'
import { MEDITATION } from '../../constants/texts'
import MenuNavigation from '../../components/MenuNavigation/MenuNavigation'
import { CalendarIcon } from '../../constants/icons'

export default function Meditation() {
  return (
    <SafeAreaView style={styles.frame}>
      <View style={styles.container}>
        <Header RightIcon={CalendarIcon} heading={MEDITATION.heading} subHeading={MEDITATION.subheading} />
        <MenuNavigation links={MEDITATION.links} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    padding: PADDINGS.page,
    display: "flex",
    gap: PADDINGS.gapMd
  }
})