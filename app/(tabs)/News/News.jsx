import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import { COLORS, PADDINGS, SIZES } from '../../../constants'
import React from 'react'
import NewsCard from '../../../components/NewsCard/NewsCard'
import SearchBar from '../../../components/SearchBar/SearchBar'
import NewsList from '../../../components/NewsList/NewsList'

export default function News() {
  return (
    <SafeAreaView>
      <View style={styles.container} showsVerticalScrollIndicator={false} bounces={false} alwaysBounceVertical = {false}>
        <SearchBar />
        <NewsList />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    width: SIZES.full,
    height: SIZES.full,
    backgroundColor: COLORS.white,
  }
})