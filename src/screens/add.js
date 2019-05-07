import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../style/style';
import { observer, inject } from 'mobx-react'

@inject('observableListStore')
@observer
class Add extends Component {
    constructor() {
        super();
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            title: '',
            titleError: '',
        };
    }

    validate = () => {
        let titleError = "";

        if (this.state.title === '' || this.state.title === null) {
            titleError = "Title is required";
        }
        if (titleError) {
            this.setState({ titleError });
            return false;
        }
        return true;
    }

    async addTodo() {
        const isValid = this.validate();
        if (isValid) {
            const todo = {
                title: this.state.title,
                id:this.props.observableListStore.todos.get(this.props.observableListStore.todos.length - 1).id+1,
            };
            await this.props.observableListStore.createTodo(todo);
            this.props.navigation.navigate('HOME');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(title,titleError) => this.setState({ title, titleError:null })}
                            value={this.state.title}
                            placeholder='Enter the title'
                            placeholderTextColor='black'
                            underlineColorAndroid='transparent' />
                        <Text style={{ color: "red", fontSize: 14 }}> {this.state.titleError} </Text>
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={this.addTodo}>
                    <Text style={styles.loginBtnText}>ADD</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Add;