import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const GoalInput= props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => setEnteredGoal(enteredText);

    return (
    <View style={styles.container}>
        <TextInput 
        placeholder="Course Goal" 
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}/>

        <Button title="Add" onPress={() => props.onAddGoal(enteredGoal)}></Button>
    </View>
    )
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
    }
});

export default GoalInput;