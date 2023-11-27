import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const MainLayout = ({ children }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // You can adjust these styles as per your design
    alignItems: 'center',
    backgroundColor: '#fff', // Assuming a white background; change as needed
  },
});

export default MainLayout;
