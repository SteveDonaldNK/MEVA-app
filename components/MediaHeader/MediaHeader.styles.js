import { StyleSheet } from "react-native";
import { COLORS, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.glass,
        position: "absolute",
        zIndex: 2,
        top: 0,
        width: SIZES.full,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: PADDINGS.page,
    },
    icon: {
        padding: 8,
        borderWidth: 1,
        borderColor: COLORS.white,
        borderRadius: 50,
    }
})