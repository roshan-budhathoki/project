import { configureStore } from "@reduxjs/toolkit";
import  userReducer  from "../features/userSlice";
import createSagaMiddleware from "redux-saga";
import  rootSaga  from "../saga/handlers/user";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch