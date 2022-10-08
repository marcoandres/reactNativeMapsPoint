import React from 'react'
import { StyleSheet, Modal, View, Text, Dimensions } from 'react-native'
import { Children } from 'react/cjs/react.production.min'

export default ({ children, visibility }) => {
  return (
    <Modal
        animationType="slide"
        transparent={true}
        visible={visibility}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {children}
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    modalView: {
        minWidth: Dimensions.get('window').width - 100,
        backgroundColor: "#fff",
        borderRadius: 4,
        padding: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }
    },
})

