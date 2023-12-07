import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { SplashScreen, Stack } from 'expo-router';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';
import SurveyProvider from '../contexts/SurveyProvider';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "PolySansTrialBold": require('../assets/fonts/PolySansTrial-Bulky.otf'),
    "PolySansTrialMedium": require('../assets/fonts/PolySansTrial-Median.otf'),
    "PolySansTrialRegular": require('../assets/fonts/PolySansTrial-Neutral.otf'),
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SurveyProvider>
      <RootLayoutNav />
    </SurveyProvider>
  )
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
      // {/* <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}> */}
        <Stack screenOptions={{headerShown: false, animation: 'fade'}}>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} /> 
        </Stack>
      // {/* </ThemeProvider> */}
  );
}
