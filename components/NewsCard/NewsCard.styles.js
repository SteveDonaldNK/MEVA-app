import { StyleSheet } from "react-native";
import { COLORS, FONT, PADDINGS, SIZES } from "../../constants";

const flexbox = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
}

export default styles = StyleSheet.create({
    container: {
        paddingVertical: PADDINGS.page,
        paddingHorizontal: PADDINGS.page,
        display: "flex",
        gap: PADDINGS.page - 5,
    },
    postHeader: {
        ...flexbox,
        gap: 20
    },
    postInfo: {
        flex: 1,
    },
    img: {
        height: 40,
        width: 40
    }, 
    user: {
        ...flexbox,
        justifyContent: "space-between"
    },
    userName: {
        fontFamily: FONT.articleBold,
        fontSize: SIZES.xs-1,
        color: COLORS.dark,
    },
    time: {
        fontFamily: FONT.articleMedium,
        fontSize: SIZES.xs-1,
        color: COLORS.tertiary,
    },
    postBody: {
        fontFamily: FONT.articleRegular,
        fontSize: SIZES.xs,
        color: COLORS.dark,
    },
    readMore: {
        fontFamily: FONT.articleMedium,
        fontSize: SIZES.xs,
        color: COLORS.gray,
    },
    postMediaContainer: {
        width: SIZES.full,
        height: SIZES.ScreenWidth/1.8,
        display: "flex",
        gap: 2
    },
    topRow: {
        flex: 1,
        flexDirection: "row",
        gap: 2,
    },
    bottomRow: {
        flex: 0.8,
        flexDirection: "row",
        gap: 2,
    },
    postMedia: {
        flex: 1,
    },
    additionalImages: {
        top: 0,
        left: 0,
        position: "absolute",
        height: SIZES.full,
        width: SIZES.full,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    imagesLeft: {
        fontSize: SIZES.ScreenHeight*0.045,
        color: COLORS.white,
    }
})