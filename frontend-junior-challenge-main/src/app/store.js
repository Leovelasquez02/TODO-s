import { configureStore } from '@reduxjs/toolkit'
import  taskReducer  from "../features/counter/counterSlice";


export const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
})
