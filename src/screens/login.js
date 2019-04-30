import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import styles from '../style/style';

class Login extends Component {
    constructor() {
        super();
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
            if (alph.test(text)) {
                this.setState({ nameValidate: true })
            }
            else {
                this.setState({ nameValidate: false })
                nameError = "Name Should be Alphabets";
            }
            !this.state.nameValidate ? this.setState({ nameError }) : this.setState({ nameError: null })
        }

        else if (type == "password") {
            this.setState({ password: text })
            if (num.test(text)) {
                this.setState({ passwordValidate: true })
            }
            else {
                this.setState({ passwordValidate: false })
                passwordError = "Password Should be Numbers";
            }
            !this.state.passwordValidate ? this.setState({ passwordError }) : this.setState({ passwordError: null })
        }
    }

    clearTextInput(){
        console.warn("-----")
        this.setState({ name: null })
    }

    onPress() {
        let nameError = "";
        let passwordError = "";
        if (this.state.name === '' || this.state.name === null) {
            nameError = "You Should Enter the Name";
            this.setState({ nameValidate: false })
        }
        else if (this.state.password === '' || this.state.password === null) {
            passwordError = "You Should Enter the Password";
            this.setState({ passwordValidate: false })
        }
        else if (this.state.name == "admin" && this.state.password == "1234") {
            this.setState({ nameValidate: true })
            this.setState({ passwordValidate: true })
            this.props.navigation.navigate('home');
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
                    onPress: () => console.warn('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () =>{this.clearTextInput.bind(this)}}
                ],
                {cancelable: false},
              );
        }
        !this.state.nameValidate ? this.setState({ nameError }) : this.setState({ nameError: null })
        !this.state.passwordValidate ? this.setState({passwordError}) : this.setState({passwordError:null})
        // Keyboard.dismiss();
    }

    render() {
        return (
            <View style={styles.loginContainer}>

                <Text style={{ color: "red", fontSize: 16 }}> {this.state.nameError} </Text>
                <TextInput style={[styles.loginInputStyle,
                !this.state.nameValidate ? styles.error : null]}
                    onChangeText={(text) => this.validate(text, "username")}
                    placeholder="Username" />

                <Text style={{ color: "red", fontSize: 16 }}> {this.state.passwordError} </Text>
                <TextInput style={[styles.loginInputStyle,
                !this.state.passwordValidate ? styles.error : null]}
                    onChangeText={(text) => this.validate(text, "password")}
                    placeholder="Password" />

                <TouchableOpacity onPress={this.onPress.bind(this)}>
                    <Text style={styles.loginBtnText}>LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.btnTextSignUp}>Not a Member? SignUp Now</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;