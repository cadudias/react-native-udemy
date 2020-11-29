import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const InputObjetivo = props => {
    const [objetivoDigitado, setObjetivoDigitado] = useState('');

    const inputObjetivoHandler = textoDigitado => setObjetivoDigitado(textoDigitado);

    const aoAdicionarObjetivo = () => {
        props.aoAdicionarObjetivo(objetivoDigitado);
        setObjetivoDigitado('');
    }

    const aoCancelar = () => {
        props.aoCancelar();
        setObjetivoDigitado('');
    }

    return (
    <Modal visible={props.visivel}>
        <View style={estilos.container}>
            <TextInput 
                placeholder="Objetivo do curso" 
                style={estilos.input}
                onChangeText={inputObjetivoHandler}
                value={objetivoDigitado}
            />

            <View style={estilos.containerBotoes}>
                <View style={estilos.botao}>
                    <Button 
                        title="Adicionar" 
                        onPress={aoAdicionarObjetivo}
                    />
                </View>
                
                <View style={estilos.botao}>
                    <Button 
                        title="Cancelar" 
                        color="red"
                        onPress={aoCancelar}
                    />
                </View>
            </View>
        </View>
    </Modal>
    )
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        alignItems: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#000',
        width: '80%',
        padding: 10
    },
    containerBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%',
        marginTop: 10
    },
    botao: {
        width: '45%'
    }
});

export default InputObjetivo;