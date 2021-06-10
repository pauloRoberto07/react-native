import React,{useState} from 'react';

import {Text, TextInput, TouchableHighlight, View, StyleSheet} from 'react-native';


export default function appUri(){

  const [segundos,setSegundos] = useState()

  const [resultado,setResultado] = useState()

  const tempo =()=>{

    var segundoss = segundos;

    const horas = parseInt(segundoss)/3600;
    segundoss = parseInt(segundoss) % 3600;

    const minutos = parseInt(segundoss)/60;
    segundoss = parseInt(segundoss)%60;

    

    setResultado(parseInt(horas)+":"+parseInt(minutos)+":"+parseInt(segundoss));
  }




  return(
    <View style={{margin:15}}>
      <View>
        <Text style={style.textTop}>Uri 1019 - Conversão de tempo</Text>
      </View>

      <View style={{margin:15}}>
        <TextInput
        placeholder='Digite o tempo em segundos'
        autoFocus={true}
        keyboardType={'numeric'}
        onChangeText = {text=>setSegundos(text)}
        /> 
      </View>

      <View style={{margin:15}}>
        <TouchableHighlight
        title="Converter"
        style={style.touchable}
        onPress={()=>tempo()}>
        <Text style={style.textTop}>Converter</Text>
        </TouchableHighlight>
      </View>

      <View style={{margin:15}}>
        <Text style={style.resposta}>Conversão: {resultado}</Text>
      </View>




    </View>
  )
}

const style = StyleSheet.create({

  textTop:{
    textAlign:'center',
    fontSize:20
  },

  touchable:{
    backgroundColor:'#add8e6',
    padding:10,
    borderRadius:10
  },

  resposta:{
    fontSize:20
  }



})


