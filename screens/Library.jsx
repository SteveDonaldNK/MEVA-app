import { View, SafeAreaView, StyleSheet, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import Header from '../components/Header/Header'
import SearchBar from '../components/SearchBar/SearchBar'
import Slider from '../components/Slider/Slider'
import { books, library } from '../constants/data'
import { COLORS, PADDINGS, SIZES } from '../constants'
import LibraryCategoryCard from '../components/LibraryCategoryCard/LibraryCategoryCard'
import LibraryBookList from '../components/LibraryBookList/LibraryBookList'

const { width } = Dimensions.get('window');
export default function Library() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
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
    fontSize: SIZES.lg,
  },
  bookContainer: {
    paddingHorizontal: PADDINGS.page,
    display: "flex",
    flexDirection: "row",
    rowGap: PADDINGS.sm,
    columnGap: width * 0.0312,
    flexWrap: "wrap",
    paddingBottom: 50,
  }
})