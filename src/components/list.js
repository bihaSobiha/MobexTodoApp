import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from '../style/style';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

class List extends Component {
    render() {
        return (
            <View style={styles.container} key={this.props.keyval}>
                <View style={styles.row}>
                    <Text style={styles.listText}>{this.props.title}</Text>

                    <TouchableOpacity style={styles.listUpdate} onPress={this.props.udate}>
                        <Icon style={styles.listDeleteText} name="edit" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.listDelete}>
                        <Icon style={styles.listDeleteText} name="trash-o" onPress={this.props.deleteMethod}/>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default List;