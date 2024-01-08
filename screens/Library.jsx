import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Slider from '../components/Slider/Slider'
import { books, library } from '../constants/data'
import { COLORS, PADDINGS, SIZES } from '../constants'
import LibraryCategoryCard from '../components/LibraryCategoryCard/LibraryCategoryCard'
import LibraryBookList from '../components/LibraryBookList/LibraryBookList'

export default function Library() {
  return (
    <SafeAreaView style={styles.frame}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Header style={styles.header} heading={"Bibliotheque"} subHeading={"Livres chretiens, Bibles et cantiques"} />
          <SearchBar />
          <Slider data={library} component={LibraryCategoryCard}  />
          <Header headingStyle={styles.sectionHeader} style={styles.header} heading="Pour votre lecture" />
          <View style={styles.bookContainer}>
            <LibraryBookList books={books} />
          </View>
        </View> 
      </ScrollView>
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
    fontSize: SIZES.lg,
  },
  bookContainer: {
    paddingHorizontal: PADDINGS.page,
    display: "flex",
    flexDirection: "row",
    rowGap: PADDINGS.page,
    columnGap: PADDINGS.gapMd,
    flexWrap: "wrap",
    paddingBottom: 30,
  }
})