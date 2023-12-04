import { StyleSheet } from "react-native";
import { COLORS, PADDINGS, FONT, SIZES, IMAGES } from '../../constants';

const styles = StyleSheet.create({
    frame: {
        width: "100%",
        height: "100%",
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
       width: "100%",
       display: "flex",
       gap: 15,
    }
})

export default styles