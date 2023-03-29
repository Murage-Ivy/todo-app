import { configureStore } from "@reduxjs/toolkit";
import loggedUser from "./reducers/loginslice";
import signedUser from "./reducers/signupslice";


const store = configureStore({
    reducer: {
        // reducer
        loggedUser: loggedUser,
        signedUser: signedUser
    }
});

export default store;