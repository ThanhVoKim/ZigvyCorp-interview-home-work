import { Avatar, Layout, Space, Row } from 'antd';
import React from 'react';
import { faker } from '@faker-js/faker';
import { Outlet } from 'react-router-dom';

const MainLayout: React.FC = () => {
	return (
		<>
			<Layout className="layout">
				<Layout.Header
					className="header-nav"
					style={{
						background: '#f8f8f8',
						lineHeight: 1,
						boxShadow: '0 0px 3px 5px rgba(0, 0, 0, 0.05)',
						display: 'flex',
						alignItems: 'center',
						padding: 0,
					}}
				>
					<div style={{ width: '100%' }}>
						<Row justify="space-between" align="middle" className="container">
							<div>Logo</div>
							<div>
								<h1
									style={{
										fontSize: '36px',
									}}
								>
									Blogs
								</h1>
							</div>
							<Space>
								<Avatar gap={4} size="large" src={faker.image.avatar()} />
								<p>Võ Kim Thành</p>
							</Space>
						</Row>
					</div>
				</Layout.Header>
				<Layout.Content style={{ margin: '50px 0' }}>
					<Outlet />
				</Layout.Content>
			</Layout>
		</>
	);
};
export default MainLayout;
