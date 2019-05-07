import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../style/style';
import { observer, inject } from 'mobx-react';

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
        // const todo = this.props.todo //remove the comment for test only
        this.setState({ id: todo.key.toString() })
        this.setState({ title: todo.title });
    }

    async changeTodo() {
        if (this.state.title !== '') {

            const todo = {
                title: this.state.title,
                id: this.state.id,
            };
            await this.props.observableListStore.updateTodo(todo);
            this.props.navigation.navigate('HOME');
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
                            value={(this.state.id).toString()}
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

                <TouchableOpacity onPress={this.changeTodo}>
                    <Text style={styles.loginBtnText}>UPDATE</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default Update;