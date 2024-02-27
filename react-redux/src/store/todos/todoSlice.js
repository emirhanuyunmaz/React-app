import { createReducer, createSlice } from "@reduxjs/toolkit"


const initialStateTodo =[]

const todoSlice = createSlice({
    name : "todo",
    initialState : initialStateTodo,
    reducers : {
        addTodo(state,action) {
            state.unshift(action.payload)
        }
        ,
        removeTodo(state,action){
            state.splice(action.payload,1)
        }
    }
})
export const {addTodo , removeTodo } = todoSlice.actions
export default todoSlice.reducer