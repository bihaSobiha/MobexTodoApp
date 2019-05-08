//This file for create Logout screen
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base'
import styles from '../style/style';
import { toDoAppMessages as messages } from '../constants/messages';
import { toDoAppConstants as constants } from '../constants/constants';

class Logout extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Card>
                    <CardItem header style={styles.cardHeader}>
                        <Text style={styles.cardText}>{messages.USER_NAME}</Text>
                    </CardItem>
                    <View>
                        <Image source={messages.PROFILE_IMAGE} style={styles.profileImage} />
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate(constants.LOGIN_SCREEN)}>
                        <Text style={styles.loginBtnText}>{messages.SIGNOUT_BUTTON_LABLE}</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default Logout;