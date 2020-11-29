import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button } from 'react-native';

const InputObjetivo = props => {
    const [objetivoDigitado, setObjetivoDigitado] = useState('');

    const inputObjetivoHandler = textoDigitado => setObjetivoDigitado(textoDigitado);

    return (
    <View style={estilos.container}>
        <TextInput 
        placeholder="Objetivo do curso" 
        style={estilos.input}
        onChangeText={inputObjetivoHandler}
        value={objetivoDigitado}/>

        <Button title="Adicionar" onPress={() => props.aoAdicionarObjetivo(objetivoDigitado)}></Button>
    </View>
    )
}

const estilos = StyleSheet.create({
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

export default InputObjetivo;