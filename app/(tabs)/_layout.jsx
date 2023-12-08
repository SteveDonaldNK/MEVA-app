import React from 'react'
import { StatusBar, TouchableOpacity } from 'react-native';
import { Redirect, Tabs } from 'expo-router'
import * as NavigationBar from 'expo-navigation-bar';
import { userSurvey } from './../../contexts/SurveyProvider';
import TabBar from '../../components/TabBar/TabBar';

export default function Layout() {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");
  const {hasAnswered} = userSurvey();

  return (
    <>
      {
      hasAnswered ?
      <>
        <StatusBar translucent={false} barStyle="dark-content" />
        <Tabs tabBar={props=>
          <TabBar {...props} />} 
            screenOptions={{ 
              tabBarHideOnKeyboard: true,
              headerShown: false
            }}
          >
          <Tabs.Screen name="Home/Home" />
          <Tabs.Screen name="Meditation/Meditation" />
          <Tabs.Screen name="News/News" />
          <Tabs.Screen name="Library/Library" />
          <Tabs.Screen name="Contribution/Contribution" />
        </Tabs>
      </> :
      <Redirect href='' />
      }
    </>
  )
}