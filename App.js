import * as React from "react";
import { useState } from "react";
import { Button, View, Text, TextInput, StyleSheet, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./telas/TelaInicial/telainicial";
import ExibirDados from "./telas/ExibirDados/exibirdados"
import MaisInfo from "./telas/MaisInfo/maisinfo";
import Cadastro from "./telas/Cadastro/cadastro";
import Icon from "react-native-vector-icons/MaterialIcons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function Funcionamento({ route, navigation }) {
  return (
    <ScrollView>
      <View style={s.container}>
      <View style={s.tituloBox}>
        <Text style={s.titulo}>COMO FUNCIONAMOS?</Text>
      </View>

      <View style={s.box}>
        <View style={s.card}>
          <View style={s.subtituloBox}>
            <Text style={s.subtitulo}>OBJETIVO</Text>
            <Text><Icon name="star" size={28} color="#fff"/></Text>
          </View>
          
          <Text style={s.texto}>Temos como objetivo, gerar senhas do posto de saúde para não ser necessário enfrentar filas longas e outras adversidades.</Text>
        </View>

        <View style={s.card}>
          <View style={s.subtituloBox}>
            <Text style={s.subtitulo}>PÚBLICO ALVO</Text>
            <Text><Icon name="person" size={28} color="#fff"/></Text>
          </View>
          
          <Text style={s.texto}>Pessoas de baixa renda que dependem totalmente do SUS, para ter um atendimento médico adequado.</Text>
        </View>

        <View style={s.card}>
          <View style={s.subtituloBox}>
          <Text style={s.subtitulo}>SEJA RÁPIDO</Text>
          <Text><Icon name="directions-run" size={28} color="#fff"/></Text>
          </View>
           
          <Text style={s.texto}>Infelizmente os postos de saúde tem uma quantidade limitada de senhas, então tenha a certeza de garantir seu ID.</Text>
        </View>

        <View style={s.card}>
          <View style={s.subtituloBox}>
            <Text style={s.subtitulo}>ATENDIMENTO</Text>
            <Text><Icon name="phone" size={28} color="#fff"/></Text>
          </View>
          <Text style={s.texto}>Ao pegar seu ID, dirija-se ao posto de saúde mais próximo, mostre seu nome, CPF e ID. Logo será atendido.</Text>
        </View>

        <View style={s.card}>
          <View style={s.subtituloBox}>
            <Text style={s.subtitulo}>HORÁRIO</Text>
            <Text><Icon name="access-time" size={28} color="#fff"/></Text>
          </View>
          <Text style={s.texto}>Todos os dias às 6:00 horas, todas as senhas estarão disponíveis novamente, as 8:00 horas os postos estão abertos, esteja lá o quanto antes.</Text>
        </View>
      </View>
    </View>
  </ScrollView>
  );
}

function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Boas vindas" component={TelaInicial} />
      <Stack.Screen name="Funcionamento" component={Funcionamento} />
    </Stack.Navigator>
  );
}

function App() {
  const [text, setText] = useState("");

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="TelaInicial">
        <Tab.Screen
          name="TelaInicial"
          component={HomeStack}
          options={{
            title: "Início",
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ExibirDados"
          component={ExibirDados}
          options={{
            title: "Lista de Espera",
            tabBarIcon: ({ color, size }) => (
              <Icon name="supervisor-account" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="MaisInfo"
          component={MaisInfo}
          options={{
            title: "Sua ficha",
            tabBarIcon: ({ color, size }) => (
              <Icon name="info-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
          options={{
            title: "Cadastro",
            tabBarIcon: ({ color, size }) => (
              <Icon name="account-box" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#255C99',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 20,
    padding: 5,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },

  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },  

  subtituloBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#255C99',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },

  subtitulo: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  texto: {
    color: '#255C99',
    lineHeight: 20,
  },  
});

export default App;