import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Register } from './pages/register/Register';
import { PathConstants } from './constants/path-constants';
import { Layout } from './components/layout/Layout';
import { Error } from './pages/error/Error';

export default function App() {
	const router = createBrowserRouter([
		{
			// parent route component
			element: <Layout />,
			// error route component
			errorElement: <Error />,
			// children route components
			children: [
				{ path: PathConstants.HOME, element: <Home /> },
				{ path: PathConstants.REGISTER, element: <Register /> },
			],
		},
	]);

	return <RouterProvider router={router} />;
}
