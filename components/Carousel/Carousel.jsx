import React, { useState, useCallback, useEffect } from 'react'
import { Text, TouchableOpacity, View, Image, ActivityIndicator, Modal } from 'react-native'
import Swiper from 'react-native-swiper'
import { Model } from 'react-model'
import styles from './Carousel.styles'
import { COLORS } from '../../constants'
import { ChevronLeft } from '../../constants/icons'
import { useNavigation } from '@react-navigation/native'

const Slide = props => {
  return (
    <View style={styles.slide}>
      <Image
        resizeMode='contain'
        onLoad={() => {
          props.loadHandle(props.i)
        }}
        style={styles.image}
        source={{ uri: props.uri }}
      />
      {!props.loaded && (
        <View style={styles.loading}>
            <ActivityIndicator size='large' color={COLORS.blue} />
        </View>
      )}
    </View>
  )
}

const Carousel = ({ isOpen, setIsOpen, images, itemIndex }) => {
    const SlideSchema = {
        state: {
            imgList: images,
            loadQueue: []
        },
        actions: {
            loaded: index => {
                return state => {
                    state.loadQueue[index] = 1
                }
            }
        }
    }
    const [{ useStore }] = useState(() => Model(SlideSchema))
    const [state, actions] = useStore()
    const navigation = useNavigation();
    const loadHandle = useCallback((i) => {
        actions.loaded(i)
    }, [])

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        navigation.addListener('beforeRemove', (e) => {
            isOpen && closeModal();
            e.preventDefault();
        })
    }, [navigation])

    return (
        <Modal
            animationType='fade'
            visible={isOpen}
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
                showsPagination = {false}
                loadMinimal
                loadMinimalSize={1}
                loop={false}
                style={styles.wrapper}
                index={itemIndex}
            >
                {state.imgList.map((item, i) => (
                    <Slide
                    loadHandle={loadHandle}
                    uri={item}
                    i={i}
                    key={i}
                    loaded={state.loadQueue[i]}
                    />
                ))}
            </Swiper>
        </Modal>
    )
}

export default Carousel