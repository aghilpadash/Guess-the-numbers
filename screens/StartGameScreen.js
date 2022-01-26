import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";
import Card from "../components/Card";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>شروع بازی معدد</Text>
            <Card style={styles.inputContainer}>
                <Text>
                    یک عدد انتخاب کنید:
                </Text>
                <TextInput keyboardType='numeric' />
                <View style={styles.buttonContainer}>
                    <Button title="از اول" onPress={() => { }} />
                    <Button title="تایید" onPress={() => { }} />
                </View>
            </Card>
        </View>
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
})

export default StartGameScreen;