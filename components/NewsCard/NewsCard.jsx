import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './NewsCard.styles'
import { COLORS, IMAGES } from '../../constants'
import { MoreIcon } from '../../constants/icons'
import _ from 'lodash'

export default function NewsCard({news}) {
    
    const [expanded, setExpanded] = useState(false);
    const row1 = news.images.slice(0, 2);
    const row2 = news.images.slice(2, 5);

    function trunc() {
        if(expanded) {
            return (
                <Text style={styles.postBody}>
                    {_.capitalize(news?.content, {length: 100, separator: ' '})}
                </Text>
            )
        }
        return (
            <Text style={styles.postBody}>
                {_.capitalize(_.truncate(news?.content, {length: 100, separator: ' '}))}
                <Text style={styles.readMore}>
                    Lire plus
                </Text>
            </Text>
        )
    }

  return (
    <View style={styles.container}>
        <View style={styles.postHeader}>
            <Image style={styles.img} source={IMAGES.Avatar} resizeMode='cover' />
            <View style={styles.postInfo}>
                <View style={styles.user}>
                    <Text style={styles.userName}>MEVA-Coron</Text>
                    <TouchableOpacity activeOpacity={0.5}>
                        <MoreIcon />
                    </TouchableOpacity>
                </View>
                <Text style={styles.time}>8h</Text>
            </View>
        </View>
        {
            news.content 
            && 
            <TouchableOpacity onPress={() => setExpanded(!expanded)} activeOpacity={0.65}>
                {trunc()}
            </TouchableOpacity>
        }
        {   
            news.images.length !== 0 && 
            <View style={styles.postMediaContainer}>
                <View style={styles.topRow}>
                    {
                        row1.map((link, index) => (
                            <TouchableOpacity activeOpacity={0.5} style={{flex: 1, backgroundColor: COLORS.dark}} key={index} >
                                <Image resizeMode='cover' style={styles.postMedia} source={{uri: link}}  />
                            </TouchableOpacity>
                        ))
                    }
                </View>
                { news.images.length > 1 && 
                    <View style={styles.bottomRow}>
                        {
                            row2.map((link, index) => (
                                <TouchableOpacity activeOpacity={0.5} style={{flex: 1, backgroundColor: COLORS.dark}} key={index} >
                                    <View style={{flex: 1}}>
                                        <Image resizeMode='cover' style={styles.postMedia} source={{uri: link}}  />
                                        {index === row2.length - 1 && <View style={styles.additionalImages}><Text style={styles.imagesLeft}>+{news.images.length - 5}</Text></View>}
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                }
            </View>
        }
    </View>
  )
}