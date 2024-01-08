import { Dimensions } from "react-native";

const { height, width } = Dimensions.get("screen");

const COLORS = {
    primary: "#141829",
    secondary: "#434654",
    tertiary: "#72747F",

    gray: "#A1A3A9",
    lightGray: "#D0D1D4",

    white: "#FFFFFF",
    dark: "#000000",

    skyBlue: "#A2D2FF",
    blue: "#47AEF3",
    glass: "transparent",
};

const FONT = {
    thin: "PolySansTrialThin",
    regular: "PolySansTrialRegular",
    medium: "PolySansTrialMedium",
    bold: "PolySansTrialBold",
    articleThin: "InterThin",
    articleRegular: "InterRegular",
    articleMedium: "InterMedium",
    articleSemiBold: "InterSemiBold",
    articleBold: "InterBold"
};

const SIZES = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22,
    xxl: 24,
    sxl: 32,
    full: "100%",
    ScreenHeight: height,
    ScreenWidth: width
};

const PADDINGS = {
    page: 15,
    element: 25,
    gap: 10,
    gapMd: 20,
}

export {
    COLORS,
    FONT,
    SIZES,
    PADDINGS
}