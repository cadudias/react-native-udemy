import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => 
    setEnteredGoal(enteredText);
  
  const addGoalHandler = () => 
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}])

  return (
    <View>
      <View style={styles.container}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}/>

        <Button title="Add" onPress={addGoalHandler}></Button>
      </View>
      <FlatList data={courseGoals} renderItem={itemData => (
        <View style={styles.listItem}>
          <Text>
            {itemData.item.value}
          </Text>
        </View>
      )}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 40,
    alignItems: 'center'
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    width: '80%',
    padding: 10
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
