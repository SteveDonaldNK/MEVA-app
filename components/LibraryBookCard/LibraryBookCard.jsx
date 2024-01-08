import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import Styles from './LibraryBookCard.styles';

export default function LibraryBookCard({name, author, img}) {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => null}>
      <View style={Styles.container}>
        <View style={Styles.imgContainer}>
          <Image source={img} style={{...Styles.img, ...Styles.box}} resizeMode='cover'/>
          <View style={{...Styles.shadow, ...Styles.box}}></View>
        </View>
        <View>
          <Text style={Styles.name}>{name}</Text>
          <Text style={Styles.author}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}