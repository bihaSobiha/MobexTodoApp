//This file for manage all the store
import { observable, action } from "mobx";
import axios from 'axios';
import { fromPromise } from 'mobx-utils';
import { toDoAppConstants as constants } from '../constants/constants';

export class ObservableListStore {
  @observable todos = [fromPromise(Promise.resolve())]; //initialize an empty array
  //  todos = observable([]);

  //Get the TodoList from API call
  @action async fetchTodo() {
    await axios.get(constants.API)
      .then((response) => {
        this.todos = response.data;
      });
  }

  //Delete an item of TodoList from API call 
  @action async deleteTodo(param) {
    await axios.delete(constants.API + '/' + param)
      .then((response) => {
        this.todos = this.todos.filter((l) => {
          return l.id !== param
        })
      });
  }

  //Create an item to TodoList from API call
  @action async createTodo(todoData) {
    await axios({
      method: 'post',
      url: constants.API,
      data: todoData
    })
      .then((response) => {
        this.todos.push(todoData);
      });
  }

  //Update a particuler item of TodoList from API call
  @action async updateTodo(todoData) {
    await axios({
      method: 'put',
      url: constants.API + '/' + todoData.id,
      data: todoData
    })
      .then((response) => {
        const start = this.todos.indexOf(todoData)
        this.todos.splice(start, 1, todoData);
      });
  }
}

const observableListStore = new ObservableListStore()
export default observableListStore