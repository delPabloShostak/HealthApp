import React from 'react';
import { View, StyleSheet, Button, Alert  } from 'react-native';

const Footer = () => (
    <View style={styles.Button}>
        <View style={styles.Width}>    
    <Button
        title="Особистий Профіль"
        color="green"
                onPress={() => Alert.alert('Профіль')}
        ></Button></View>
        <View style={styles.Width}> 
    <Button
        title="Головна сторінка"
        color="green"
            onPress={() => Alert.alert('Головна')}
            ></Button></View>
        <View style={styles.Width}> 
    <Button
        title="Меню налаштувань"
        color="green"
            onPress={() => Alert.alert('Налаштування')}
            ></Button></View>
    </View>
);
const styles = StyleSheet.create({
    Width:{
        flex: 1,
    },
    Button: {      
        justifyContent: 'center',
        backgroundColor: 'green',
        flexDirection: 'row',
    }
});

export default Footer;