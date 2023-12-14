import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        backgroundColor: "rgba(114, 116, 127, 0.65)",
        borderRadius: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        gap: 10,
    },
    date: {
        fontFamily: FONT.regular,
        fontSize: SIZES.xs,
        color: COLORS.white
    }
})