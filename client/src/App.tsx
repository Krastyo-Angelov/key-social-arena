import './App.css';
import {
	createBrowserRouter,
	Navigate,
	RouterProvider,
} from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Register } from './pages/register/Register';
import { PathConstants } from './constants/path-constants';
import { Layout } from './components/layout/Layout';
import { Error } from './pages/error/Error';
import { ReactNode, useState } from 'react';

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

	const ProtectedRoute = ({ children }: { children: ReactNode }) => {
		// If there user is not logged in
		if (!isLoggedIn) {
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
