import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

export default Styles = StyleSheet.create({
    container: {
        width: 82,
        display: "flex",
        gap: 10
    },
    imgContainer: {
        height: 102,
    },
    box: {
        height: 100,
        width: 80,
        position: "absolute",
    },
    img: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: 'rgba(208, 209, 212, 0.30)',
        zIndex: 1,
        left: 0,
        top: 0
    },
    shadow: {
        backgroundColor: 'rgba(208, 209, 212, 0.70)',
        right: 0,
        bottom: 0
    },
    name: {
        fontFamily: FONT.medium,
        fontSize: SIZES.xs,
        textAlign: "center",
        color: COLORS.dark
    },
    author: {
        fontSize: SIZES.xs-2,
        textAlign: "center",
        color: COLORS.tertiary
    }
})