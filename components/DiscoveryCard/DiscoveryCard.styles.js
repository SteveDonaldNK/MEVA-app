import { StyleSheet } from "react-native";
import { COLORS, FONT, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        height: 300,
        width: 260,
        display: "flex",
        justifyContent: "flex-end",
    },
    content: {
        flex: 1,
        gap: 20,
        justifyContent: 'flex-end',
    },
    textContainer: {
        paddingHorizontal: PADDINGS.page,
        display: "flex",
        gap: 20,
    },
    title: {
        color: COLORS.white,
        fontFamily: FONT.medium,
        fontSize: SIZES.lg,
    },
    text: {
        color: COLORS.white,
        fontFamily: FONT.regular,
        fontSize: SIZES.xs,
    },
    locationContainer: {
        paddingHorizontal: PADDINGS.page,
        height: 70,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 20,
        borderTopWidth: 1,
        borderColor: COLORS.lightGray
    },
    location: {
        color: COLORS.white,
        fontFamily: FONT.regular,
        fontSize: SIZES.sm,
    }
})