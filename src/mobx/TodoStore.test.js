import { ObservableListStore as Todostore } from "../mobx/TodoStore"
import observableListStore from "../mobx/TodoStore"

// describe("ObservableListStore", () => {
//     it("creates new todos", () => {
//         // const store = new ObservableListStores
//         store.createTodo({title:"todo1"})
//         store.createTodo({title:"todo2"})
//         expect(store.todos.length).toBe(2)
//         expect(store.todos[0].title).toEqual("todo1")
//         expect(store.todos[1].title).toEqual("todo2")
//     })
// })
import 'react-native';
import React from 'react';
import Home from '../screens/home';

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
        
        // const spy = jest.spyOn(Home.prototype, 'getData');
        // const wrapper = shallow(<Home observableListStore={observableListStore} />);
        // expect(spy).toNotHaveBeenCalled();
        // wrapper.find('Button').first().props().onPress();
        // expect(spy).toHaveBeenCalled();

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

        // it('navigate to add screen', () => {
        //     // home.find('Button').first().props().onPress();
        //     expect(spy1).toHaveBeenCalled();
        // });
    });
});