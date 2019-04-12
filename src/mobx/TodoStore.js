import { observable, action } from "mobx";
import axios from 'axios';

export class ObservableListStore {
  @observable todos = [];

  fetchTodo() {
    axios.get("http://10.0.2.2:3000/todos")
      .then((response) => {
        this.todos = response.data;
      });
  }

  deleteTodo(param) {
    axios.delete('http://10.0.2.2:3000/todos/' + param)
      .then((response) => {
        this.todos = this.todos.filter((l) => {
          return l.id !== param
        })
      });
  }

  createTodo(todoData) {
    axios({
      method: 'post',
      url: "http://localhost:3004/todos",
      data: todoData
      })
      .then((response) => {
        this.todos.push(todoData);
      });
      this.todos.push(todoData);
  }
  // 10.0.2.2:3000
  updateTodo(todoData) {
  axios({
    method: 'put',
    url: 'http://10.0.2.2:3000/todos/'+todoData.id,
    data: todoData
    })
    .then((response) => {
      this.todos.push(todoData);
    });
  }
}


const observableListStore = new ObservableListStore()
export default observableListStore

// export default new ObservableListStore