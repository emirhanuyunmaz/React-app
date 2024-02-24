import { ADD_TODO } from "./todoActionType"

export const initialTodo = {
    todoList:[],
    todo:""
}

export const reducerTodo = (state , action) => {
    switch(action.type){
        case ADD_TODO :
            return {
                ...state,
                todoList:[...state.todoList,action.payload],
                title:action.payload
            }
    }

}