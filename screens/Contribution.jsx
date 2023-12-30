import { View, SafeAreaView, StyleSheet, Dimensions, Text, Image } from 'react-native'
import Animated, { interpolate, useAnimatedRef, useAnimatedStyle, useScrollViewOffset } from 'react-native-reanimated'
import React from 'react'
import { COLORS, FONT, IMAGES, PADDINGS, SIZES } from '../constants'
import Header from '../components/Header/Header'

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
      ]
    };
  })

  return (
    <SafeAreaView>
      <Header 
        style={{backgroundColor: "white", paddingHorizontal: 24, paddingTop: 24, paddingBottom: 5, position: "absolute", zIndex: 20}} 
        heading={"Contrinutions"} 
        subHeading={"Faites un don"} />
      <Animated.ScrollView ref={scrollRef} scrollEventThrottle={16} showsVerticalScrollIndicator={false} style={Styles.container}>
        <Animated.Image
          style={[Styles.imgBg, imageAnimatedStyle]} 
          source={IMAGES.funding} 
        />
        <View style={Styles.textContainer}>
          <Text style={Styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aut vel animi architecto hic, quam earum sapiente, debitis facilis iusto quibusdam nulla ratione nobis doloremque. Tenetur fugit cupiditate recusandae tempora pariatur at. Impedit quia incidunt sed, placeat aut necessitatibus, vitae neque, quae ipsa similique esse pariatur. Vel animi nihil ipsa nesciunt recusandae? Quas in, ipsum quisquam sit similique nihil eos vitae hic voluptatum fugiat ut veniam sed eveniet est placeat expedita corporis maxime nesciunt quam, officia quis doloremque. Quae ex doloribus alias incidunt pariatur totam obcaecati molestias laborum perferendis? Inventore quod dolorum alias explicabo, quidem, distinctio maxime nesciunt ut aliquam eligendi possimus earum aperiam! Nesciunt tenetur aspernatur error voluptatibus nobis ea praesentium ratione. Repellat necessitatibus, consectetur illum fugit amet vero omnis, officiis optio deleniti cum reiciendis rerum quidem inventore. Odit recusandae temporibus alias inventore dolor corrupti voluptate in ad? Quo error dicta esse tenetur fugit, maxime nobis repudiandae. Dolorem, adipisci cum quia accusamus placeat incidunt dolorum rerum architecto? Nisi tempore laudantium aspernatur modi veritatis alias voluptatum odio. Nostrum distinctio porro consectetur perferendis dolorem culpa velit, architecto iste rem ratione et molestiae repellat! Atque porro sapiente asperiores laboriosam quidem accusantium error facere aliquam! Maiores impedit vel cupiditate sequi, deleniti aspernatur eos harum itaque porro illum quae optio assumenda, ut mollitia eum nisi fuga eligendi eaque. Cupiditate, facere perferendis. Quae culpa deleniti sit labore, quo commodi aliquid nobis sunt officiis reprehenderit, debitis perferendis enim reiciendis accusamus molestiae aspernatur soluta dolorem asperiores eum! Nemo expedita, quibusdam illo temporibus quasi pariatur quia cum vel facilis voluptates adipisci dolores nobis iste magnam cumque et natus ipsam facere! Asperiores earum temporibus qui doloribus ut dolores assumenda dolor laudantium rem! Explicabo officiis quis asperiores natus ab obcaecati blanditiis commodi fugit fuga perferendis quod saepe quidem, facere unde veritatis qui assumenda amet minus pariatur officia impedit sequi autem aliquam? Tempora inventore atque quisquam dolorum, totam culpa hic cumque recusandae blanditiis voluptate voluptatum voluptates excepturi natus nobis error, aperiam iste earum similique quos, ea repellendus consequuntur? Vero, sit quae ipsa debitis cumque fugiat labore perspiciatis reiciendis minima, maxime error! Assumenda alias illum voluptatum dolor suscipit sequi ea iure, nobis eos eligendi, voluptatem harum iste ex quae saepe sunt perspiciatis, similique fugiat facilis sapiente! Quo impedit dolorem possimus animi saepe hic itaque sed pariatur quas, nesciunt recusandae illo iure, laborum fugit quae ipsum. Laudantium neque libero quo doloremque tenetur doloribus expedita cumque earum ab enim atque sequi, omnis aliquid distinctio error voluptate quia unde nostrum. Quaerat quod est voluptates nobis ab obcaecati commodi consequuntur. Eligendi excepturi nostrum ratione, amet ad repellat optio enim. Maxime, sunt soluta consequatur mollitia dolor aliquam quidem doloremque ipsam libero fugit quas laudantium autem in, illum pariatur esse quam rem suscipit aspernatur asperiores eum hic et voluptate maiores! Aspernatur sunt, cupiditate voluptatum quae iure omnis similique beatae veniam laborum numquam incidunt facilis neque dolorum cum perferendis assumenda magnam debitis nam quidem odio distinctio, hic voluptates voluptatem ea. Eaque fuga, blanditiis aliquam est dolore impedit deserunt animi. Corporis ipsa aliquam molestias voluptatibus consequatur id itaque eaque quasi.</Text>
        </View>
      </Animated.ScrollView>
    </SafeAreaView>
  )
}

const Styles = StyleSheet.create({
  container: {
    height: SIZES.full,
    width: SIZES.full,
    backgroundColor: COLORS.glass,
  },
  imgBg: {
    width,
    height: IMG_HEIGHT,
    resizeMode: "contain", 
  },
  textContainer: {
    width,
    backgroundColor: COLORS.white,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    elevation: 5,
    paddingVertical: PADDINGS.page,
    paddingHorizontal: PADDINGS.page/1.5
  },
  text: {
    fontFamily: FONT.regular,
  },
})