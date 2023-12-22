import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import { COLORS, FONT, PADDINGS, SIZES } from '../constants'
import Slider from '../components/Slider/Slider'
import { library } from '../constants/data'
import LibraryCategoryCard from '../components/LibraryCategoryCard/LibraryCategoryCard'

export default function Library() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Header style={styles.header} heading={"Bibliotheque"} subHeading={"Livres chretiens, Bibles et cantiques"} />
          <SearchBar />
          <Slider data={library} component={LibraryCategoryCard}  />
          <Header headingStyle={styles.sectionHeader} style={styles.header} heading="Pour votre lecture" />
        </View> 
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.full,
    height: SIZES.full,
    backgroundColor: COLORS.white,
    paddingVertical: PADDINGS.page,
  },
  content: {
    display: "flex",
    gap: PADDINGS.element,
  },
  header: {
    paddingHorizontal: PADDINGS.page,
  },
  sectionHeader: {
    fontSize: SIZES.lg
  }
})