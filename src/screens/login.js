import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import styles from '../style/style';

class Login extends Component {
    constructor() {
        super();
        this.clearTextInput = this.clearTextInput.bind(this);
        this.onPress = this.onPress.bind(this);
        this.state = {
            name: '',
            nameValidate: true,
            nameError: '',
            password: '',
            passwordValidate: true,
            passwordError: '',
        }
    }

    validate(text, type) {
        alph = /^[a-zA-Z]+$/
        num = /^[0-9]+$/
        let nameError = "";
        let passwordError = "";

        if (type == "username") {
            this.setState({ name: text })
            // console.warn(this.state.name)
            if (alph.test(text)) {
                this.setState({ nameValidate: true })
            }
            else {
                this.setState({ nameValidate: false })
                nameError = "Username is not in the valied format";
            }
            !this.state.nameValidate ? this.setState({ nameError }) : this.setState({ nameError: null })
        }

        else if (type == "password") {
            this.setState({ password: text })
            if (num.test(text) && text.length <= 4) {
                this.setState({ passwordValidate: true })
            }
            else if (text.length > 4) {
                this.setState({ passwordValidate: false })
                passwordError = "It must be a minimum of 4 characters";
            }
            else {
                this.setState({ passwordValidate: false })
                passwordError = "Password is not in the valied format";
            }
            !this.state.passwordValidate ? this.setState({ passwordError }) : this.setState({ passwordError: null })
        }
    }

    clearTextInput() {
        this.setState({ name: null })
        this.setState({ password: null })
    }

    onPress() {
        let nameError = "";
        let passwordError = "";
        if (this.state.name === '' || this.state.name === null) {
            nameError = "Username is required";
            this.setState({ nameValidate: false })
        }
        else if (this.state.password === '' || this.state.password === null) {
            passwordError = "Password is required";
            this.setState({ passwordValidate: false })
        }
        else if (this.state.name == "admin" && this.state.password == "1234") {
            this.setState({ nameValidate: true })
            this.setState({ passwordValidate: true })
            this.props.navigation.navigate('HOME');
        }
        else {
            this.setState({ nameValidate: false })
            this.setState({ passwordValidate: false })
            Alert.alert(
                'Login Failed',
                'Username and Password Missmatch',
                [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    { text: 'OK', onPress: this.clearTextInput }
                ],
                { cancelable: false },
            );
        }
        !this.state.nameValidate ? this.setState({ nameError }) : this.setState({ nameError: null })
        !this.state.passwordValidate ? this.setState({ passwordError }) : this.setState({ passwordError: null })
    }

    render() {
        return (
            <View style={styles.loginContainer}>

                <Text style={{ color: "red", fontSize: 16 }}> {this.state.nameError} </Text>
                <TextInput style={[styles.loginInputStyle,
                !this.state.nameValidate ? styles.error : null]}
                    onChangeText={(text) => this.validate(text, "username")}
                    placeholder="Username"
                    value={this.state.name} />

                <Text style={{ color: "red", fontSize: 16 }}> {this.state.passwordError} </Text>
                <TextInput style={[styles.loginInputStyle,
                !this.state.passwordValidate ? styles.error : null]}
                    secureTextEntry={true}
                    onChangeText={(text) => this.validate(text, "password")}
                    placeholder="Password"
                    value={this.state.password} />

                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.loginBtnText}>LOGIN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;