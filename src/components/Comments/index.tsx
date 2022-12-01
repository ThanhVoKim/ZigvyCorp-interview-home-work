import { faker } from '@faker-js/faker';
import dayjs from 'dayjs';
import { Avatar, Row, Space } from 'antd';
import { IPost } from 'common/types';
import React, { useState } from 'react';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

interface ICommentProps {
	post: IPost;
}

const Comments: React.FC<ICommentProps> = ({ post }) => {
	const { comments } = post;

	const [showComments, setShowComments] = useState<boolean>(false);

	return (
		<Row>
			<div
				onClick={() => setShowComments((show) => !show)}
				style={{
					cursor: 'pointer',
				}}
			>
				<p style={{ color: 'gray' }}>{comments.length} Replies</p>
			</div>

			{showComments ? (
				<Space
					size="middle"
					direction="vertical"
					style={{
						marginTop: '15px',
						paddingTop: '15px',
						borderTop: '1px solid rgb(226, 226, 226)',
						width: '100%',
					}}
				>
					{comments.map((comment) => (
						<div
							key={comment.id}
							style={{
								display: 'flex',
								alignItems: 'flex-start',
							}}
						>
							<div>
								<Avatar src={faker.image.avatar()} />
							</div>

							<div style={{ marginLeft: 10 }}>
								<p>
									<span style={{ fontWeight: 'medium', color: '#3c3c3c' }}>
										{comment.name}
									</span>
									<span
										style={{ fontWeight: 200, color: 'gray', marginLeft: 6 }}
									>
										{dayjs(comment.createdAt).fromNow()}
									</span>
								</p>
								<p style={{ marginTop: '5px' }}>{comment.body}</p>
							</div>
						</div>
					))}
				</Space>
			) : null}
		</Row>
	);
};

export default Comments;
