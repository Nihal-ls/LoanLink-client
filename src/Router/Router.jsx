import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Pages/Home/Home";
import LoansDetails from "../Pages/LoansDetails";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
             index: true,
             loader: () => fetch(`${import.meta.env.VITE_DOMAIN}/Homeloans`),
             Component: Home
            },
            {
             path: '/details/:id',
             element: <LoansDetails/>
            },
            // {
            //  path: '/AllLoans',
            //  element: 
            // },
        ],
    }
])
export default Router