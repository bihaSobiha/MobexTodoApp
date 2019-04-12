import store from "./TodoStore"

describe("ObservableListStore", () => {
    it("creates new todos", () => {
        // const store = new ObservableListStores
        store.createTodo({title:"todo1"})
        store.createTodo({title:"todo2"})
        expect(store.todos.length).toBe(2)
        expect(store.todos[0].title).toEqual("todo1")
        expect(store.todos[1].title).toEqual("todo2")
    })
})