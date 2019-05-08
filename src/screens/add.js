//This file for create Add screen
import React, { Component } from 'react';
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import styles from '../style/style';
import { observer, inject } from 'mobx-react'
import {toDoAppMessages as messages} from '../constants/messages';
import {toDoAppConstants as constants} from '../constants/constants';

@inject('observableListStore')
@observer
class Add extends Component {
    constructor() {
        super();
        this.addTodo = this.addTodo.bind(this);
        this.state = {
            title: '',          //initialize list title as empty
            titleError: '',     //initialize list title error as empty for validation
        };
    }

    //list title null validation
    validate = () => {
        let titleError = "";

        if (this.state.title === '' || this.state.title === null) {
            titleError = messages.TITLE_ISNULL;
        }
        if (titleError) {
            this.setState({ titleError });
            return false;
        }
        return true;
    }

    //Validate the user input, add an item to the todo list and navigate to home screen
    async addTodo() {
        const isValid = this.validate();
        if (isValid) {
            const todo = {
                title: this.state.title,
                id:this.props.observableListStore.todos.get(this.props.observableListStore.todos.length - 1).id+1,
            };
            await this.props.observableListStore.createTodo(todo);
            this.props.navigation.navigate(constants.HOME_SCREEN);
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
                            placeholder={messages.TITLE_PLACEHOLDER}/>
                        <Text style={styles.errorText}> {this.state.titleError} </Text>
                    </View>
                </ScrollView>

                <TouchableOpacity onPress={this.addTodo}>
                    <Text style={styles.loginBtnText}>{messages.ADD_BUTTON}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Add;