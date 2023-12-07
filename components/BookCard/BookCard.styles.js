import { StyleSheet } from "react-native";
import { COLORS, FONT, PADDINGS, SIZES } from "../../constants";

export default styles = StyleSheet.create({
    card: {
        display: "flex",
        flexDirection: "row",
        paddingHorizontal: PADDINGS.page,
        gap: 20,
    }, 
    imgContainer: {
        height: 102,
        width: 82,
    },
    box: {
        height: 100,
        width: 80,
        position: "absolute",
    },
    img: {
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: 'rgba(208, 209, 212, 0.30)',
        zIndex: 1,
        left: 0,
        top: 0

    },
    shadow: {
        backgroundColor: 'rgba(208, 209, 212, 0.30)',
        right: 0,
        bottom: 0
    },
    action: {
        display: "flex",
        justifyContent: "space-between",
        paddingVertical: 10
    },
    infoContainer: {
        display: "flex",
    },
    title: {
        fontFamily: FONT.medium,
        fontSize: SIZES.sm,
    },
    btn: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 10,
        paddingHorizontal: 20,
        width: 100
    }
})