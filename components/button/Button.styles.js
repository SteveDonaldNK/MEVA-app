import { StyleSheet } from "react-native"
import { COLORS, FONT, SIZES } from "../../constants";

const styles = StyleSheet.create({
    btn: {
        paddingVertical: 15,
        borderWidth: 1.5,
        borderColor: COLORS.white,
    },
    btnTitle: {
        textAlign: "center",
        fontFamily: FONT.medium,
    }
}) 

export default styles;