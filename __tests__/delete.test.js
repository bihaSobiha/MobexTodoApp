import { ObservableListStore as Todostore } from "../src/mobx/TodoStore"
import observableListStore from "../src/mobx/TodoStore"
import 'react-native';
import React from 'react';
import Home from '../src/screens/home';
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { observable } from 'mobx';
import List from '../src/components/list';
import Alert from 'Alert'

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

        jest.mock('Alert', () => {
            return {
                alert: jest.fn()
            }
        });
        it('can delete a Todo with Enzyme', async () => {
            const mock = new MockAdapter(axios);
            mock
                .onDelete('http://10.0.2.2:3000/todos/' + mockData[0].id)
                .reply(200, mockData);
            const deleteTodoButton = wrapper
                .find(List).find('TouchableOpacity')
                .findWhere(w => w.prop('name') === 'trash-o')
                .first()
            deleteTodoButton.props().onPress();
            expect(deleteTodoButton).toHaveLength(1)

            expect(Alert.alert).toHaveBeenCalled();
            await Alert.alert.mock.calls[0][2][1].onPress()
            expect(spydel).toHaveBeenCalled();
            wrapper.update();
            expect(wrapper.props().observableListStore.todos[0].title).toEqual(mockData[1].title);
            expect(wrapper.props().observableListStore.todos.length).toBe(1);
        })
    });
});