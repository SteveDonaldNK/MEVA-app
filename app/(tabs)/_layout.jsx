import React, { useEffect } from 'react'
import { StatusBar, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Redirect, Tabs, router } from 'expo-router'
import { COLORS, SIZES } from '../../constants';
import { ContributionIcon, HomeIcon, LibraryIcon, NewsIcon, MeditationIcon } from '../../constants/icons'
import * as NavigationBar from 'expo-navigation-bar';
import { userSurvey } from './../../contexts/SurveyProvider';
import TabBar from '../../components/TabBar/TabBar';

export default function Layout() {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");
  const {hasAnswered} = userSurvey();

  const TabButton = ({Icon}) => (
    <TouchableOpacity style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
      <Icon />
    </TouchableOpacity>
  )

  return (
    <>
      {
      hasAnswered ?
      <>
        <StatusBar translucent={false} barStyle="dark-content" />
        <Tabs initialRouteName='Home/Home' tabBar={props=>
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