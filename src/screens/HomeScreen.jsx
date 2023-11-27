import React from 'react';
import { Button, View } from 'react-native';
import ToDoList from 'src\Components\ToDoList.jsx';
import ToDoForm from 'src\Components\ToDoForm.jsx';
import MainLayout from 'src\layouts\MainLayout.jsx';

function HomeScreen({ navigation, tasks, addTask }) {
  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <View style={{ marginTop: 20 }}>
        <Button
          title="Go to About"
          onPress={() => navigation.navigate('About')}
        />
      </View>
    </MainLayout>
  );
}

export default HomeScreen;
