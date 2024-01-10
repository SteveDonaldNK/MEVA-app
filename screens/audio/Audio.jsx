import { View, Text, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, IMAGES, SIZES } from '../../constants'
import MediaHeader from '../../components/MediaHeader/MediaHeader'
import Overlay from '../../components/Overlay/Overlay'
import SeekBar from './../../components/SeekBar/SeekBar';

export default function Audio({navigation}) {
  return (
    <SafeAreaView style={styles.frame}>
        <MediaHeader navigation={navigation} />
        <ImageBackground style={styles.imgBg} source={IMAGES.message[0]}>
            <Overlay />
        </ImageBackground>
        <View style={styles.controllerContainer}>
            <SeekBar />
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    imgBg: {
        height: SIZES.ScreenHeight*0.7,
        width: SIZES.ScreenWidth,
    },
    controllerContainer: {
        position: "absolute",
        bottom: 0,
        zIndex: 2,
        height: SIZES.ScreenHeight*0.32,
        width: SIZES.ScreenWidth,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor:  COLORS.white,
    }
})