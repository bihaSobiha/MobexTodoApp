//This file for Create About screen
import React, { Component } from 'react';
import { Text, View} from 'react-native';
import styles from '../style/style';

class About extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <View style={styles.container}>
                    <Text style={styles.loginBtnText}>-ABOUT PAGE-</Text>
            </View>
        );
    }
}

export default About;