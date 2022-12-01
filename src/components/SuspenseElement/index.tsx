import { Row, Spin } from 'antd';
import React, { Suspense } from 'react';

interface ISuspenseElementProps {
	children: React.ReactNode;
}

const SuspenseElement: React.FC<ISuspenseElementProps> = ({ children }) => {
	return (
		<Suspense
			fallback={
				<Row justify="center">
					<Spin tip="Loading" />
				</Row>
			}
		>
			{children}
		</Suspense>
	);
};

export default SuspenseElement;
