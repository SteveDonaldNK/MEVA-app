import { StyleSheet } from "react-native";
import { COLORS, FONT, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    btn: {
        width: SIZES.full,
        padding: PADDINGS.gap - 2,
        backgroundColor: COLORS.white,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: PADDINGS.gap,
    },
    img: {
        height: 55,
        width: 55,
        borderRadius: 8,
    },
    textContainer: {
        display: "flex",
        justifyContent: "space-between",
        flexShrink: 1,
    },
    title: {
        fontFamily: FONT.medium,
        fontSize: SIZES.xs+1,
        textTransform: "capitalize"
    },
    location: {
        fontFamily: FONT.regular,
        fontSize: SIZES.xs,
        color: COLORS.gray,
    }
})