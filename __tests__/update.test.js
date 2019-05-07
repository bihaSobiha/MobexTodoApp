import { ObservableListStore as Todostore } from "../src/mobx/TodoStore"
import observableListStore from "../src/mobx/TodoStore"
import 'react-native';
import React from 'react';
import Update from '../src/screens/update';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { observable } from 'mobx';

it('Update screen renders correctly', () => {
    const todo = { key: 1, title: 'need to be update' }
    const navigation = {
        navigate: jest.fn(),
        getParam: jest.fn(),
    };
    const update = shallow(<Update observableListStore={observableListStore} navigation={navigation} todo={todo}/>);
    renderer.create(update);
});

describe('todo-list', () => {
    describe('enzyme tests', () => {
        it('can update a Todo with Enzyme', async () => {
            const navigation = { navigate: jest.fn() };
            const todo = { key: 1, title: 'need to be update' }
            const wrapper = await mount(<Update observableListStore={observableListStore} todo={todo} navigation={navigation} />);

            const spy = jest.spyOn(Todostore.prototype, 'updateTodo');

            const mockData = observable(
                [{ id: 1, title: 'Have been updated...' }]
            );
            const mock = new MockAdapter(axios);
            mock
                .onPut('http://10.0.2.2:3000/todos/' + mockData[0].id)
                .reply(200, mockData);

            const updateTodoText = 'Have been updated...';
            const updateTodoTextInput = wrapper.find('TextInput').last();
            const updateTodoButton = wrapper
                .find('TouchableOpacity')
                .findWhere(w => w.text() === 'UPDATE')
                .first();

            await updateTodoTextInput.props().onChangeText(updateTodoText);
            await updateTodoButton.props().onPress();
            wrapper.update();

            expect(spy).toHaveBeenCalled();
            expect(wrapper.props().observableListStore.todos[0].title).toEqual(mockData[0].title);
        });
    });
});