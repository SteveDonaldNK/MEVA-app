import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SurveyProvider, { userSurvey } from './contexts/SurveyProvider';
import Main from './Main';
import { Onboarding } from './screens';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    "PolySansTrialBold": require('./assets/fonts/PolySansTrial-Bulky.otf'),
    "PolySansTrialMedium": require('./assets/fonts/PolySansTrial-Median.otf'),
    "PolySansTrialRegular": require('./assets/fonts/PolySansTrial-Neutral.otf'),
    "PolySansTrialThin": require('./assets/fonts/PolySansTrial-Slim.otf'),
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

  return (
    <NavigationContainer>
      {
        hasAnswered ? <Main /> : <OnboardingStack />
      }
    </NavigationContainer>
  )
}

function OnboardingStack() {
  const Stack = createNativeStackNavigator()
  
  return(
    <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name='onboarding' component={Onboarding} />
    </Stack.Navigator>
  )
}
