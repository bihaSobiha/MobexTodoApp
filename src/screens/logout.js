import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native';
import { Card, CardItem } from 'native-base'
import styles from '../style/style';

class Logout extends Component {
    render() {
        return (
            <View style={{ paddingVertical: 20 }}>
                <Card>
                    <CardItem header style={{
                            alignItems: "center",
                            justifyContent: "center",
                            alignSelf: "center",
                        }}>
                        <Text style={{
                            color:'black',
                            fontSize: 25,
                            fontWeight: 'bold',
                        }}>John Doe</Text>
                    </CardItem>
                    <View
                        style={{
                            backgroundColor: "#bcbec1",
                            alignItems: "center",
                            justifyContent: "center",
                            width: 80,
                            height: 80,
                            borderRadius: 40,
                            alignSelf: "center",
                            marginBottom: 20
                        }}
                    >
                        <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
                    </View>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('login')}>
                        <Text style={styles.loginBtnText}>SIGN OUT</Text>
                    </TouchableOpacity>
                </Card>
            </View>
        );
    }
}

export default Logout;