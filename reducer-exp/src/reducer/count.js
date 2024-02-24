import { DECREMENT, INCREMENT, RESET } from "./acitonType"

//Buradaki değer başlangıçta atancak değer.
export const initialCountState = 0

export const counterReducer = (state,action) => {
    switch(action){
        case INCREMENT: 
            console.log(INCREMENT)
            return state + 1
        case DECREMENT:
            console.log(DECREMENT)
            return state - 1
        case RESET : 
            console.log(RESET)
            return 0
        default:
            console.log("Default")
            return state
    }
} 