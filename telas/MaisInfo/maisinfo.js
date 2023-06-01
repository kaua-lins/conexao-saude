import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
import Header from '../../components/header';
import Novo from '../../components/novo';
import Adicionar from '../../components/adicionar';

export default function App() {

  const [lista, setLista] = useState ([
    { texto: 'Psicólogo', key: '1'},
    { texto: 'Dentista', key: '2'},
    { texto: 'Ortopedista', key: '3'},
  ])

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(texto => texto.key != key)
      }
    )
  }

  const submeterInformacao = (texto) => {
    setLista((prevLista) => {
      return [
        { texto: texto, key: Math.random().toString() },
        ...prevLista
      ];
    })  
  }
  
  return (
    <View style={styles.container}>
      <Header/>

      <View style={styles.conteudo}>
        <View style={styles.estilo}>

          <Adicionar funcao={submeterInformacao} />

          <FlatList
            data={lista}
            renderItem={({ item }) => (
              <Novo props={item} funcao={apertarItem} />
            )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  conteudo: {
    padding: 40,
  },
});
