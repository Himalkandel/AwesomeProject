import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainLayout from 'src\layouts\MainLayout.jsx';

function AboutScreen() {
  return (
    <MainLayout>
      <View style={styles.container}>
        <Text style={styles.text}>App Name: AwesomeProject</Text>
        <Text style={styles.text}>Developer: [Your Name]</Text>
        <Text style={styles.text}>Date: {new Date().toLocaleDateString()}</Text>
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default AboutScreen;
