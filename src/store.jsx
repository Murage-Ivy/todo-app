import { configureStore } from "@reduxjs/toolkit";
import loggedUser from "./reducers/loginslice";
import signedUser from "./reducers/signupslice";
import taskSlice from "./reducers/taskSlice";


const store = configureStore({
    reducer: {
        // reducer
        loggedUser: loggedUser,
        signedUser: signedUser,
        task: taskSlice
    }
});

export default store;