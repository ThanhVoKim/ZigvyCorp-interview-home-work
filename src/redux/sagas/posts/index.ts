import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { apiUrl, fetchApi, pageSize } from 'common/utils/fetchApi';
import { IPost } from 'common/types';
import { setLoading, setPosts } from 'redux/reducers/posts/postsSlice';
import { faker } from '@faker-js/faker';
import { TAGS } from 'common/constants/tags';

export const SET_POSTS = 'SET_POSTS';

export function* getPostsSaga(action: any) {
	const { page, q } = action.payload;

	try {
		yield put(setLoading(true));
		const response: IPost[] = yield call(
			fetchApi,
			`${apiUrl}/posts?_page=${page}&_limit=${pageSize}&q=${q}&_embed=comments`,
		);

		if (response) {
			const result = response.map((post) => {
				const createdAt = faker.date.past();
				const comments = post.comments.map((c) => ({
					...c,
					createdAt: faker.date.between(createdAt, new Date()),
				}));
				return {
					...post,
					createdAt,
					tags: faker.helpers.arrayElements(
						TAGS,
						Math.round(Math.random() * 8),
					),
					comments,
				};
			});

			yield put(setPosts(result));
		}
	} catch (error) {
		console.error(error);
	} finally {
		yield put(setLoading(false));
	}
}

export default function* postsSaga() {
	yield all([takeLatest(SET_POSTS, getPostsSaga)]);
}
