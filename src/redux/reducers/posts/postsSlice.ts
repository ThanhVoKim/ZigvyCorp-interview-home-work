import { createSlice } from '@reduxjs/toolkit';
import { IPost } from 'common/types';

interface IPostsState {
	posts: IPost[];
	loading: boolean;
}

const initialState: IPostsState = {
	posts: [],
	loading: false,
};

const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		setPosts(state, action) {
			state.posts = action.payload;
		},
		setLoading(state, action) {
			state.loading = action.payload;
		},
	},
});

export const { setPosts, setLoading } = postsSlice.actions;

export default postsSlice.reducer;
