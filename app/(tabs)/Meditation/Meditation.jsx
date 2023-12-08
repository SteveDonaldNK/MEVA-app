import { View, StyleSheet, SafeAreaView } from 'react-native'
import { COLORS, PADDINGS, SIZES } from '../../../constants'
import React from 'react'
import Header from '../../../components/Header/Header'
import { MEDITATION } from '../../../constants/texts'
import MenuNavigation from '../../../components/MenuNavigation/MenuNavigation'

export default function Meditation() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Header icon heading={MEDITATION.heading} subHeading={MEDITATION.subheading} />
        <MenuNavigation links={MEDITATION.links} />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: SIZES.full,
    padding: PADDINGS.page,
    backgroundColor: COLORS.white,
    display: "flex",
    gap: 20
  }
})