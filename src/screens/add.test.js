import { ObservableListStore as Todostore } from "../mobx/TodoStore"
import observableListStore from "../mobx/TodoStore"
import 'react-native';
import React from 'react';
import Add from './add';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { observable } from 'mobx';

it('Add screen renders correctly', () => {
    const add = shallow(<Add observableListStore={observableListStore} />);
    renderer.create(add);
});

describe('todo-list', () => {
    describe('enzyme tests', () => {
        it('can add a Todo with Enzyme', async () => {
            const wrapper = mount(<Add observableListStore={observableListStore} />);

            const spy = jest.spyOn(Todostore.prototype, 'createTodo');

            const mockData = observable(
                [{ id: 1, title: 'I need to do something...' }]
            );
            const mock = new MockAdapter(axios);
            mock
                .onAny("http://10.0.2.2:3000/todos")
                .reply(200, mockData);
            
            const newTodoText = 'I need to do something...';
            const newTodoTextInput = wrapper.find('TextInput').first();
            const addTodoButton = wrapper
                .find('Button')
                .findWhere(w => w.text() === 'Add')
                .first();

            await newTodoTextInput.props().onChangeText(newTodoText);
            await addTodoButton.props().onPress();
            wrapper.update();

            expect(spy).toHaveBeenCalled();
            expect(wrapper.props().observableListStore.todos[1].title).toEqual(mockData[0].title);
        });
    });
});