import { StyleSheet } from "react-native";
import { COLORS, FONT, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        paddingHorizontal: PADDINGS.page,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    header: {
        fontFamily: FONT.medium,
        fontSize: SIZES.lg,
    },
    link: {
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1
    },
    text: {
        color: COLORS.gray
    }
})