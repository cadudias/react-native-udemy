import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ItemObjetivo = props => {
    return (
    <View style={estilos.itemLista}>
        <Text> {props.title} </Text>
    </View>
    )
}

const estilos = StyleSheet.create({
    itemLista: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default ItemObjetivo;