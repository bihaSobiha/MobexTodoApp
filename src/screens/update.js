//This file for create Update screen
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../style/style';
import { observer, inject } from 'mobx-react';
import {toDoAppMessages as messages} from '../constants/messages';
import {toDoAppConstants as constants} from '../constants/constants';

@inject('observableListStore')
@observer
class Update extends Component {
    constructor() {
        super();
        this.changeTodo = this.changeTodo.bind(this);
        this.state = {
            id: '',
            title: '',
        };
    }

    //initially get an object to update from home screen
    componentDidMount() {
        const todo = this.props.navigation.getParam('todo');
        // const todo = this.props.todo //remove the comment for test only
        this.setState({ id: todo.key.toString() })
        this.setState({ title: todo.title });
    }

    //To call update function from the store and update the todo list
    async changeTodo() {
        if (this.state.title !== '') {

            const todo = {
                title: this.state.title,
                id: this.state.id,
            };
            await this.props.observableListStore.updateTodo(todo);
            this.props.navigation.navigate(constants.HOME_SCREEN);
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <View pointerEvents="none">
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(id) => this.setState({ id })}
                            value={(this.state.id).toString()}>
                        </TextInput>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.title}
                        onChangeText={(title) => this.setState({ title })}>
                    </TextInput>
                </ScrollView>

                <TouchableOpacity onPress={this.changeTodo}>
                    <Text style={styles.loginBtnText}>{messages.UPDATE_BUTTON_LABLE}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Update;