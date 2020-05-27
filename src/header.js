import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';

export default class Login extends React.Component {
    state = {
        isLoading: false
    };

    showLoader = () => {
        this.setState({ isLoading: true });
    };

    // Login Click Action
    loginclick = () => {
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={(this.loginclick)}>
                    <Text style={styles.btntext}>Sing In</Text>
                </TouchableOpacity>
                <View style={styles.activityview, styles.horizontal}>
                    <ActivityIndicator size="large" animating={this.state.isLoading} color='#fff' />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0FFF0'
    }
});