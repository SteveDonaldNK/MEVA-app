import { FlatList } from 'react-native'
import React from 'react'
import { news } from '../../constants/data'
import NewsCard from '../NewsCard/NewsCard'

export default function NewsList({ setIsOpen, setImages }) {
  return (
    <FlatList
        showsVerticalScrollIndicator={false}
        data={news}
        renderItem={({item}) => (
            <NewsCard news={item} />
        )}
        keyExtractor={item => item.id}
    />
  )
}