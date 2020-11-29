import React, { useState } from 'react';
import { View, FlatList } from 'react-native';

import ItemObjetivo from './components/ItemObjetivo';
import InputObjetivo from './components/InputObjetivo';

export default function App() {
  const [objetivos, setObjetivos] = useState([]);

  const adicionarObjetivos = objetivoDigitado => setObjetivos(
    objetivosAtuais => [
      ...objetivosAtuais, 
      { 
        id: Math.random().toString(), 
        value: objetivoDigitado
      }
    ]
  );

  return (
    <View>
      <InputObjetivo aoAdicionarObjetivo={adicionarObjetivos}/>

      <FlatList data={objetivos} renderItem={objetivo => (
        <ItemObjetivo title={objetivo.item.value}/>
      )}/>
    </View>
  );
}
