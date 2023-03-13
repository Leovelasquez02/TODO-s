import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const gestTasks = createAsyncThunk("tasks/getTasks", async () => {
    return fetch("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos")
    .then((res) => 
     res.json()
    )   
})

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        loading: false
    },
    extraReducers: {
        [gestTasks.pending]: (state, action) => {
            state.loading = true
        },
        [gestTasks.fulfilled]: (state, action) => {
            state.loading = false
            state.tasks = action.payload
        },
        [gestTasks.rejected]: (state, action) => {
            state.loading = false
            
        },
      /*  [addTasks]: (state, action) => {
            console.log(state, action)
            
        }, */
    }
})

export const {addTasks} = taskSlice.actions
export default taskSlice.reducer
