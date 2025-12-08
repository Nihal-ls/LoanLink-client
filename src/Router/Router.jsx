import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Pages/Home/Home";
import LoansDetails from "../Pages/LoansDetails";
import Allloans from "../Pages/Allloans/Allloans";
import Register from "../Pages/Authentication/Register";
import Profile from "../Pages/Profile/Profile";
import DashBoardLayout from "../Layouts/Dashboard/DashBoardLayout";
import PrivateRoute from "./PrivateRouter";
import Myloans from "../Pages/Dashboard/Myloans";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                loader: () => fetch(`${import.meta.env.VITE_DOMAIN}/Homeloans`),
                Component: Home
            },
            {
                path: '/details/:id',
                element: <PrivateRoute>
                    <LoansDetails />
                </PrivateRoute>
            },
            {
                path: '/AllLoans',
                loader: () => fetch(`${import.meta.env.VITE_DOMAIN}/Allloans`),
                element: <Allloans />
            },
            {
                path: '/Register',
                element: <Register />
            },

        ],

    },
    {
        path: '/dashboard',
        element: <PrivateRoute>
            <DashBoardLayout />
        </PrivateRoute>,
        children: [
            {

                index: true,
                element: <PrivateRoute>
                    <Myloans />
                </PrivateRoute>
            },
            {
                path: '/dashboard/profile',
                element: <PrivateRoute>
                    <Profile />
                </PrivateRoute>
            },
        ]
    }

])
export default Router