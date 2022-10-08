import React from "react";
import {
  Button,
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from "react-native";

export default ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
            key={puntos.nombre}
            data={puntos.map((punto) =>  punto.nombre )}
            renderItem={({ item }) => <View style={styles.item}><Text>{item}</Text></View>}
            keyExtractor={item => item.nombre}
        />
      </View>
      <View>
        <Button style={styles.button} title="Cerrar" onPress={closeModal} /> 
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingBottom: 15,
  },  
  list: {
    height: Dimensions.get("window").height - 250,
  },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        height: 50,
        justifyContent: 'center',
        padding: 15,
    }
});
