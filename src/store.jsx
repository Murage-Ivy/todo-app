import { configureStore } from "@reduxjs/toolkit";
import loggedUser from "./reducers/loginslice";


const store = configureStore({
    reducer: {
        // reducer
        loggedUser: loggedUser
    }
});

export default store;