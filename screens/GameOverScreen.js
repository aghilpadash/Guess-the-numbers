import React from 'react';
import { StyleSheet, View, Text, Button, Alert } from "react-native";

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.text}>
                و تمام! برنده شدی
            </Text>
            <Text style={styles.text}>
                با {props.roundsNumber} تا حدس بازی رو بردی
            </Text>
            <Text style={styles.text}>
               عدد انتخابی: {props.userNumber}
            </Text>
            <Button title="بازی جدید" onPress={props.onRestart}/>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
    }
})

export default GameOverScreen;