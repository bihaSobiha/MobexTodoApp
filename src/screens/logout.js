//This file for create Logout screen
import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base'
import styles from '../style/style';
import { toDoAppMessages as messages } from '../constants/messages';
import { toDoAppConstants as constants } from '../constants/constants';
import AsyncStorage from '@react-native-community/async-storage';

class Logout extends Component {
//Remove the login detail from local storage and navigate to login screen 
    async removeData() {
        let value = await AsyncStorage.removeItem(constants.LOCAL_STORAGE_KEY)
        if (value === null) {
            this.props.navigation.navigate(constants.LOGIN_SCREEN)
        }
    }
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
                    <TouchableOpacity onPress={() => this.removeData()}>
                        <Text style={styles.loginBtnText}>{messages.SIGNOUT_BUTTON_LABLE}</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default Logout;