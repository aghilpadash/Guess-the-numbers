import React, { useState } from "react";
import { Keyboard, StyleSheet, View, Text, Button, TouchableWithoutFeedback } from "react-native";
import Card from "../components/Card";
import Colors from "../constant/colors";
import Input from "../components/Input";

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState("");
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>شروع بازی معدد</Text>
                <Card style={styles.inputContainer}>
                    <Text>
                        یک عدد انتخاب کنید:
                    </Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit={true}
                        autoCapitalize='none'
                        autoCorrect={false}
                        maxLength={2}
                        keyboardType='number-pad'
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.buttonContainer}>
                        <View style={styles.button}>
                            <Button title="از اول"
                                onPress={() => { }}
                                color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="تایید"
                                onPress={() => { }}
                                color={Colors.primary} />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
    button: {
        width: 100,
        borderRadius: 10
    },
    input: {
        width: 30,
        textAlign: 'center',

    }
})

export default StartGameScreen;