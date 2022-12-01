import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, Row, Space, Spin } from 'antd';

import Post from 'components/Post';
import { RootState } from 'redux/store';
import { SET_USERS } from 'redux/sagas/users';
import { SET_POSTS } from 'redux/sagas/posts';
import Search from 'antd/es/input/Search';
import { useSearchParams } from 'react-router-dom';

const Blogs: React.FC = () => {
	const { users } = useSelector((state: RootState) => state.usersReducer);
	const { posts, loading } = useSelector(
		(state: RootState) => state.postsReducer,
	);
	const [searchParams, setSearchParams] = useSearchParams();
	const { q = '', page = '1' } = Object.fromEntries(searchParams);

	const dispatch = useDispatch();

	useEffect(() => {
		if (users.length > 0) return;
		dispatch({ type: SET_USERS });
	}, []);

	useEffect(() => {
		dispatch({ type: SET_POSTS, payload: { page, q } });
	}, [page, q]);

	const handlePageChange = (page: number) => {
		setSearchParams((prev) => ({
			...Object.fromEntries(prev),
			page: String(page),
		}));
	};

	const handleSearch = (q: string) => {
		setSearchParams((prev) => ({ page: '1', q }));
	};

	return (
		<div className="container">
			<div style={{ marginBottom: '20px', width: '300px', maxWidth: '100%' }}>
				<Search
					placeholder="Full search text"
					onSearch={handleSearch}
					enterButton
				/>
			</div>
			{loading ? (
				<Row justify="center">
					<Spin tip="Loading" />
				</Row>
			) : posts.length === 0 ? (
				<p
					style={{
						textAlign: 'center',
						marginTop: 60,
						color: 'gray',
						fontWeight: 300,
					}}
				>
					There are currently no posts
				</p>
			) : (
				<>
					<Space direction="vertical" size={30} style={{ display: 'flex' }}>
						{posts.map((post) => {
							return <Post post={post} key={post.id} />;
						})}
					</Space>
					<div
						style={{
							marginTop: '20px',
							display: 'flex',
							justifyContent: 'flex-end',
						}}
					>
						<Pagination
							current={Number(page)}
							total={100}
							onChange={handlePageChange}
							showLessItems
							showSizeChanger={false}
						/>
					</div>
				</>
			)}
		</div>
	);
};

export default Blogs;
