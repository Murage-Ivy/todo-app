import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


export const addUser = createAsyncThunk("user/login", async (user) => {
    const response = await fetch("http://localhost:3000/api/v1/login", {
        method: "POST",
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ user })
    }
    )
    const data = await response.json()
    if (response.ok) {
        return data
    }
    else {
        return data.errors
    }

})

const initialState = {
    user: {
        email: "",
        password: "",
    },
    status: "idle",
    errors: []
}


const loggedUser = createSlice({
    name: "user",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state, _) => {
                state.status = "loading"
            })

            .addCase(addUser.fulfilled, (state, action) => {
                state.status = "success"
                state.user = action.payload
            })

            .addCase(addUser.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.payload
            })

            .addDefaultCase((state, action) => { })
    }
})

export default loggedUser.reducer
