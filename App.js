import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Input, Map, Modal, Panel, List } from './components'

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [puntoTemp, setPuntoTemp] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto') //new_punto, all_puntos
  const [visibility, setVisibility] = useState(false)
  const [pointsFilter, setPointsFilter] = useState(true)

  const togglePointsFilter = () => setPointsFilter(!pointsFilter)

  const handleLongPress = ( {nativeEvent} ) => {
    setVisibilityFilter('new_punto')
    setPuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }
  
  const handleChangeText = text => {
    setNombre(text)
  }

  const handleSubmit = () => {
    // const newPunto = {coordinate: puntoTemp, name: nombre}
    // setPuntos(puntos.concat(newPunto))
    // setVisibility(false)
    // setNombre('')
    setPuntos([...puntos, {nombre, coordinate: puntoTemp}]) 
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityFilter('all_puntos')
    setVisibility(true)
  }
  
  return (
    <View style={styles.container}>
      <Map onLongPress={handleLongPress} puntos={puntos} pointsFilter={pointsFilter}/>
      <Panel onPressLeft={handleLista} textLeft='Lista' togglePointsFilter={togglePointsFilter}/>
      <Modal visibility={visibility} >
        {
          visibilityFilter === 'new_punto' ? 
          <View style={styles.form}>
            <Input 
              title="Nombre"
              placeholder="Nombre del punto"
              onChangeText={handleChangeText} />
            <Button title="Aceptar" onPress={handleSubmit} />
          </View>
          : <List puntos={ puntos } closeModal={()=> setVisibility(false) } />
        }       
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15,
  },

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
