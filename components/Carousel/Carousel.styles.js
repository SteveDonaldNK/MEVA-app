import { StyleSheet } from 'react-native';
import { COLORS, FONT, PADDINGS, SIZES } from '../../constants';


export default styles = StyleSheet.create({
    returnView: {
      display: 'flex',
      flexDirection: "row",
      gap: 5,
      alignItems: 'center',
      backgroundColor: 'transparent',
      width: "100%",
      padding: PADDINGS.page
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
    loading: {
      flex: 1,
    }
  })