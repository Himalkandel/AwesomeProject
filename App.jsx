/**
 * My To Do List App
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';
import ToDoList from './ToDoList'; 
import ToDoForm from './ToDoForm'; 

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList /> {/* Use ToDoList component */}
      <ToDoForm /> {/* Use ToDoForm component */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default App;
