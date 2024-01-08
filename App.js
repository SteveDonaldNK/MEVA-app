import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyProvider, { userSurvey } from './contexts/SurveyProvider';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Onboarding,  } from './screens';
import Tabs from './navigation/Tabs'
import Audio from './screens/audio/Audio';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    "PolySansTrialBold": require('./assets/fonts/PolySansTrial-Bulky.otf'),
    "PolySansTrialMedium": require('./assets/fonts/PolySansTrial-Median.otf'),
    "PolySansTrialRegular": require('./assets/fonts/PolySansTrial-Neutral.otf'),
    "PolySansTrialThin": require('./assets/fonts/PolySansTrial-Slim.otf'),
    "InterBold": require('./assets/fonts/Inter-Bold.ttf'),
    "InterMedium": require('./assets/fonts/Inter-Medium.ttf'),
    "InterSemiBold": require('./assets/fonts/Inter-SemiBold.ttf'),
    "InterRegular": require('./assets/fonts/Inter-Regular.ttf'),
    "InterThin": require('./assets/fonts/Inter-Light.ttf'),
  });

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
    <SafeAreaProvider>
      <SurveyProvider>
        <RootNavigator />
      </SurveyProvider>
    </SafeAreaProvider>
  );
}

function RootNavigator() {
  const { hasAnswered } = userSurvey();
  const Stack = createNativeStackNavigator();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='onboarding' screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
          {
            hasAnswered ? <Stack.Screen name='Tabs' component={Tabs} /> : <Stack.Screen name='onboarding' component={Onboarding} />
          }
          <Stack.Screen name='audio' component={Audio} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
