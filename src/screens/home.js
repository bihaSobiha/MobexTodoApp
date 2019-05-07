import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native'
import styles from '../style/style';
import ListComponent from '../components/list';
import { observer, inject } from 'mobx-react';

@inject('observableListStore')
@observer
class Home extends Component {

    constructor() {
        super();
        this.renderRow = this.renderRow.bind(this);
        this.onPress = this.onPress.bind(this);
    }

    componentDidMount() {
        this.props.observableListStore.fetchTodo();
    }

    onPress() {
        this.props.navigation.navigate('ADD');
    }

    onUpdate(todo) {
        this.props.navigation.navigate('UPDATE', {
            todo
        });
    }

    async deleteList(id) {
        await this.props.observableListStore.deleteTodo(id);
    }

    onDelete(item) {
        Alert.alert(
            'Delete',
            'Are you sure?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                { text: 'OK', onPress: () => this.deleteList(item.key) }
            ],
            { cancelable: false },
        );
    }

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
                    <Text style={styles.addButtonText}>+</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Home;