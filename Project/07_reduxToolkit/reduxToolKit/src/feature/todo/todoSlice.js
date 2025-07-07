import { createSlice, nanoid } from "@reduxjs/toolkit"; // Corrected: 'namoid' → 'nanoid'

const initialState = {
    todos: [{ id: 1, text: "Hello World" }]
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            };
            state.todos.push(todo); 
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        }
    }
});

// Export actions
export const { addTodo, removeTodo } = todoSlice.actions;

// Export reducer
export default todoSlice.reducer;
