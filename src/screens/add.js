import React, { Component } from 'react';
import { Text, View, ScrollView, Button, TextInput } from 'react-native';
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
            titleError = "You Should Enter the Title";
        }
        if (titleError) {
            this.setState({ titleError });
            return false;
        }
        return true;
    }

    addTodo() {
        const isValid = this.validate();
        if (isValid) {
            const todo = {
                title: this.state.title
            };
            this.props.observableListStore.createTodo(todo);
            this.props.navigation.navigate('home');
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>-ADD TODOS-</Text>
                </View>

                <ScrollView style={styles.scrollContainer}>
                    {/* <TextInput
                        style={styles.textInput}
                        onChangeText={(id) => this.setState({ id })}
                        value={this.state.id}
                        placeholder='Enter the Id'
                        placeholderTextColor='black'
                        underlineColorAndroid='transparent' /> */}
                    <View>
                        <TextInput
                            style={styles.textInput}
                            onChangeText={(title) => this.setState({ title })}
                            value={this.state.title}
                            placeholder='Enter the title'
                            placeholderTextColor='black'
                            underlineColorAndroid='transparent' />
                        <Text style={{ color: "red", fontSize: 14 }}> {this.state.titleError} </Text>
                    </View>
                </ScrollView>

                <Button color="#3bbfb2"
                    title="Add"
                    onPress={this.addTodo}
                />
            </View>
        );
    }
}

export default Add;