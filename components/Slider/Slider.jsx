import { View, Text, ScrollView, Image, FlatList } from 'react-native'
import React from 'react'
import { PADDINGS, SIZES } from '../../constants'
import data from '../../constants/data'

export default function Slider({data, component: Card}) {

  return (
    <View>
      <FlatList
          overScrollMode='never'
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <Card item={item} />
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={{ columnGap: 10, paddingHorizontal: 24}}
          horizontal
        />
    </View>
  )
}