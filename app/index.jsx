import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Welcome from '../components/Welcome/Welcome'
import * as NavigationBar from 'expo-navigation-bar';
import { COLORS } from '../constants';

export default function index() {
  NavigationBar.setBackgroundColorAsync(COLORS.primary)

  return (
    <SafeAreaView>
      <StatusBar translucent barStyle={'light-content'} />
      <Welcome />
    </SafeAreaView>
  )
}