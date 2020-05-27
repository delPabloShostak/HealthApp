import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function About() {

    return (
        <View style={styles.All}>
            <Text style={styles.about}>Про програму</Text>
            <Text style={styles.Text}>Цей додаток являється розробкою на бакалаврську роботу.Всі викристані матеріали були взять з ресурсу інтернет.
            Початок розробки 22 грудня 2019 року.
            Останні зміни в даному файлі 28 березня 2020 року.
            Програму протестовано на:</Text>
            <Text style={styles.Text}>-Redmi Note 8 Pro,</Text>
            <Text style={styles.Text}>-Iphohe 8+,</Text>
            <Text style={styles.Text}>-Web </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    All: {
        backgroundColor: '#F0FFFF',
        flex: 1

    },
    about: {
        marginTop: 10,
        fontSize: 30,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#F0FFFF',
        color: 'gray',
        textAlign: 'center'
    },
    Text: {
        fontSize: 15,
        padding: 5,
        backgroundColor: '#F0FFF0',

    }


});