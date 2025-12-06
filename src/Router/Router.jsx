import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/Home/HomeLayout";
import Home from "../Pages/Home/Home";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
             index: true,
             Component: Home
            }
        ],
    }
])
export default Router