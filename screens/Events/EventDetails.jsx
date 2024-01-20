import { View, Text, ScrollView, ImageBackground, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { COLORS, FONT, PADDINGS, SIZES } from '../../constants'
import { useRoute } from '@react-navigation/native';
import Header from '../../components/Header/Header';
import BackBtn from '../../components/BackBtn/BackBtn';
import Overlay from '../../components/Overlay/Overlay';
import MapView from 'react-native-maps';

export default function EventDetails() {
    const { image, location, title, content } = useRoute().params;

    return (
        <SafeAreaView style={styles.frame}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.container}>
                    <ImageBackground style={styles.imgBg} source={{ uri: image }}>
                        <Overlay />
                        <Header LeftIcon={BackBtn} iconColor={COLORS.white} viewStyle={{padding: PADDINGS.page, zIndex: 2}} />
                        <View style={styles.headingContainer}>
                            <Text style={styles.location}>{location}</Text>
                            <Text style={styles.title}>{title}</Text>
                        </View>
                    </ImageBackground>
                    <View style={styles.details}>
                        <View style={styles.detailContainer}>
                            <Text style={styles.detailHeading}>Date</Text>
                            <Text style={styles.content}>Sam, 22 Janvier 2024</Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <Text style={styles.detailHeading}>Details</Text>
                            <Text style={styles.content}>{content}</Text>
                        </View>
                        <View>
                            <Text style={styles.detailHeading}>Lieu</Text>
                            <Text style={styles.content}>{location}</Text>
                        </View>
                    </View>
                    <View style={styles.mapContainer}>
                        <MapView
                            style={styles.map}
                            initialRegion={{
                                latitude: 37.78825,
                                longitude: -122.4324,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        />
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
        display: "flex",
        gap: PADDINGS.gapMd,
        paddingBottom: 20,
    },
    imgBg: {
        height: SIZES.ScreenHeight*0.45,
        width: SIZES.full,
        backgroundColor: "red"
    },
    headingContainer: {
        position: "absolute",
        bottom: PADDINGS.page,
        left: PADDINGS.page
    },
    location: {
        color: COLORS.lightGray,
        fontFamily: FONT.articleMedium,
        fontSize: SIZES.sm,
    },
    title: {
        color: COLORS.white,
        fontFamily: FONT.articleBold,
        fontSize: SIZES.xxl,
        width: (SIZES.ScreenWidth*0.75) - PADDINGS.page*2 ,
    },
    details: {
        paddingHorizontal: PADDINGS.page,
        display: "flex",
        gap: PADDINGS.gapMd,
    },
    detailHeading: {
        fontFamily: FONT.articleSemiBold,
        fontSize: SIZES.sm,
    },
    content: {
        fontFamily: FONT.articleRegular,
        fontSize: SIZES.xs,
        color: "rgba(0, 0, 0, 0.7)"
    },
    mapContainer: {
        paddingHorizontal: PADDINGS.page
    },
    map: {
        height: SIZES.ScreenHeight*0.4,
        width: SIZES.full,
    }
})