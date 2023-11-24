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
<<<<<<< Updated upstream
  return (
    <SafeAreaView style={styles.container}>
      <ToDoList /> {/* Use ToDoList component */}
      <ToDoForm /> {/* Use ToDoForm component */}
=======
  const [tasks, setTasks] = useState([ //variables
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  
  const addTask = (taskText) => {
    if (!tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };
return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} /> {/* Pass tasks to ToDoList */}
      <ToDoForm addTask={addTask} /> {/* ToDoForm component remains the same */}
>>>>>>> Stashed changes
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
