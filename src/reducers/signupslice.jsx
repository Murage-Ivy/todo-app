import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const addUser = createAsyncThunk("user/signup", async (user) => {
    const response = await fetch('', {
        method: "POST",
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({ user })
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
    user: {
        username: '',
        email: "",
        password: "",
        password_confirmation: ""
    },
    status: "idle",
    errors: []
}
const signedUser = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addUser.pending, (state, _) => {
                state.status = "loading"
            })

            .addCase(addUser.fulfilled, (state, action) => {
                state.status = "idle"
                state.user = action.payload
            })

            .addCase(addUser.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.payload
            })

            .addDefaultCase((state, action) => { })
    }

})

export default signedUser.reducer
