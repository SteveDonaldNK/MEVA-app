import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import styles from './Welcome.styles';
import { COLORS, IMAGES } from '../../constants';
import Button from '../Button/Button';
import { WELCOME } from '../../constants/texts';
import GradientText from '../GradientText/GradientText';

export default function Welcome() {

  return (
    <View style={styles.frame}>
        <ImageBackground source={IMAGES.welcome} resizeMode='cover' style={styles.image}>
            <View style={styles.container}>
                <GradientText styles={styles} text={WELCOME.heading} />
                <Text style={[styles.paragraph, styles.text]}>{WELCOME.paragraph}</Text>
                <View style={styles.btnContainer}>
                    <Button onPress={() => {
                    }} name={'Ancien'} bg={COLORS.white} />                    
                    <Button name={'Nouveau'} />                    
                </View>
            </View>
        </ImageBackground>
    </View>
  )
}