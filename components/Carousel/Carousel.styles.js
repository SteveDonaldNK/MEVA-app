import { Dimensions, StyleSheet } from 'react-native';
import { COLORS, FONT, PADDINGS, SIZES } from '../../constants';

const { width } = Dimensions.get('window');

export default styles = StyleSheet.create({
    returnView: {
      display: 'flex',
      flexDirection: "row",
      gap: 5,
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: "100%",
      padding: PADDINGS.sm
    },
    returnBtn: {
      position: "absolute",
      zIndex: 1,
    },
    returntxt: {
      color: COLORS.white,
      fontFamily: FONT.medium,
      fontSize: SIZES.sm,
    },
    wrapper: {
      position: 'absolute',
      backgroundColor: COLORS.dark,
    },
    slide: {
      flex: 1,
      paddingVertical: 100,
      justifyContent: 'center',
      backgroundColor: 'transparent'
    },
    image: {
      width,
      flex: 1,
      backgroundColor: 'transparent'
    },
    loading: {
      flex: 1,
    }
  })