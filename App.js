import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import HeadPage from './component/head';
import LoginComponent from './component/login';
import BottomPage from './component/bottom';
import UserView from './component/genericuserview';
import ItView from './component/genericitview';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyBtfnWy-8dWMZXEadeNNFx_i5SDV2HhEfQ",
  authDomain: "helpdeskproject-f6600.firebaseapp.com",
  projectId: "helpdeskproject-f6600",
  storageBucket: "helpdeskproject-f6600.appspot.com",
  messagingSenderId: "641829270871",
  appId: "1:641829270871:web:ae504107c6e60cd39a7a12",
  measurementId: "G-FLVX0QDWT5"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default function App() {
  const [user, setUser] = useState(null);
  const [isItUser, setIsItUser] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsItUser(user.email.includes('@it'));
      } else {
        setUser(null);
        setIsItUser(false);
      }
    });

   
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <HeadPage />
      {user ? (isItUser ? <ItView /> : <UserView />) : <LoginComponent />}
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