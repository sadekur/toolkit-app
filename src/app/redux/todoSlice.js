import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

const Slice = createSlice({
    name: "todoList",
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const data = {
                id: nanoid,
                name: action.payload.name,
            }
            state.todos.push(data);
        }
    },
})

export const { addTodos } = Slice.actions;
export default Slice.reducer;