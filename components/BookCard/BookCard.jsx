import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import { IMAGES } from '../../constants'
import _ from 'lodash'
import styles from './BookCard.styles'

export default function BookCard() {
    const title = "la Sainte Bible";
    const type = "bible";
    const version = "version 1"

    function findImage() {
        let image = IMAGES.Book;

        switch (type) {
            case 'bible':
                image = IMAGES.Bible;
                break;
            case 'hymn':
                image = IMAGES.Hymn;
                break;
            default:
                break;
        }

        return image;
    }

  return (
    <View style={styles.card}>
      <View style={styles.imgContainer}>
        <ImageBackground resizeMode='contain' source={findImage()} style={{...styles.box, ...styles.img}} />
        <View style={{...styles.box, ...styles.shadow}}></View>
      </View>
      <View style={styles.action}>
        <View style={styles.infoContainer}>
            <Text style={styles.title}>{_.upperCase(title)}</Text>
            <Text style={styles.version}>{(type === "book" ? "Editeur: " : "Version: ") + version}</Text>
        </View>
        <Button variant="pill" style={styles.btn} name="Lire"/>
      </View>
    </View>
  )
}