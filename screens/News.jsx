import { View, SafeAreaView, StyleSheet } from 'react-native'
import { COLORS, PADDINGS, SIZES } from '../constants'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar/SearchBar'
import NewsList from '../components/NewsList/NewsList'

export default function News() {

  return (
    <SafeAreaView>
      <View style={styles.container} showsVerticalScrollIndicator={false} bounces={false} alwaysBounceVertical = {false}>
        <SearchBar style={{paddingBottom: 12}} />
        <NewsList />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: PADDINGS.page,
    width: SIZES.full,
    height: SIZES.full,
    backgroundColor: COLORS.white,
  }
})