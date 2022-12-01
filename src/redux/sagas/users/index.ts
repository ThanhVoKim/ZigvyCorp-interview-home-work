import { all, call, put, takeLatest } from 'redux-saga/effects';

import { apiUrl, fetchApi } from 'common/utils/fetchApi';
import { IUser } from 'common/types';
import { setUsers } from 'redux/reducers/users/usersSlice';

export const SET_USERS = 'SET_USERS';

export function* setUsersSaga(action: any) {
	const response: IUser[] = yield call(fetchApi, `${apiUrl}/users`);
	if (response) {
		yield put(setUsers(response));
	}
}

export default function* usersSaga() {
	yield all([takeLatest(SET_USERS, setUsersSaga)]);
}
