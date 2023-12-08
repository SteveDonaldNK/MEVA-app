import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        width: SIZES.full,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textContainer: {
        display: "flex",
        gap: 5
    },
    heading: {
        fontFamily: FONT.medium,
        fontSize: SIZES.lg,
        color: COLORS.dark,
    },
    subHeading: {
        fontFamily: FONT.regular,
        fontSize: SIZES.xs,
        color: COLORS.gray,
    }

})