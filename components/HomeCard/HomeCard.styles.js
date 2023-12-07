import { StyleSheet } from "react-native";
import { COLORS, FONT, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    bgImg: {
        height: 200,
        width: 275
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: SIZES.full,
        height: SIZES.full
    },
    content: {
        flex: 1,
        paddingVertical: PADDINGS.page,
        paddingHorizontal: 15,
        display: 'flex',
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
    },
    textContainer: {
        display: 'flex',
        gap: 10
    },
    type: {
        fontFamily: FONT.medium,
        fontSize: SIZES.xs,
        color: COLORS.white,
        letterSpacing: 1.5,
    },
    title: {
        fontFamily: FONT.bold,
        fontSize: SIZES.lg,
        color: COLORS.white,
    },
    btnContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    btn: {
        paddingHorizontal: 20, 
        paddingVertical: 10,
    }
})