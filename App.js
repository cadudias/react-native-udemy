import React, { useState } from 'react';
import { View, FlatList, Button } from 'react-native';

import ItemObjetivo from './components/ItemObjetivo';
import InputObjetivo from './components/InputObjetivo';

export default function App() {
  const [objetivos, setObjetivos] = useState([]);
  const [abrirModal, setAbrirModal] = useState(false);

  const adicionarObjetivo = objetivoDigitado => { 
  setObjetivos(
    objetivosAtuais => [
      ...objetivosAtuais, 
      { 
        id: Math.random().toString(), 
        value: objetivoDigitado
      }
    ]);
    setAbrirModal(false);
  };

  const removerObjetivo = idObjetivo => setObjetivos(objetivosAtuais => {
    return objetivosAtuais.filter((objetivo) => objetivo.id != idObjetivo);
  });

  const cancelar = () => {
    setAbrirModal(false);
  }

  return (
    <View>
      <Button
        title="Adicionar objetivo" 
        onPress={() => setAbrirModal(true)}
      />

      <InputObjetivo 
        visivel={abrirModal} 
        aoAdicionarObjetivo={adicionarObjetivo}
        aoCancelar={cancelar}
      />

      <FlatList data={objetivos} renderItem={objetivo => (
        <ItemObjetivo 
          id={objetivo.item.id}
          title={objetivo.item.value} 
          aoRemover={removerObjetivo}
        />
      )}/>
    </View>
  );
}