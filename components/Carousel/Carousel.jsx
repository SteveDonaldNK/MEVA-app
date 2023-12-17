import React, { useState } from 'react'
import { Text, TouchableOpacity, View, Image, ActivityIndicator, Modal } from 'react-native'
import Swiper from 'react-native-swiper'
import styles from './Carousel.styles'
import { COLORS } from '../../constants'
import { ChevronLeft } from '../../constants/icons'

function Slide({uri}) {
    const [loaded, setLoaded] = useState(false);
    
    return (
        <View style={styles.slide}>
            <Image
            resizeMode='contain'
            onLoad={() => {
                setLoaded(true)
            }}
            style={loaded ? styles.image : {display: 'none'}}
            source={{ uri }}
            />
            {
                !loaded &&
                <View style={styles.loading}>
                    <ActivityIndicator size='large' color={COLORS.blue} />
                </View>
            }
        </View>
    )
}

export default function Carousel({ isOpen, setIsOpen, images, itemIndex }) {
    function closeModal() {
        setIsOpen(false);
    }

    return (
        <Modal
            animationType='fade'
            visible={isOpen}
            onRequestClose={closeModal}
        >
            <TouchableOpacity onPress={closeModal} activeOpacity={0.8} style={styles.returnBtn}>
                <View style={styles.returnView}>
                    <ChevronLeft height={18} fill='#FFF' />
                    <Text style={styles.returntxt}>
                        retour
                    </Text>
                </View>
            </TouchableOpacity>
            <Swiper
                loop={false}
                style={styles.wrapper}
                index={itemIndex}
                showsPagination={false}
            >
                {
                    images.map((uri, key) => (
                        <Slide key={key} uri={uri} />
                    ))
                }
            </Swiper>
        </Modal>
    )
}