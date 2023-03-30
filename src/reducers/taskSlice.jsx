import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createTask = createAsyncThunk('add/task', async (task) => {
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

export const fetchTasks = createAsyncThunk('fetch/tasks', async () => {
    const response = await fetch('')

    const data = await response.json()

    return data
})

export const updateTask = createAsyncThunk('update/task', async (task, taskID) => {
    const response = await fetch('', {
        method: "PATCH",
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

const initialState = {
    tasks: [],
    status: "idle",
    errors: []
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        // addTask: (state, action) => {
        //     state.tasks.push(action.payload)
        // },
        // deleteTask: (state, action) => {
        //     state.tasks = state.tasks.filter(task => task.id !== action.payload)
        // },
    },

    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (_, state) => {
                state.status = "loading"
            })

            .addCase(createTask.fulfilled, (state, action) => {
                state.status = "idle"
                state.tasks.push(action.payload)
            })
            .addCase(createTask.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.payload
            })

            .addCase(fetchTasks.pending, (_, state) => {
                state.status = "loading"
            })

            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.status = "idle"
                state.tasks = action.payload
            })

            .addCase(fetchTasks.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.payload
            })


            .addCase(updateTask.pending, (_, state) => {
                state.status = "loading"
            })
            .addCase(updateTask.fulfilled, (state, action) => {
                state.status = "idle"
                state.tasks = state.tasks.map(task => {
                    if (task.id === action.payload.id) {
                        return action.payload
                    }
                    else {
                        return task
                    }
                })
            })

            .addCase(updateTask.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.payload
            })

            .addDefaultCase((state, action) => { })

    }
})

export const { addTask, deleteTask } = taskSlice.actions

