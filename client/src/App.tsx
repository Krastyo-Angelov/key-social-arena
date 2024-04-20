import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { Register } from "./pages/register/Register";
import { PathConstants } from "./constants/path-constants";

export default function App() {
  const router = createBrowserRouter([
    { path: PathConstants.HOME, element: <Home /> },
    { path: PathConstants.REGISTER, element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}
