import { put, takeLatest } from "redux-saga/effects";

function* fetchUser(user: any) {
  yield put({ type: "TASK_ADDED", payload: user });
}

function* mySaga() {
  yield takeLatest("TASK_ADD", fetchUser);
}

export default mySaga;
