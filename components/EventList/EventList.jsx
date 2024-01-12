import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { events } from '../../constants/data'
import EventCard from '../EventCard/EventCard'
import { PADDINGS } from '../../constants'

export default function EventList() {
  return (
    <FlatList
        showsVerticalScrollIndicator={false}
        bounces={true}
        overScrollMode='always'
        data={events}
        renderItem={({item}) => (
            <EventCard event={item} />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={{ rowGap: PADDINGS.gap, padding: PADDINGS.gap }}
    />
  )
}