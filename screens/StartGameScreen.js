import React, { useState } from "react";
import { Keyboard, StyleSheet, View, Text, Button, TouchableWithoutFeedback, Alert } from "react-native";
import Card from "../components/Card";
import Colors from "../constant/colors";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = props => {

    const [enteredValue, setEnteredValue] = useState("");
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState()
    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ""));
    }

    const resetInputHandler = () => {
        setEnteredValue("");
        setConfirmed(false);
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert("خطا", "لطفا یک عدد بین 1 تا 99 وارد کنید", [{ text: "باشه", style: "destructive", onPress: resetInputHandler }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue("");
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput =
            <Card style={styles.summaryContainer}>
                <Text>عدد انتخابی :</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="بزن بریم"/>
            </Card>
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>شروع بازی معدد</Text>
                <Card style={styles.inputContainer}>
                    <Text>
                        یک عدد انتخاب کن
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
                                onPress={resetInputHandler}
                                color={Colors.accent} />
                        </View>
                        <View style={styles.button}>
                            <Button title="تایید"
                                onPress={confirmInputHandler}
                                color={Colors.primary} />
                        </View>
                    </View>
                </Card>
                {confirmedOutput}
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
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center',

    }
})

export default StartGameScreen;