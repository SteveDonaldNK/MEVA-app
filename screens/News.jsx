import { SafeAreaView, StyleSheet } from 'react-native'
import { COLORS, PADDINGS } from '../constants'
import React from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import NewsList from '../components/NewsList/NewsList'

export default function News() {

  return (
    <SafeAreaView style={styles.frame}>
      <SearchBar style={styles.searchBar} />
      <NewsList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchBar: {
    paddingTop: PADDINGS.page,
    paddingBottom: 5,
    shadowColor: COLORS.dark ,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity:  0.15,
    shadowRadius: 1.00,
    elevation: 1
  }
})