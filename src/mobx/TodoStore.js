import { observable, action } from "mobx";
import axios from 'axios';
import { fromPromise } from 'mobx-utils';

export class ObservableListStore {
  @observable todos = [fromPromise(Promise.resolve())];
  //  todos = observable([]);

  @action async fetchTodo() {
    await axios.get("http://10.0.2.2:3000/todos")
      .then((response) => {
        this.todos = response.data;
      });
  }

  @action async deleteTodo(param) {
    await axios.delete('http://10.0.2.2:3000/todos/' + param)
      .then((response) => {
        this.todos = this.todos.filter((l) => {
          return l.id !== param
        })
      });
  }

  @action async createTodo(todoData) {
    await axios({
      method: 'post',
      url: "http://10.0.2.2:3000/todos",
      data: todoData
    })
      .then((response) => {
        this.todos.push(todoData);
      });
    // this.todos.push(todoData);
  }

  @action async updateTodo(todoData) {
    await axios({
      method: 'put',
      url: 'http://10.0.2.2:3000/todos/' + todoData.id,
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

// export default new ObservableListStore