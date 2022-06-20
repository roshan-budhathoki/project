import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, all, fork, takeLatest } from "redux-saga/effects";
import { addUser, checkUser } from "../../features/userSlice";
import { requestGetUser } from "../requests/user";


function* handleGetUser(action: PayloadAction): any {
    try{
        console.log("roshan");
        const response = yield call(requestGetUser);
        yield put(addUser(response.data));
    }catch(error){
        console.log(error)
    }
}

function* watcherSaga() {
    yield takeLatest(addUser.type, handleGetUser);
}

function* handleCheckUser(action: PayloadAction): any {
    try{
        console.log("user Authenticated");
        const response = yield call(requestGetUser);
        console.log(response.data); 
    }catch(error){
        console.log(error)
    }
}

function* checkWatcherSaga() {
    yield takeLatest(checkUser.type, handleCheckUser);
}

export default function* rootSaga(){
    yield all([
        fork(watcherSaga),
        fork(checkWatcherSaga)
    ]);
}
