import { View, SafeAreaView, StyleSheet, Dimensions, Text } from 'react-native'
import Animated, { interpolate, interpolateColor, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import React from 'react'
import { COLORS, FONT, IMAGES, PADDINGS, SIZES } from '../constants'
import { CONTRIBUTION } from '../constants/texts'
import Header from '../components/Header/Header'
import Button from '../components/Button/Button'

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
    <SafeAreaView style={Styles.frame}>
      <Header 
        headerAnimatedStyle={headerAnimatedStyle}
        textAnimatedStyle={textAnimatedStyle}
        style={Styles.header} 
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
      <View style={Styles.bottomBtn}>
        <View style={Styles.btnContainer}>
          <Button 
            style={Styles.contributeBtn} 
            color={COLORS.white} 
            bg={COLORS.primary} 
            border={COLORS.primary} 
            name={"Contribuer"} 
          />
        </View>
      </View>
    </SafeAreaView>
  </>
  )
}

const Styles = StyleSheet.create({
  frame: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: { 
    position: "absolute", 
    padding: 24, 
    paddingBottom: 12, 
    zIndex: 20, 
    borderBottomWidth: 1 
  },
  imgBg: {
    width,
    height: IMG_HEIGHT,
    resizeMode: "cover", 
  },
  textContainer: {
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
  bottomBtn: {
    width,
    backgroundColor: COLORS.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  btnContainer: {
    width: width-(PADDINGS.sm*2),
    paddingVertical: 5,
  },
  contributeBtn: {
    borderRadius: 10
  }
})