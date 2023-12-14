import { StyleSheet } from "react-native";
import { COLORS, PADDINGS, FONT, SIZES } from '../../constants';

const styles = StyleSheet.create({
    frame: {
        width: SIZES.full,
        height: SIZES.full,
    },
    container: {
        padding: PADDINGS.page,
        flex: 1,
        display: "flex",
        justifyContent: "flex-end",
        gap: 20,
    },
    image: {
        flex: 1,
    },
    text: {
        color: COLORS.white,
        textAlign: "center",
    },
    heading: {
        fontFamily: FONT.bold,
        fontSize: SIZES.sxl,
    },
    paragraph: {
        fontFamily: FONT.regular,
        fontSize: SIZES.xs,
    },
    btnContainer: {
       width: SIZES.full,
       display: "flex",
       gap: 15,
    }
})

export default styles