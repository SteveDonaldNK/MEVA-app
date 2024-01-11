import { View, Text, SafeAreaView, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS, FONT, IMAGES, PADDINGS, SIZES } from '../../constants'
import MediaHeader from '../../components/MediaHeader/MediaHeader'
import Overlay from '../../components/Overlay/Overlay'
import SeekBar from './../../components/SeekBar/SeekBar';
import AudioController from '../../components/AudioController/AudioController'

export default function Audio({ route }) {

    const { title } = route.params;

  return (
    <SafeAreaView style={styles.frame}>
        <MediaHeader title={title}/>
        <ImageBackground style={styles.imgBg} source={IMAGES.message[0]}>
            <Overlay />
        </ImageBackground>
        <View style={styles.controllerContainer}>
            <View>
                <View style={styles.timeIndicator}>
                    <Text style={styles.timeText}>01:05</Text>
                    <Text style={styles.timeText}>40:15</Text>
                </View>
                <SeekBar />
            </View>
            <AudioController />
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
        display: "flex",
        justifyContent: "center",
        gap: PADDINGS.gapMd,
        position: "absolute",
        bottom: 0,
        zIndex: 2,
        height: SIZES.ScreenHeight*0.32,
        width: SIZES.ScreenWidth,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor:  COLORS.white,
        padding: SIZES.ScreenWidth*0.05,
    },
    timeIndicator: {
        paddingHorizontal: PADDINGS.page,
        width: SIZES.full,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: PADDINGS.gap,
    },
    timeText: {
        fontFamily: FONT.articleRegular,
        fontSize: SIZES.xs-2,
        color: COLORS.gray,
    }
})