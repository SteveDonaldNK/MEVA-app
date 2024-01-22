import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
        <View style={{display: "flex", flexDirection: "row", width: "100%", height: 40, alignItems: "center"}}>
          <TouchableOpacity style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>A venir</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>En cours</Text>
          </TouchableOpacity>
          <TouchableOpacity  style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Passe</Text>
          </TouchableOpacity>
        </View>
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
        paddingVertical: PADDINGS.page - 5,
        backgroundColor: COLORS.white
    }
})