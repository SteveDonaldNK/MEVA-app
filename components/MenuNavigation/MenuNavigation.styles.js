import { StyleSheet } from "react-native";
import { COLORS, FONT, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        display: "flex",
        flexDirection: "row",
        borderBottomWidth: 1.5,
        borderColor: COLORS.lightGray
    },
    innerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: "center"
    },
    iconContainer: {
        paddingVertical: PADDINGS.page,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: PADDINGS.page,
    },
    label: {
        fontFamily: FONT.regular,
        fontSize: SIZES.md,
        color: COLORS.dark,
    }
})