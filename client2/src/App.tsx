import './App.css';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { Home } from './components/pages/home/Home';
import { Register } from './components/pages/register/Register';
import { PathConstants } from './constants/path-constants';
import { Layout } from './components/layout/Layout';
import { Error } from './components/pages/error/Error';
import { ReactNode } from 'react';

export default function App() {
	const ProtectedRoute = ({ children }: { children: ReactNode }) => {
		// If there user is not logged in
		if (true) {
			return <Navigate to={PathConstants.REGISTER} />;
		}

		return <>{children}</>;
	};

	const router = createBrowserRouter([
		{
			path: '/',
			// parent route component
			element: (
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			// error route component
			errorElement: <Error />,
			// children route components
			children: [{ path: PathConstants.HOME, element: <Home /> }],
		},
		{
			path: '/register',
			element: <Register />,
		},
	]);

	return <RouterProvider router={router} />;
}
