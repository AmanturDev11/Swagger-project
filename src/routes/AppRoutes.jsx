import {
	Navigate,
	RouterProvider,
	createBrowserRouter,
} from "react-router-dom";
import SignUp from "../components/registration/SignUp";
import SignIn from "../components/registration/SignIn";
import ComfirmByEmail from "../components/registration/ComfirmByEmail";
import HomePage from "../pages/HomePage";
import { useSelector } from "react-redux";
import { NotFaund } from "../pages/NotFaund";

const AppRoutes = () => {
	const { isAuth } = useSelector((state) => state.auth);
	const router = createBrowserRouter([
		{
			path: "/",
			element: isAuth ? <HomePage /> : <Navigate to="/signUp" />,
			errorElement: <NotFaund />,
		},
		{ path: "/signUp", element: <SignUp /> },
		{ path: "/comfirmEmail", element: <ComfirmByEmail /> },
		{ path: "/signIn", element: <SignIn /> },
		{ path: "/homePage", element: <HomePage /> },
	]);
	return <RouterProvider router={router} />;
};

export default AppRoutes;
