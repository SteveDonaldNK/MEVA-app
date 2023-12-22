import { StyleSheet } from "react-native";
import { COLORS, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        paddingHorizontal: PADDINGS.page,
    },
    innerContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: "rgba(208, 209, 212, 0.50)",
        paddingHorizontal: SIZES.sm,
    },
    input: {
        flex: 1,
        paddingVertical: 8,
        // backgroundColor: 'red',
    }
})