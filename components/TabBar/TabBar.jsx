import { View, Pressable } from 'react-native';
import TabIcon from './TabIcon/TabIcon';
import { COLORS } from '../../constants';

export default function TabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', height: 52, backgroundColor: COLORS.white, borderTopWidth: 1, borderColor: 'rgba(208, 209, 212, 0.2)' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Pressable
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <TabIcon route={label} isFocused={isFocused} />
          </Pressable>
        );
      })}
    </View>
  );
}