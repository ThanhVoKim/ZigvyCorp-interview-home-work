import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import { ConfigProvider } from 'antd';

import Routers from 'routes';

const App: React.FC = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ConfigProvider
					theme={{
						token: {
							colorPrimary: '#0057fc',
						},
					}}
				>
					<Routers />
				</ConfigProvider>
			</PersistGate>
		</Provider>
	);
};

export default App;
