import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 15,
        borderWidth: 1.5,
    },
    btnTitle: {
        textAlign: "center",
        fontFamily: FONT.medium,
        fontSize: SIZES.xs,
    }
}) 

export default styles;