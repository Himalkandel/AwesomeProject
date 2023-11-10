/**
 * My To Do List App
 *
 * @format
 */

import React, { useState } from 'react'; // Import useState
import {
  SafeAreaView,
  StyleSheet,
  StatusBar // Import StatusBar
} from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

function App() {
  const [tasks, setTasks] = useState([ //variables
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} /> {/* Pass tasks to ToDoList */}
      <ToDoForm /> {/* ToDoForm component remains the same */}
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
