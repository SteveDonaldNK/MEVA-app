import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './SearchBar.styles'
import { LensIcon } from '../../constants/icons'

export default function SearchBar() {
  return (
      <View style={styles.container}>
        <View style={styles.innerContent}>
          <TextInput style={styles.input} placeholder='Rechercher' placeholderTextColor={'rgba(114, 116, 127, 0.5)'} />
          <TouchableOpacity>
            <LensIcon fill={'rgba(114, 116, 127, 0.7)'} height={24} width={40} />
          </TouchableOpacity>
        </View>
      </View>
  )
}