import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainLayout from 'layouts/MainLayout';
import SuspenseElement from 'components/SuspenseElement';

const Blogs = lazy(() => import('pages/Blogs'));

const Routers = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route
						index
						element={
							<SuspenseElement>
								<Blogs />
							</SuspenseElement>
						}
					/>
					<Route
						path="/blogs"
						element={
							<SuspenseElement>
								<Blogs />
							</SuspenseElement>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default Routers;
