import React, { Component,} from 'react';

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Image
} from 'react-native';

export default class Exercicio extends Component{

  constructor(props){
    super(props);
    this.state = {num1:0,num2:0,num3:0,res:'',url: require('./img/equilatero.png'), mostra:{width: 100, height: 100,  alignSelf: 'center', display: "none"}};
  }
  metod(){
    var v1 = this.state.num1;
    var v2 = this.state.num2;
    var v3 = this.state.num3;
    var tri = v1 + v2;

    
    if(v1 == 0 || v2 == 0 || v3 == 0) {
      this.setState({
        res: 'Preencha todos os campos'
      });
    }
    else if(tri<v3){
      this.setState({
        res: 'Não é um triângulo'
      })
      
    }
    else if(v1 == v2 && v2 == v3 && v3 == v1) {
      this.setState({
        res: 'Triangulo Equilátero',
        url:(require('./img/equilatero.png')),
        mostra:({width: 150, height: 150,  alignSelf: 'center', display: "flex",marginTop:10}),

      });  
    }
    
    else if (v1 != v2 && v2 != v3 && v3 != v1){
      this.setState({
        res: 'Triangulo Escaleno',
        url:(require('./img/escaleno.png')),
        mostra:({width: 150, height: 150,  alignSelf: 'center', display: "flex",marginTop:10}),
      });
    }
    else {
      this.setState({
        res:'Triangulo Isósceles',
        url:(require('./img/isosceles.png')),
        mostra:({width: 150, height: 150,  alignSelf: 'center', display: "flex", marginTop:10}),
      });
    }

  }

  render(){

    return(
      <View style={estilo.container}>
        <Text style={estilo.titulo}>Digite Três Valores, para verificar o Triangulo</Text>
        <TextInput keyboardType={'numeric'} style={estilo.txtarea} onChangeText={num1=>this.setState({num1})}/>
        <TextInput keyboardType={'numeric'} style={estilo.txtarea} onChangeText={num2=>this.setState({num2})}/>
        <TextInput keyboardType={'numeric'} style={estilo.txtarea} onChangeText={num3=>this.setState({num3})}/>
        <Button title="Verificar" onPress={()=>this.metod()}/>
        <Text style={estilo.resposta}>{this.state.res}</Text>

        <Image source={this.state.url} style={this.state.mostra}/>

      </View>

    );
  }
}

const estilo = StyleSheet.create({

  titulo:{
    textAlign: 'center',
    fontSize:20,
    marginBottom:10,
    margin:10,
  },

  container:{
    flex:1,
    alignItems:'center',
  },

  resposta:{
    fontSize:30,
    color:'black',
    marginTop:20,
    textAlign:'center',
    fontFamily:'Roboto'
  },

  txtarea:{
    height:55,
    width:230,
    borderWidth:1,
    margin:10,
    marginBottom:20,
    
  },

  butao:{
    width:20,
    color:'red',
  }

})