import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppContent from './App.jsx'; // Import the App content from App.jsx

export default function App() {
  return (
    <View style={styles.container}>
      <AppContent /> {/* Render the main App content */}
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
