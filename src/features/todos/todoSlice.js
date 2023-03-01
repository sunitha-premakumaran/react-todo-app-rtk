import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    initialState: initialState,
    name: 'todo',
    reducers: {
        addTodo: (state, actions) => {
            state.todos = [...state.todos, actions.payload];
        },
        removeTodo: (state, actions) => {
            const itemIndex = state.todos.findIndex((item) => item.id === actions.payload.id);
            state.todos.splice(itemIndex, 1);
        }
    }
});

export const { addTodo, removeTodo } = todoSlice.actions; 

export default todoSlice.reducer;