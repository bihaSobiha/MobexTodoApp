import { ObservableListStore as Todostore } from "../mobx/TodoStore"
import observableListStore from "../mobx/TodoStore"
import 'react-native';
import React from 'react';
import Home from './home';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { observable } from 'mobx';
import List from '../components/list';

it('Home screen renders correctly', () => {
    const home = shallow(<Home observableListStore={observableListStore} />);
    renderer.create(home);
});

describe('todo-list', () => {
    describe('enzyme tests', () => {

        const spy = jest.spyOn(Todostore.prototype, 'fetchTodo');
        const wrapper = mount(<Home observableListStore={observableListStore} />);

        const spydel = jest.spyOn(Todostore.prototype, 'deleteTodo');

        const mockData = observable(
            [{ id: 1, title: 'Need to be delete...' }, { id: 2, title: 'Have been deleted...' }]
        );
        beforeEach(async () => {
            const mock = new MockAdapter(axios);
            mock
                .onGet("http://10.0.2.2:3000/todos")
                .reply(200, mockData);
            await mount(<Home observableListStore={observableListStore} />)
        });

        it('calls the `fetchData` function', () => {
            expect(spy).toHaveBeenCalled();
            wrapper.update();
        });

        it('calls the `fetchData` function and check the length of datas', () => {
            expect(wrapper.props().observableListStore.todos.length).toBe(2);
        });

        it('can delete a Todo with Enzyme', async () => {
            const mock = new MockAdapter(axios);
            mock
                .onDelete('http://10.0.2.2:3000/todos/' + mockData[0].id)
                .reply(200, mockData);

            const deleteTodoButton = wrapper
                .find(List).find('Icon')
                .findWhere(w => w.text() === 'trash-o')
                .first()
            expect(deleteTodoButton).toHaveLength(1)
            await deleteTodoButton.props().onPress();
            wrapper.update();

            expect(spydel).toHaveBeenCalled();
            expect(wrapper.props().observableListStore.todos[0].title).toEqual(mockData[1].title);
            expect(wrapper.props().observableListStore.todos.length).toBe(1);
        });
    });
});