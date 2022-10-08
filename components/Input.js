import React from 'react'
import { StyleSheet, Text, TextInput, View  } from 'react-native'

export default ({ title, ...rest }) => {
    return (
        <View style={styles.wraper}>
            <Text style={styles.title}>{title}</Text>
            <TextInput 
                {...rest}
            />
        </View>
    )
    }
    const styles = StyleSheet.create({
        wraper: {
            height: 40,
        },
    })