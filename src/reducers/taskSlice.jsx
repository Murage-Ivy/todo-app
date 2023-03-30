import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const addTask = createAsyncThunk('add/task', async (task) => {
    const response = await fetch('', {
        method: "POST",
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ task })
    })
    const data = await response.json()

    if (response.ok) {
        return data
    }
    else {
        return data.errors
    }

})

const

const taskSlice 

