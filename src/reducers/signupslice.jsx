import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



export const signUpUser = createAsyncThunk("user/signup", async (user, thunkAPI) => {
    const response = await fetch('users', {
        method: "POST",
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify(user)
    })
    const data = await response.json()
    if (response.ok) {
        return data
    }
    else {
        return thunkAPI.rejectWithValue(data)

    }

})

const initialState = {
    user: {
        email: "",
        image: "",
        password: "",
        password_confirmation: "",

    },
    status: "idle",
    success: false,
    errors: {}
}
const signedUser = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetSuccess(state) {
            state.success = false
        },

        loginSuccess(state) {
            state.success = true
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signUpUser.pending, (state, _) => {
                state.status = "loading"
            })

            .addCase(signUpUser.fulfilled, (state, action) => {

                state.status = "idle"
                state.success = true
                state.user = action.payload

            })

            .addCase(signUpUser.rejected, (state, action) => {
                state.status = "failed"
                state.errors = action.payload

            })

            .addDefaultCase((state, action) => { })
    }

})

export default signedUser.reducer
export const { resetSuccess, loginSuccess } = signedUser.actions
