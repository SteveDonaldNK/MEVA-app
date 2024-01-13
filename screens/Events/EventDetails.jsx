import { View, Text, ScrollView, ImageBackground, StyleSheet, Image, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, FONT, PADDINGS, SIZES } from '../../constants'
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import BackBtn from '../../components/BackBtn/BackBtn';
import { CalendarIcon, LocationIcon } from '../../constants/icons';

function EventData({location}) {
    return (
        <View style={styles.eventDataContainer}>
            <View style={styles.eventData}>
                <View style={styles.eventIconContainer}>
                    <LocationIcon height={22} width={22} fill={COLORS.blue} />
                </View>
                <View style={styles.eventDataText}>
                    <Text style={styles.eventDataHeading}>{location}</Text>
                    <Text style={styles.eventDataSubHeading}>Lieu</Text>
                </View>
            </View>
            <View style={styles.eventData}>
                <View style={styles.eventIconContainer}>
                    <CalendarIcon height={22} width={22} stroke={COLORS.blue} />
                </View>
                <View style={styles.eventDataText}>
                    <Text style={styles.eventDataHeading}>24, Nov 2024</Text>
                </View>
            </View>
        </View>
    )
}

export default function EventDetails() {
    const { image, location, title, content } = useRoute().params;
  return (
    <SafeAreaView style={styles.frame}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <View style={styles.imgBg}>
                    <Header iconColor={COLORS.white} LeftIcon={BackBtn} btnStyle={{backgroundColor: "rgba(0, 0, 0, 0.3)"}} viewStyle={{padding: PADDINGS.page, zIndex: 2}} />
                    <Image style={styles.img} source={{ uri: image }} />
                </View>
                <EventData location={location} />
                <View style={styles.detailContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.content}>{content}</Text>
                </View>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
    },
    container: {
        padding: PADDINGS.page/2,
        display: "flex",
        gap: PADDINGS.element,
    },
    imgBg: {
        height: SIZES.ScreenHeight*0.45,
        width: SIZES.full,
    },
    img: {
        position: "absolute",
        top: 0,
        left: 0,
        height: SIZES.full,
        width: SIZES.full,
        borderRadius: 20,
    },
    eventDataContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: PADDINGS.gap
    },
    eventData: {
        display: "flex",
        flexDirection: "row",
        gap: PADDINGS.gap,
        paddingHorizontal: PADDINGS.page,
    },
    eventIconContainer: {
        padding: 10,
        backgroundColor: COLORS.white,
        borderRadius: 10
    },
    eventDataText: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 2,
    },
    eventDataHeading: {
        fontFamily: FONT.articleMedium,
        fontSize: SIZES.sm,
    },
    eventDataSubHeading: {
        fontFamily: FONT.articleMedium,
        fontSize: SIZES.xs-1,
        color: COLORS.gray,
    },
    detailContainer: {
        paddingHorizontal: PADDINGS.page/2,
    },
    title: {
        fontFamily: FONT.articleBold,
        fontSize: SIZES.lg,
        textTransform: "capitalize"
    },
    content: {
        marginTop: 10,
        fontFamily: FONT.articleRegular,
        fontSize: SIZES.xs
    }
})