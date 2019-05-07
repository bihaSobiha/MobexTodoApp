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

it('Home screen renders correctly', () => {
    const home = shallow(<Home observableListStore={observableListStore} />);
    renderer.create(home);
});

describe('Home', () => {
    describe('when the home is start to load', () => {
        const spy = jest.spyOn(Todostore.prototype, 'fetchTodo');
        const home = shallow(<Home observableListStore={observableListStore} />);

        const mockData = observable(
            [{ id: 1, title: "test" }, { id: 2, title: 'item' }]
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
        });

        it('calls the `fetchData` function and check the length of datas', () => {
            expect(home.props().observableListStore.todos.length).toBe(2);
        });

        it('sets the `state.todos` that we get from the GET request', () => {
            expect(home.props().observableListStore.todos[0].title).toEqual(mockData[0].title);
        });
    });
});