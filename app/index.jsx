import { SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import Welcome from '../components/welcome/Welcome'
import * as NavigationBar from 'expo-navigation-bar';
import { COLORS } from '../constants';

export default function index() {
  NavigationBar.setBackgroundColorAsync(COLORS.primary)

  return (
    <SafeAreaView>
      <StatusBar translucent />
      <Welcome />
    </SafeAreaView>
  )
}