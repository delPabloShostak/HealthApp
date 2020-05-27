import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput, Image } from "react-native";

export default function Autorization() {
    const [isEnabled, setIsEnabled] = useState(false);


    return (
        <View style={styles.All}>      
            <View >              
                <Image
                    style={styles.stretch}
                    source={require('../assets/Logo.png')}
                />
                <Text style={styles.signin}>Авторизація</Text>
            </View>
            <View>
                <View style={styles.container}>
                </View>
                <View style={styles.TextInput}>
                    <TextInput
                        placeholder=" Логін"
                    />
                </View>
                <View style={styles.TextInput1}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder=" Пароль"
                    />
                </View>
                <View style={styles.Button}>
                    <Button title="Вхід" color="green"></Button>
                    <Text>Ще не зареєстровані?</Text>
                    <Button
                        title="Реєстрація"
                        color="lightgreen"

                    ></Button>
                </View>
            </View>
            <Text style={styles.about}>Про програму</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },
    signin: {
        marginTop: 50,
        fontSize: 30,
        textShadowRadius: 10,
        textAlign: 'center'

    },
    Button: {
        alignSelf: 'center',
        width: 150,
        marginVertical: 30


    },
    TextInput: {
        alignSelf: 'center',
        width: 150,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 6,
        backgroundColor: '#F0FFFF'
    },
    TextInput1: {
        alignSelf: 'center',
        width: 150,
        height: 30,
        borderColor: 'black',
        borderWidth: 1,
        marginVertical: 5,
        borderRadius: 6,
        backgroundColor: '#F0FFFF'
    },
    All: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#F0FFF0'
    },
    stretch: {
        alignSelf: 'center',
        width: 200,
        height: 200,
        resizeMode: 'stretch',
    },
    about: {
        textAlign: 'center',
        backgroundColor: 'lightblue',
        justifyContent: 'flex-end'
    }
});