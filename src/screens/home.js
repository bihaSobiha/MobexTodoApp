//This file for create Home screen
import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native'
import styles from '../style/style';
import ListComponent from '../components/list';
import { observer, inject } from 'mobx-react';
import {toDoAppMessages as messages} from '../constants/messages';
import {toDoAppConstants as constants} from '../constants/constants';

@inject('observableListStore')
@observer
class Home extends Component {

    constructor() {
        super();
        this.renderRow = this.renderRow.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    //To call fetch function from the store
    componentDidMount() {
        this.props.observableListStore.fetchTodo();
    }

    //Navigate to add screen
    onPress() {
        this.props.navigation.navigate(constants.ADD_SCREEN);
    }

    //Navigate and pass the particular object to update screen
    onUpdate(todo) {
        this.props.navigation.navigate(constants.UPDATE_SCREEN, {
            todo
        });
    }

    //To call delete function from the store
    async deleteList(id) {
        await this.props.observableListStore.deleteTodo(id);
    }

    //Pop up alert box and while click ok delete the todo list item
    onDelete(item) {
        Alert.alert(
            messages.DELETE_ALERTBOX_LABLE,
            messages.DELETE_CONFORM_TEXT,
            [
                {
                    text: messages.ALERT_CANCEL_BUTTON_LABLE,
                },
                { text: messages.ALERT_OK_BUTTON_LABLE, onPress: () => this.deleteList(item.key) }
            ],
            { cancelable: false },
        );
    }

    // Display every list inside the scrollview using list component
    renderRow(item) {
        return (
            <ListComponent keyval={item.key} title={item.title} deleteMethod={() => this.onDelete(item)} udate={() => this.onUpdate(item)} />
        )
    }

    render() {
        let todoData = [];
        this.props.observableListStore.todos.map(todo => {

            todoData.push({
                key: todo.id,
                title: todo.title
            });
        })
        return (
            <View style={styles.container}>
                <ScrollView style={styles.scrollContainer}>
                    <FlatList
                        data={todoData}
                        renderItem={({ item }) => this.renderRow(item)} />
                </ScrollView>
                <TouchableOpacity style={styles.addButton} onPress={this.onPress}>
                    <Text style={styles.addButtonText}>{messages.ADD_BUTTON_LABLE}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;