import React, { Component } from 'react';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
import styles from '../style/style';
import { observer, inject } from 'mobx-react'

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

    componentDidMount() {
        const todo = this.props.navigation.getParam('todo');
        this.setState({ id: todo.key.toString() });
        this.setState({ title: todo.title });
    }

    changeTodo() {
        const t = this.props.navigation.getParam('todo');
        if (this.state.title !== '') {

            const todo = {
                title: this.state.title,
                id: this.state.id,
            };
            this.props.observableListStore.updateTodo(todo);
            this.props.navigation.navigate('home');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>-UPDATE TODOS-</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    <View pointerEvents="none">
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(id) => this.setState({ id })}
                            value={this.state.id}
                            placeholder='Id'
                            placeholderTextColor='black'
                            underlineColorAndroid='transparent'>
                        </TextInput>
                    </View>
                    <TextInput
                        style={styles.textInput}
                        value={this.state.title}
                        onChangeText={(title) => this.setState({ title })}
                        placeholder='title'
                        placeholderTextColor='black'
                        underlineColorAndroid='transparent'>
                    </TextInput>
                </ScrollView>

                <Button color="#3bbfb2"
                    title="Update"
                    onPress={this.changeTodo}
                />
            </View>
        );
    }
}

export default Update;