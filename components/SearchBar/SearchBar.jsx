import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './SearchBar.styles'
import { LensIcon } from '../../constants/icons'

export default function SearchBar({style}) {
  return (
      <View style={{...styles.container, ...style}}>
        <View style={styles.innerContent}>
          <TextInput style={styles.input} placeholder='Rechercher' placeholderTextColor={'rgba(114, 116, 127, 0.5)'} cursorColor={'rgba(114, 116, 127, 0.5)'} selectionColor={'rgba(114, 116, 127, 0.5)'} />
          <TouchableOpacity onPress={() => null}>
            <LensIcon fill={'rgba(114, 116, 127, 0.7)'} height={24} width={40} />
          </TouchableOpacity>
        </View>
      </View>
  )
}