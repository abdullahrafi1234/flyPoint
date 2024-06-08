import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
       {
        path: '/login',
        element: <Login></Login>
       },
       {
        path: '/signup',
        element: <Signup></Signup>
       }
      ]
    },
  ]);

  export default router