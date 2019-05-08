//This file for Create About screen
import React, { Component } from 'react';
import { Text, View} from 'react-native';
import styles from '../style/style';
import {toDoAppMessages as messages} from '../constants/messages';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.loginBtnText}>{messages.ABOUT_BODY}</Text>
            </View>
        );
    }
}

export default About;