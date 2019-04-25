import { ObservableListStore as Todostore } from "../mobx/TodoStore"
import observableListStore from "../mobx/TodoStore"
import 'react-native';
import React from 'react';
import Update from './update';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { observable } from 'mobx';

it('Update screen renders correctly', () => {
    const todo = { key: 1, title: 'need to be update' }
    const update = shallow(<Update observableListStore={observableListStore} todo={todo} />);
    renderer.create(update);
});

describe('todo-list', () => {
    describe('enzyme tests', () => {
        it('can update a Todo with Enzyme', async () => {
            const todo = { key: 1, title: 'need to be update' }
            const wrapper = await mount(<Update observableListStore={observableListStore} todo={todo} />);
            // expect(wrapper.props().observableListStore.todos[0].title).toEqual(todo.title); //need to check initial value before update

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
                .find('Button')
                .findWhere(w => w.text() === 'Update')
                .first();

            await updateTodoTextInput.props().onChangeText(updateTodoText);
            await updateTodoButton.props().onPress();
            wrapper.update();

            expect(spy).toHaveBeenCalled();
            expect(wrapper.props().observableListStore.todos[0].title).toEqual(mockData[0].title);
        });
    });
});