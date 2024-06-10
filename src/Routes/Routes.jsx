import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../layout/Main/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Notification from "../pages/Notification/Notification";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard/Dashboard";
import BookParcel from "../pages/Dashboard/BookParcel/BookParcel";
import Welcome from "../pages/Dashboard/Welcome/Welcome";
import MyParcel from "../pages/Dashboard/MyParcel/MyParcel";



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
      },
      {
        path: '/notification',
        element: <PrivateRoute>
          <Notification></Notification>
        </PrivateRoute>
      }
    ]
  },
  //dashboard
  {
    path: 'dashboard',
    element: <PrivateRoute>
      <Dashboard></Dashboard>
    </PrivateRoute>,
    children: [
      {
        index: true,
        element: <Welcome></Welcome>
      },
      {
        path: 'bookParcel',
        element: <BookParcel></BookParcel>
      },
      {
        path: 'myParcel',
        element: <MyParcel></MyParcel>
      }
    ]
  }
]);

export default router