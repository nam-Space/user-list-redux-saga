import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";

import {
    DELETE_USER,
    DELETE_USER_SUCCESS,
    FETCH_USER,
    FETCH_USER_SUCCESS,
} from "../redux/action";

function* getUser(action) {
    try {
        const res = yield axios.get("http://localhost:3001/users");
        yield put({ type: FETCH_USER_SUCCESS, payload: res.data });
    } catch (error) {
        console.log(error);
    }
}

function* deleteUser(action) {
    try {
        const id = action.payload;
        const res = yield axios.delete(`http://localhost:3001/users/${id}`);
        alert(`response status ${res.status}`);
        yield put({ type: DELETE_USER_SUCCESS, payload: id });
    } catch (error) {
        console.log(error);
    }
}

export default function* rootSaga() {
    yield takeLatest(FETCH_USER, getUser);
    yield takeLatest(DELETE_USER, deleteUser);
}
