import { StyleSheet } from "react-native";
import { COLORS, FONT, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    card: {
        width: 120,
        height: 80, 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    label: {
        color: COLORS.white,
        fontFamily: FONT.medium,
        fontSize: SIZES.xs,
    }
})