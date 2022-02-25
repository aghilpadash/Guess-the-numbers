import React from 'react';
import { StyleSheet, View, Image, Button, } from "react-native";
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText style={styles.text}>
                و تمام! برنده شدی
            </TitleText>
            <View style={styles.imageComtainer}>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                    resizeMode="cover" />
            </View>
            <BodyText style={styles.text}>
                با {props.roundsNumber} تا حدس بازی رو بردی
            </BodyText>
            <BodyText style={styles.text}>
                عدد انتخابی: {props.userNumber}
            </BodyText>
            <Button title="بازی جدید" onPress={props.onRestart} />
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
    },
    imageComtainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 20
    },
    image: {
        width: '100%',
        height: '100%',
    }
})

export default GameOverScreen;