import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const createTask = createAsyncThunk('add/task', async (task, thunkApi) => {


    const response = await fetch('todos', {
        method: "POST",
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(task)
    })
    const data = await response.json()


    if (response.ok) {
        return data
    }
    else {
        return thunkApi.rejectWithValue(data)
    }


})

export const fetchTasks = createAsyncThunk('fetch/tasks', async () => {
    const response = await fetch('logged_in')

    const data = await response.json()

    return data.todos
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
    errors: [],
    success: false
}


const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        resetSuccess(state) {
            state.success = false
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(createTask.pending, (_, state) => {
                state.status = "loading"
            })

            .addCase(createTask.fulfilled, (state, action) => {
                state.status = "idle"
                state.success = true
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

export const { resetSuccess } = taskSlice.actions
export default taskSlice.reducer
