import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>شروع بازی معدد</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    }
})

export default StartGameScreen;