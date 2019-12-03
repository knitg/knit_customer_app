import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image  } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user_action_creator } from '../store/actions/user.action';

class LoginScreen extends Component {
    constructor(props) {
        super(props);
        this.navigateTo = this.navigateScreen.bind(this)
    }
    navigateScreen = () => {
        console.log("NAVIGATE TO SCREEN")
        this.props.users();

        // this.props.navigation.navigate({ routeName: 'Dashboard' }) 
    }
    componentDidMount(){
        console.log("component DID Mount", this.props.user_status);
    }
    render() {
        return (
            <Container>
                <TouchableOpacity onPress={this.navigateTo} style={[styles.button]}>
                    <Text style={[styles.text]}>LOGGGGGIN</Text>
                </TouchableOpacity>
                <Text>Name : {this.props.user_status ? this.props.user_status.first_name: null}</Text>
                <Image
                    style={{width: 50, height: 50}}                   
                        source={{uri: this.props.user_status ? this.props.user_status.avatar: null }}
                    />
                <Text>EMAIL : {this.props.user_status ? this.props.user_status.email: null}</Text>
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
        borderRadius: 50
    },

    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});

const mapStateToProps = (state) => {
    console.log("STATE \n\n\n", state)
    return {
        user_status: state.user ? state.user.data : state.user
    }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
    users: user_action_creator
}, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

