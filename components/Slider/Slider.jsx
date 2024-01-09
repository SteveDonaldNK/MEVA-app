import { View, FlatList } from 'react-native'
import React from 'react'
import { PADDINGS } from '../../constants'

export default function Slider({data, navigation, component: Card}) {

  return (
    <View>
      <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={({item}) => (
            <Card navigation={navigation} item={item} />
          )}
          keyExtractor={item => item.id || data.indexOf(item)}
          contentContainerStyle={{ columnGap: PADDINGS.gap, paddingHorizontal: PADDINGS.page}}
          horizontal
        />
    </View>
  )
}