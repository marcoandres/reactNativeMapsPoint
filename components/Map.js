import React from 'react'
import MapView, { Marker }from 'react-native-maps'
import { StyleSheet, Dimensions } from 'react-native'

export default ({ onLongPress, puntos, pointsFilter }) => {
  return (
    <MapView 
        style={styles.mapStyle}
        onLongPress={onLongPress}
        >
        { pointsFilter && puntos.map((punto) => 
            <Marker
                key={punto.nombre}
                coordinate={punto.coordinate}
                title={punto.nombre}
            />
        )}
    </MapView>
  )
}

const styles = StyleSheet.create({
    mapStyle: {
        width: Dimensions.get('window').width ,
        height: Dimensions.get('window').height -150,
    },
})
