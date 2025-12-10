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
import Login from "../Pages/Authentication/Login";
import ApplyLoan from "../Pages/ApplyLoan/ApplyLoan";
import ManageUsers from "../Pages/Dashboard/ManageUsers";
import Alloan from "../Pages/Dashboard/Alloan";
import LoanApplications from "../Pages/Dashboard/LoanApplications";

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
                path: '/apply-loan/:id',
                element: <PrivateRoute>
                    <ApplyLoan />
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
            {
                path: '/login',
                element: <Login />
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
            {
                path: '/dashboard/manage-users',
                element: <PrivateRoute>
                    <ManageUsers />
                </PrivateRoute>
            },
         
            {
                path: '/dashboard/All-loan',
                element: <PrivateRoute>
                    <Alloan />
                </PrivateRoute>
            },
            {
                path: '/dashboard/Loan-application',
                element: <PrivateRoute>
                       <LoanApplications/>                     
                </PrivateRoute>
            },
        ]
    }

])
export default Router