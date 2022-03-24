import { put, takeLatest } from "redux-saga/effects";
import { TASK_ADD, TASK_ADDED } from "./actions";

function* fetchUser(user:any) {
  yield put({ type: TASK_ADDED, payload: user.payload });
}

function* mySaga() {
  yield takeLatest(TASK_ADD, fetchUser);
}

export default mySaga;
