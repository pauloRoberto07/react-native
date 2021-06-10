import React,{useEffect,useState} from 'react';

import {
  Text,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native';

export default function App(){

  const [carregando,setCarregando] = useState(true)
  const [dados,setDados] = useState([])

  useEffect(
    ()=>{
      fetch('http://allanvidal.com/json-categoria.php')
      .then((resp)=>resp.json())
      .then((json)=>setDados(json.categorias))
      .catch(()=>(alert('Erro ao carregar os dados')))
      .finally(()=>setCarregando(false))
    },[]

  )
  



  return (
    <View>
      <Text style={{fontSize:30}}> Categorias </Text>
      {
      carregando?<ActivityIndicator/> : (
        
        <FlatList
          data={dados}  
          keyExtractor={({idCategoria},index)=>idCategoria}
          renderItem={({item})=>(
            <Text style={{fontSize:30}}>{item.idCategoria} {item.categoria} </Text>
          )}
        />
      )
    }
    </View>
  );
};



