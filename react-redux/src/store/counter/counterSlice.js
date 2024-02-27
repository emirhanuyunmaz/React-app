import { createSlice } from "@reduxjs/toolkit"
//Başlangıç değerinin verilmesi işlemi.
const initialState = {value : 100}

//Yapılacak işlemlerin ve fonk değerlerinin tanımlanması.
const counterSlice = createSlice({
    name:"counter",
    initialState : initialState,
    reducers:{
        increment(state){
            state.value++
        }
        ,
        decrement(state){
            state.value--
        }
        ,
        reset(state){
            state.value = 0
        }
        ,
        addMore(state,action){
            //action değişkeni yerine herhangi bir isimlendirme yapılabilir.
            console.log("addMore : ",action)
            //Burada parametre olarak gelen verileri alma işlemi yapılmıştır.
            state.value += action.payload.item
        }
    }
})

//Verilerin dışarı çıkarılması işlemi. 
export const { addMore , increment , decrement , reset } = counterSlice.actions
export default counterSlice.reducer 