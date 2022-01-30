import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from "react-native";
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const geneterateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.ceil(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return geneterateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {
    const [currentGuess, setCurrentGuess] = useState(
        geneterateRandomBetween(1, 100, props.userChoice));
    return (
        <View style={styles.screen}>
            <Text>یه عدد حدس بزن</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <Button title="کمتر" onPress={() => { }} />
                <Button title="بیشتر" onPress={() => { }} />
            </Card>
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'

    }
})

export default GameScreen;