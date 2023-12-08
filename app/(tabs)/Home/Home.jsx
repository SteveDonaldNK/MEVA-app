import { View, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import Slider from '../../../components/Slider/Slider'
import SearchBar from '../../../components/SearchBar/SearchBar'
import DiscoveryCard from '../../../components/DiscoveryCard/DiscoveryCard'
import HomeCard from './../../../components/HomeCard/HomeCard';
import { events, messages, prayers, testimonies } from '../../../constants/data'
import BookCard from '../../../components/BookCard/BookCard'
import { COLORS, PADDINGS } from '../../../constants'
import SectionHeader from '../../../components/SectionHeader/SectionHeader'
import BookList from './../../../components/BookList/BookList';

export default function Home() {
  const data = [messages[0], testimonies[0], prayers[0]]
  
  return (
    <SafeAreaView style={styles.frame}>
      <SearchBar />
      <ScrollView 
        showsVerticalScrollIndicator={false} 
        style={styles.container}
        overScrollMode='never'
        bounces={false}
      >
        <View style={styles.content}>
          <Slider data={data} component={HomeCard}/>
          <View style={styles.section}>
            <SectionHeader heading="Decouvrir" link='' />
            <Slider data={events} component={DiscoveryCard} />
          </View>
          <View style={styles.section}>
            <SectionHeader heading="Lecture" link='' />
            <View style={styles.bookList}>
              <BookList />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  frame: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: COLORS.white
  },
  content: {
    display: "flex", 
    gap: PADDINGS.element, 
    paddingVertical: PADDINGS.page, 
    backgroundColor: COLORS.white
  },
  section: {
    display: "flex", 
    gap: PADDINGS.sm
  },
  bookList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    rowGap: 20
  }
})