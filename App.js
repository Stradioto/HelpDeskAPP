import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import React, { Component } from 'react';
import HeadPage from './component/head';
import LoginComponent from './component/login'
import BottomPage from './component/bottom';
import UserView from './component/genericuserview';
import ItView from './component/genericitview';
import ChatComponent from './component/chatcomponent';


//----------Pages--------------------------

//<LoginComponent /> : Login Page

//<HeadPage /> : Header

//<BottomPage /> : Bellow just in case

//<UserView /> : Generic user view

//<ItView /> : Generic IT view

//< />

//------------------------------------------

export default function App() {
  return (
    <View style={styles.container}>
      
        <HeadPage />
      
        <ChatComponent />

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
