import React from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>شروع بازی معدد</Text>
            <View style={styles.inputContainer}>
                <Text>
                    یک عدد انتخاب کنید:
                </Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="از اول" onPress={() => { }} />
                    <Button title="تایید" onPress={() => { }} />
                </View>
            </View>
        </View>
    )
}

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
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
    },
})

export default StartGameScreen;