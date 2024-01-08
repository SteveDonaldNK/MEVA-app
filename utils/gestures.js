import { Animated } from "react-native";


const onPinchEvent = (scale) => Animated.event([{
    nativeEvent: { scale }
}],
{ useNativeDriver: true });

const onPanEvent = (translateX, translateY) => Animated.event([{
    nativeEvent: {
        translationX: translateX,
        translationY: translateY,
    }
}],
{ useNativeDriver: true })


export {
    onPanEvent,
    onPinchEvent,
}