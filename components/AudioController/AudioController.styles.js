import { StyleSheet } from "react-native";
import { PADDINGS } from "../../constants";

export default styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: PADDINGS.page,
    }
})