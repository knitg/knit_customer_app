import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }
  render() {
    return ( 
        <Container>
            <TouchableOpacity onPress={ () => {this.props.navigation.navigate({ routeName: 'Dashboard' })}} style={[styles.button]}>
                <Text style={[styles.text]}>LOGGGGGIN</Text>
            </TouchableOpacity>
        </Container> 
    );
  }
}

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#004796',
        shadowColor: '#2AC062',
        shadowOpacity: 0.4,
        shadowOffset: { height: 10, width: 0 },
        shadowRadius: 20,
        borderRadius:50
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});