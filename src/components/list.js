import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/style';

class List extends Component {
    render() {
        return (
            <View style={styles.container} key={this.props.keyval}>
                <View style={styles.row}>
                    <Text style={styles.listText}>{this.props.title}</Text>

                    <TouchableOpacity style={styles.listUpdate} onPress={this.props.udate}>
                        <Text style={styles.listDeleteText}>U</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listDelete} onPress={this.props.deleteMethod}>
                        <Text style={styles.listDeleteText}>D</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default List;