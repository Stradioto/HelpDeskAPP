import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import React, { Component } from 'react';
import HeadPage from './component/head';
import LoginComponent from './component/login'
import BottomPage from './component/bottom';

export default function App() {
  return (
    <View style={styles.container}>
      
        <HeadPage />
      
        <LoginComponent />

        <BottomPage />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
