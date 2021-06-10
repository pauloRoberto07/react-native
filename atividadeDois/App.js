import React,{useState} from 'react';
import {Text,View,TextInput,Button, Alert,StyleSheet} from 'react-native';

export default function AtividadeDois(){

  const [nome,setNome] = useState()
  const [email,setEmail] = useState()
  const [assunto,setAssunto] = useState()
  const [mensagem,setMensagem] = useState()


  const valores = ()=>{
    return nome+"\n"+email+"\n"+assunto+"\n"+mensagem;
  }

  const exibirValores = ()=>{
    Alert.alert("Valores digitados:",valores());

  }


  return(
    <View>

      <View style={{margin:10}}>
      <Text style={{margin:5}}>Nome:</Text>
        <TextInput
          style={style.input}
          placeholder='Digite seu nome.'
          autoFocus={true}
          onChangeText={text=>setNome(text)}
          />

      </View>

      <View style={{margin:10}}>
      <Text style={{margin:5}}>Email</Text>
        <TextInput
          style={style.input}
          placeholder='Digite seu e-mail.'
          autoFocus={true}
          onChangeText={text=>setEmail(text)}
          />

      </View>

      <View style={{margin:10}}>
      <Text style={{margin:5}}>Assunto:</Text>
        <TextInput 
          style={style.input}
          placeholder='Digite o assunto.'
          autoFocus={true}
          onChangeText={text=>setAssunto(text)}
          />

      </View>

      <View style={{margin:10}}>
      <Text style={{margin:5}}>Mensagem</Text>
        <TextInput 
          style={style.input2}
          placeholder='Digite sua mensagem.'
          autoFocus={true}
          onChangeText={text=>setMensagem(text)}
          />

      </View>

      <View style={{margin:10}}>
        <Button
          title="Enviar"
          onPress={()=>exibirValores()}
        />
      </View>

    </View>
  );
}

const style = StyleSheet.create({

  input:{
    borderRadius:20,
    borderWidth:1,
    borderColor:'#000',
    color:'#000',
    height:55,
  },

  input2:{
    borderRadius:20,
    borderWidth:1,
    borderColor:'#000',
    color:'#000',
    height:90,
  }


})

