//This file for create Login screen
import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import styles from '../style/style';
import { toDoAppMessages as messages } from '../constants/messages';
import { toDoAppConstants as constants } from '../constants/constants';

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

    // onchange text validation
    validate(text, type) {
        alph = messages.ALPHABETS //Username farmat should be alphabets
        num = messages.NUMBERS     //Password formar should be numbers
        let nameError = "";
        let passwordError = "";

        if (type == constants.USERNAME) {
            this.setState({ name: text })
            
            //Username format validation
            if (alph.test(text)) {
                this.setState({ nameValidate: true })
            }
            else {
                this.setState({ nameValidate: false })
                nameError = messages.USERNAME_FORMAT_INVALID;
            }
            !this.state.nameValidate ? this.setState({ nameError }) : this.setState({ nameError: null })
        }

        else if (type == constants.PASSWORD) {
            this.setState({ password: text })
            //Password format and length validation
            if (num.test(text) && text.length <= 4) {
                this.setState({ passwordValidate: true })
            }
            else if (text.length > 4) {
                this.setState({ passwordValidate: false })
                passwordError = messages.PASSWORD_LENGTH_INVALID;
            }
            else {
                this.setState({ passwordValidate: false })
                passwordError = messages.PASSWORD_FORMAT_INVALID;
            }
            !this.state.passwordValidate ? this.setState({ passwordError }) : this.setState({ passwordError: null })
        }
    }

    //To clear the text inputs
    clearTextInput() {
        this.setState({ name: null })
        this.setState({ password: null })
    }

    //Login button press event
    onPress() {
        let nameError = "";
        let passwordError = "";

        //username null validation
        if (this.state.name === '' || this.state.name === null) {
            nameError = messages.USERNAME_ISNULL;
            this.setState({ nameValidate: false })
        }
        //passward null validation
        else if (this.state.password === '' || this.state.password === null) {
            passwordError = messages.PASSWORD_ISNULL;
            this.setState({ passwordValidate: false })
        }
        //username and password match
        else if (this.state.name == "admin" && this.state.password == "1234") {
            this.setState({ nameValidate: true })
            this.setState({ passwordValidate: true })
            this.props.navigation.navigate(constants.HOME_SCREEN);
        }
        //username and password mismatch
        else {
            this.setState({ nameValidate: false })
            this.setState({ passwordValidate: false })
            Alert.alert(
                messages.LOGIN_FAILD,
                messages.LOGIN_MISMATCH,
                [
                    {
                        text: messages.ALERT_CANCEL_BUTTON_LABLE,
                    },
                    { text: messages.ALERT_OK_BUTTON_LABLE, onPress: this.clearTextInput }
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

                <Text style={styles.errorText}> {this.state.nameError} </Text>
                <TextInput style={[styles.loginInputStyle,
                !this.state.nameValidate ? styles.error : null]}
                    onChangeText={(text) => this.validate(text, constants.USERNAME)}
                    placeholder={messages.USERNAME_PLACEHOLDER}
                    value={this.state.name} />

                <Text style={styles.errorText}> {this.state.passwordError} </Text>
                <TextInput style={[styles.loginInputStyle,
                !this.state.passwordValidate ? styles.error : null]}
                    secureTextEntry={true}
                    onChangeText={(text) => this.validate(text, constants.PASSWORD)}
                    placeholder={messages.PASSWORD_PLACEHOLDER}
                    value={this.state.password} />

                <TouchableOpacity onPress={this.onPress}>
                    <Text style={styles.loginBtnText}>{messages.LOGIN_BUTTON_LABLE}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Login;