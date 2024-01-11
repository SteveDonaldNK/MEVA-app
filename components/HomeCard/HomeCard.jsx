import { View, Text, ImageBackground } from 'react-native'
import React from 'react'
import Button from '../Button/Button';
import { COLORS, IMAGES } from '../../constants';
import styles from './HomeCard.styles'
import _ from 'lodash';
import Pill from '../Pill/Pill';
import Overlay from '../Overlay/Overlay';

export default function HomeCard({navigation, item}) {
    const {category, title} = item;

    function findImage() {
      let bgImage = IMAGES.message[1];
      switch (category) {
        case 'prayer':
          bgImage = IMAGES.prayer[0];
          break;
        case 'testimony':
          bgImage = IMAGES.testimony;
          break;
        default:
          break;
    }

    return bgImage
  }

  return (
    <ImageBackground source={findImage()} resizeMode='cover' style={styles.bgImg}>
        <View style={styles.container}>
            <Overlay />
            <View style={styles.content}>
              <View style={styles.textContainer}>
                  <Text style={styles.type}>{_.upperCase(category)}</Text>
                  <Text style={styles.title}>{(category === 'message' ? "Theme: " : "Sujet: ") + _.capitalize(title)}</Text>
              </View>
              <View style={styles.btnContainer}>
                  <Pill />
                  <Button onPress={() => navigation.navigate("audio", { title: category})} style={styles.btn} bg={COLORS.white} name={'voir'} variant="pill" />
              </View>
            </View>
        </View>
    </ImageBackground>
  )
}