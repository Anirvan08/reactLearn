import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{ id : 1, text : 'Hello World!', complete : false}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers : {
        addTodo : (state, action) => {
            const todo = {
                id : nanoid(),
                text : action.payload, // we can use action.payload.text as well but this will also suffice as it works fine in new syntax
                complete : false
            }
            state.todos.push(todo)
        },
        removeTodo : (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        editTodo : (state, action) => {
            const {id, text} = action.payload;

            const existingTodo = state.todos.find(todo => todo.id === id)

            if(existingTodo)
                existingTodo.text = text;
        },
        toggleComplete : (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)

            if(todo)
                todo.complete = !todo.complete
        }
        //update, delete likh lenge baad mai
    }
});


export const {addTodo, removeTodo, editTodo, toggleComplete} =  todoSlice.actions

export default todoSlice.reducer