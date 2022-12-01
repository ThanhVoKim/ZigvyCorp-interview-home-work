import { createSlice } from '@reduxjs/toolkit';
import { IUser } from 'common/types';

export interface IUsersState {
	users: IUser[];
}

const initialState: IUsersState = {
	users: [],
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers(state, action) {
			const newUsers: IUser[] = action.payload;
			state.users.push(...newUsers);
		},
	},
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
