import { View, SafeAreaView, StyleSheet, Dimensions, Text, Image, TouchableOpacity } from 'react-native'
import Animated, { interpolate, interpolateColor, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import React, { useState } from 'react'
import { COLORS, FONT, IMAGES, PADDINGS, SIZES } from '../constants'
import { CONTRIBUTION } from '../constants/texts'
import Header from '../components/Header/Header'
import Draggable from 'react-native-draggable';

const { height, width } = Dimensions.get('window');
const IMG_HEIGHT = height/2;

export default function Contribution() {
  const scrollRef = useAnimatedRef();
  const scrollOffset = useScrollViewOffset(scrollRef);

  const imageAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [-IMG_HEIGHT / 2, 0, IMG_HEIGHT * 0.75]
          )
        },
        {
          scale: interpolate(
            scrollOffset.value,
            [-IMG_HEIGHT, 0, IMG_HEIGHT],
            [2, 1, 1.15]
          )
        }
      ], 
    };
  })

  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      backgroundColor : interpolateColor(
        scrollOffset.value,
        [0, IMG_HEIGHT/1.5],
        ['rgba(0, 0, 0, 0)', 'rgba(255, 255, 255, 1)']
      ),
      borderBottomColor: interpolateColor(
        scrollOffset.value,
        [0, IMG_HEIGHT/1.5],
        ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.1)']
      ),
    }
  })

  const textAnimatedStyle = useAnimatedStyle(() => {
    return {
      color : interpolateColor(
        scrollOffset.value,
        [0, IMG_HEIGHT/1.5],
        ['rgba(255, 255, 255, 1)', 'rgba(0, 0, 0, 1)']
      ),
    }
  })

  return (
    <>
    <SafeAreaView style={Styles.container}>
      <Header 
        headerAnimatedStyle={headerAnimatedStyle}
        textAnimatedStyle={textAnimatedStyle}
        style={{ position: "absolute", padding: 24, paddingBottom: 12, zIndex: 20, borderBottomWidth: 1 }} 
        heading={"Contributions"} 
      />
      <Animated.ScrollView
        scrollEventThrottle={16} 
        ref={scrollRef} 
        showsVerticalScrollIndicator={false}>
          <Animated.Image
            style={[Styles.imgBg, imageAnimatedStyle]} 
            source={IMAGES.funding} 
          />
          {
            CONTRIBUTION.map(({heading, body}, key) => (
              <View style={Styles.textContainer} key={key}>
                <View>
                  <Text style={Styles.heading}>{heading}</Text>
                  <Text style={Styles.text}>{body}</Text>
                </View>
              </View>
            ))
          }
      </Animated.ScrollView>
      
    </SafeAreaView>
    <Draggable x={width-80} y={height-170} maxX={width} maxY={height-80}>
    <TouchableOpacity style={Styles.donationBtn}>
      <Image style={Styles.donationImg} source={IMAGES.donation} />
    </TouchableOpacity>
  </Draggable>
  </>
  )
}

const Styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: COLORS.dark,
    display: "flex",
    },
  imgBg: {
    width,
    height: IMG_HEIGHT,
    resizeMode: "cover", 
  },
  textContainer: {
    height: height/2,
    backgroundColor: COLORS.white,
    paddingVertical:PADDINGS.sm,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  text: {
    fontFamily: FONT.articleRegular,
    fontSize: SIZES.xs
  },
  heading: {
    fontFamily: FONT.articleBold,
    fontSize: SIZES.lg,
    marginBottom: 2
  }, 
  donationBtn: {
    height: 55,
    width: 55,
    padding: 10,
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 50,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity:  0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
  donationImg: {
    height: SIZES.full,
    width: SIZES.full,
  }
})