import React from 'react'
import { Text, TouchableOpacity, View, Modal } from 'react-native'
import styles from './Carousel.styles'
import { ChevronLeft } from '../../constants/icons'
import ImageViewer from 'react-native-image-zoom-viewer';

export default function Carousel({ isOpen, setIsOpen, images, itemIndex }) {
    function closeModal() {
        setIsOpen(false);
    }
    console.log(images)

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
            <ImageViewer 
            doubleClickInterval={250}
            renderIndicator={() => null}
            menus={() => null}
            index={itemIndex}
            imageUrls={images}/>
        </Modal>
    )
}