import { FlatList } from 'react-native'
import React from 'react'
import { news } from '../../constants/data'
import NewsCard from '../NewsCard/NewsCard'
import Separator from '../Separator/Separator'

export default function NewsList() {
  return (
    <FlatList
        ItemSeparatorComponent={Separator}
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({item}) => (
            <NewsCard news={item} />
        )}
        keyExtractor={item => item.id}
    />
  )
}