import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = enteredGoal => setCourseGoals(
    currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}]);

  return (
    <View>
      <GoalInput onAddGoal={addGoalHandler}/>
      <FlatList data={courseGoals} renderItem={itemData => (
        <GoalItem title={itemData.item.value}/>
      )}/>
    </View>
  );
}
