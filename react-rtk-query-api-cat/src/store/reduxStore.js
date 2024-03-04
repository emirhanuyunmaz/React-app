import { configureStore } from "@reduxjs/toolkit";
import { catApiSlice } from "./catApi/catApiSlicer";

//Bu veri çekme işlemi sayesinde ilk önce catch a atar ve oradan çeker daha hızlı olması sağlanmaktadır.

//Veri çekmek için redux yapısının eklenmesi işlemi
export const store = configureStore({
    reducer:{
        [catApiSlice.reducerPath] :catApiSlice.reducer
    },
    middleware : (getDefaultMiddlevare) => {
        return getDefaultMiddlevare().concat(catApiSlice.middleware)
    }
})