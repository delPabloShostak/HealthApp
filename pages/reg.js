import React, { useState } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";

export default function Registration() {
    const [isEnabled, setIsEnabled] = useState(false);


    return (
        <View style={{ justifyContent: 'space-evenly' }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.signin}>Реєстрація</Text>
            </View>
            <View style={styles.All}>
                <View style={styles.TextInput}>
                    <TextInput
                        placeholder=" Логін"
                    />
                </View>
                <View style={styles.TextInput}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder=" Пароль"
                    />
                </View>
                <View style={styles.TextInput}>
                    <TextInput
                        secureTextEntry={true}
                        placeholder=" Підтвердіть пароль"
                    />
                </View>

                <View style={styles.Button}>
                    <Button title="Реєстрація" color="lightgreen"></Button>
                    <Button title="Авторизація" color="green"></Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    signin: {
        marginTop: 30,
        fontSize: 30,
        textShadowRadius: 10,
        textAlign: 'center'

    },
    Button: {
        alignSelf: 'center',
        width: 150,
        marginVertical: 30,
    },
    TextInput: {
        alignSelf: 'center',
        width: 150,
        height: 30,
        borderColor: 'black',
        borderWidth: 1
    },
    All: {
        marginTop: 300
    }
});