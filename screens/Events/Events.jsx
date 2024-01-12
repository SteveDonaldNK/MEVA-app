import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import EventList from '../../components/EventList/EventList'
import { COLORS, PADDINGS } from '../../constants'
import Header from '../../components/Header/Header'
import BackBtn from '../../components/BackBtn/BackBtn'
import { CalendarIcon } from '../../constants/icons'

export default function Events() {
  return (
    <SafeAreaView style={styles.frame}>
        <Header LeftIcon={BackBtn} RightIcon={CalendarIcon} viewStyle={styles.header} heading={"Evenements"} />
        <EventList />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.005)",
    },
    header: {
        padding: PADDINGS.page,
        backgroundColor: COLORS.white
    }
})