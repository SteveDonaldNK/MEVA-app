import React, { useEffect } from 'react'
import { StatusBar } from 'react-native';
import { Redirect, Tabs } from 'expo-router'
import { COLORS, SIZES } from '../../constants';
import { ContributionIcon, HomeIcon, LibraryIcon, NewsIcon, MeditationIcon } from '../../constants/icons'
import * as NavigationBar from 'expo-navigation-bar';
import { userSurvey } from './../../contexts/SurveyProvider';

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
            <Tabs screenOptions={{ 
              tabBarHideOnKeyboard: true,
              headerShown: false,
              tabBarActiveBackgroundColor: 'red',
              tabBarInactiveBackgroundColor: 'white',
              tabBarItemStyle: {
                borderRadius: 50,
              },
              tabBarStyle: { 
                backgroundColor: COLORS.white,
              }}}>
              <Tabs.Screen
                name="Home/Home"
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: () => <HomeIcon fill={COLORS.primary} height={SIZES.lg} width={SIZES.lg} />
                }}
              />
              <Tabs.Screen
                name="Meditation/Meditation"
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: () => <MeditationIcon fill={COLORS.primary} height={SIZES.lg} width={SIZES.lg} />
                }}
              />
              <Tabs.Screen
                name="News/News"
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: () => <NewsIcon fill={COLORS.primary} height={SIZES.lg} width={SIZES.lg} />
                }}
              />
              <Tabs.Screen
                name="Library/Library"
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: () => <LibraryIcon fill={COLORS.primary} height={SIZES.lg} width={SIZES.lg} />
                }}
              />
              <Tabs.Screen
                name="Contribution/Contribution"
                options={{
                  tabBarShowLabel: false,
                  tabBarIcon: () => <ContributionIcon fill={COLORS.primary} height={SIZES.lg} width={SIZES.lg} />
                }}
              />
            </Tabs>
          </> :
          <Redirect href='' />
        }
      </>
  )
}