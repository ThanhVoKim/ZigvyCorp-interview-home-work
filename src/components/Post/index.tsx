import { Row, Col, Tag, Space } from 'antd';
import { IPost } from 'common/types';
import Comments from 'components/Comments';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'redux/store';

interface IPostProps {
	post: IPost;
}

const Post: React.FC<IPostProps> = ({ post }) => {
	const { tags, createdAt, body, title, userId } = post;

	const { users } = useSelector((state: RootState) => state.usersReducer);

	const user = useMemo(
		() => users.find((u) => u.id === userId),
		[userId, users],
	);

	return (
		<>
			<Space
				size="middle"
				direction="vertical"
				style={{ marginTop: 20, width: '100%' }}
			>
				<Row>
					<Col span={24}>
						<h2
							style={{
								textAlign: 'center',
								fontSize: '24px',
								fontWeight: 700,
								margin: 'auto',
								maxWidth: '500px',
							}}
						>
							{title}
						</h2>
					</Col>
				</Row>

				<Row justify="space-between" gutter={8}>
					<Col span={24} md={{ span: 8 }}>
						<Space size="small" direction="vertical">
							<p style={{ fontSize: 20, fontWeight: 500 }}>
								Author: {user?.name}
							</p>
							<p style={{ fontSize: 15, fontWeight: 300 }}>
								Created at:{' '}
								{createdAt?.toLocaleDateString('en-US', {
									month: 'long',
									day: 'numeric',
									year: 'numeric',
								})}
							</p>
						</Space>
					</Col>

					<Col
						span={24}
						md={{ span: 8 }}
						style={{
							display: 'flex',
							justifyContent: 'end',
							alignItems: 'center',
							flexWrap: 'wrap',
						}}
					>
						{tags?.map((value, index) => (
							<Tag key={String(index)} style={{ marginTop: 10 }} color={value}>
								{value}
							</Tag>
						))}
					</Col>
				</Row>

				<Row>
					<div>
						<p style={{ fontSize: 16, lineHeight: 1.4 }}>
							{`${body.substring(0, 150)}${body.length > 150 ? '...' : '.'}`}
						</p>
					</div>
				</Row>
				<Comments post={post} />
			</Space>
		</>
	);
};

export default Post;
