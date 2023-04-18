import React, {useState} from 'react';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { StyleSheet, Text, View, ScrollView, FlatList, TextInput, TouchableOpacity, Button } from 'react-native';

export default function App() {

  const [registro, setRegistro] = useState(0);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [ligar, setLigar] = useState(true);

  const [opcoes, setOpcoes] = useState([
    { opcao: 'Fale conosco', id: 1 },
    { opcao: 'Listar fichas', id: 2 },
    { opcao: 'Ver lista de espera', id: 3 },
    { opcao: 'Endereços', id: 4 },
  ])



  const botaoCpf = () => {
    setLigar(!ligar);
  };

  const botaoRegistrar = () => {
    setRegistro(registro + 1);
  };
  
  return (
    <ScrollView>
      <View style={styles.registro}>
        <View style={styles.registroMainBox}>
          <View style={styles.registroTitleBox}>
            <Text style={styles.registroTitle}>REGISTRE-SE</Text>
          </View>
          <View style={styles.registroBox}>
            <Text style={styles.registroText}>Digite seu nome:</Text>
            <TextInput
              style={styles.registroInput}
              placeholder='Ex: Edward Newgate'
              onChangeText={setNome}
              value={nome}
            />
            <Text style={styles.registroText}>Digite seu CPF:</Text>
            <TextInput
              style={styles.registroInput}
              placeholder='Ex: 000.111.222-33'
              keyboardType='numeric'
              onChangeText={setCpf}
              value={cpf}
            />
            <TouchableOpacity
              onPress={botaoRegistrar}
            >
              <Text style={styles.registroButton}>Gerar senha <AntDesign name="adduser" size={24} color="#fff" /></Text>
          
            </TouchableOpacity>
          
            <View style={styles.registroCode}>
              <Text style={styles.registroCodeTitle}>SUA SENHA</Text>
              <View style={styles.registroIcon}>
                <AntDesign name="arrowdown" size={24} color="#1E96FC" />
              </View>
          
              <Text style={styles.registroCodeNumber}>{registro}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.principal}>
        <View style={styles.principalBox}>
          <View style={styles.principalBoxLogo}>
            <Text style={styles.principalLogo}>CONEXÃO</Text>
            <Text style={styles.principalLogo}><AntDesign name="smileo" size={40} color="#1E96FC" /></Text>
            <Text style={styles.principalLogo}>SAÚDE</Text>
            
          </View>

          <View style={styles.principalTextBox}>
            <Text style={styles.principalCodeText}>Seja bem-vindo! {nome}, sua senha é {registro}, aguarde sua vez!!</Text>
          </View>

          <View style={styles.principalButtonCpf}>
            <Button 
              title='Consultar CPF'
              onPress={botaoCpf}
            />

            {
              ligar ?
                <Text></Text>
                :               
                <Text style={styles.cpfText}> {cpf} </Text>
            }
          </View>

          <View style={styles.principalOptionsBox}>
            <FlatList
              numColumns = {1}
              keyExtractor = {(item) => item.id}
              data = {opcoes}
              renderItem = {({item}) => (
                <TouchableOpacity>
                  <Text style={styles.principalOptions}> {item.opcao} </Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerBox}>
          <View style={styles.footerBoxTitle}>
            <Text style={styles.footerTitle}>COMO FUNCIONAMOS?</Text>
          </View>

          <View style={styles.footerInfoContainer}>
            <View style={styles.footerInfoBox}>
              <View style={styles.footerInfo}>
                <Text style={styles.footerInfoTitle}>Nosso objetivo</Text>
                <Text style={styles.footerInfoIcon}><Feather name="target" size={20} color="#fff"/></Text>
              </View>
              <Text style={styles.footerInfoText}>Temos como objetivo, gerar senhas do posto de saúde para não ser necessário enfrentar filas enormes e outras adversidades.</Text>
            </View>

            <View style={styles.footerInfoBox}>
              <View style={styles.footerInfo}>
                <Text style={styles.footerInfoTitle}>Nosso público alvo</Text>
                <Text style={styles.footerInfoIcon}><Ionicons name="person" size={20} color="#fff"/></Text>
              </View>
              <Text style={styles.footerInfoText}>Pessoas de baixa renda que dependem totalmente do SUS para conseguir atendimento médico adequado.</Text>
            </View>

            <View style={styles.footerInfoBox}>
              <View style={styles.footerInfo}>
                <Text style={styles.footerInfoTitle}>Seja rápido</Text>
                <Text style={styles.footerInfoIcon}><MaterialCommunityIcons name="run-fast" size={20} color="#fff"/></Text>
              </View>
              <Text style={styles.footerInfoText}>Infelizmente os postos de saúde tem uma quantidade limitada de senhas, então corra e garanta a sua senha. Não disponibilizamos senhas para os dias seguintes.</Text>
            </View>

            <View style={styles.footerInfoBox}>
              <View style={styles.footerInfo}>
                <Text style={styles.footerInfoTitle}>Como ser atendido </Text>
                <Text style={styles.footerInfoIcon}><Feather name="phone" size={20} color="#fff"/></Text>
              </View>

              <Text style={styles.footerInfoText}>Ao pegar sua senha, se dirija ao posto de saúde mais próximo, chegando lá mostre seu nome, CPF e senha. Logo será atendido. </Text>
            </View>

            <View style={styles.footerInfoBox}>
              <View style={styles.footerInfo}>
                <Text style={styles.footerInfoTitle}>Horário</Text>
                <Text style={styles.footerInfoIcon}><AntDesign name="clockcircleo" size={20} color="#fff"/></Text>
              </View>
              <Text style={styles.footerInfoText}>Todos os dias às 6:00 horas, todas as senhas serão resetadas e estarão disponíveis novamente, às 8:00 horas os postos estão abertos, esteja lá o quanto antes.</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  registro: {
    backgroundColor: '#1E96FC',
    alignItems: 'center',
    justifyContent: 'center',
  },

  registroMainBox: {
    margin: 30,
  },

  registroTitleBox: {
    margin: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#fff',
  },

  registroTitle: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
  },

  registroBox: {
    backgroundColor: '#fff',
    padding: 30,
    borderRadius: 20,
  },

  registroText: {
    margin: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#1E96FC',
  },

  registroInput: {
    borderWidth: 1,
    borderColor: '#1E96FC',
    padding: 10,
  },

  registroButton: {
    backgroundColor: '#1E96FC',
    textAlign: 'center',
    fontSize: 18,
    color: '#fff',

    padding: 10,
    margin: 15,
    borderRadius: 10,
  },

  registroCode: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#1E96FC',
  },

  registroCodeTitle: {
    fontSize: 20,
    color: '#1E96FC',
    fontWeight: 'bold',
  },

  registroCodeNumber: {
    color: '#1E96FC',
    fontSize: 20,
    fontWeight: 'bold',
  },

  principal: {
    padding: 10,
  },

  principalBox: {
    margin: 15,
  },

  principalBoxLogo: {
    margin: 10,
    padding: 10,
    borderWidth: 2,
    borderColor: '#1E96FC',   
  },

  principalLogo: {
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#1E96FC',
  },

  principalCodeText: {
    padding: 10,
    margin: 10,
    borderRadius: 10,

    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    backgroundColor: '#1E96FC',
    color: '#fff',
  },

  principalButtonCpf: {
    alignItems: 'center',
  },

  cpfText: {
    fontSize: 15,
    marginTop: 10,
    backgroundColor: '#1E96FC',
    color: '#fff',
    padding: 10,
    fontWeight: 'bold',
  },

  principalOptionsBox: {
    alignItems: 'center',    
    borderRadius: 10,
    margin: 10,
  },

  principalOptions: {
    flex: 1,
    padding: 20,
    margin: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#1E96FC',

    color: '#1E96FC',
    backgroundColor: '#fff',
    textAlign: 'center',
  },

  footer: {
    backgroundColor: '#1E96FC',
  },

  footerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    color: '#fff',
  },

  footerInfoContainer: {
    display: 'flex',
    padding: 10,
  },

  footerInfoBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    margin: 10,
  },  

  footerInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#1E96FC',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
  },

  footerInfoTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',

    padding: 5,
  },

  footerInfoText: {
    padding: 5,
    color: '#1E96FC',
    fontSize: 15,
  },
});