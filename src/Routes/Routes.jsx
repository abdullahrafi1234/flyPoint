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
import UpdateParcel from "../pages/Dashboard/UpdateParcel/UpdateParcel";
import UpdateProfile from "../pages/Dashboard/UpdateProfile/UpdateProfile";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";
import Statistics from "../pages/Dashboard/Admin/Statistics/Statistics";
import AllParcels from "../pages/Dashboard/Admin/AllParcels/AllParcels";
import AllDeliveryMan from "../pages/Dashboard/Admin/AllDeliveryMan/AllDeliveryMan";
import Payment from "../pages/Dashboard/Payment/Payment";
import AdminRoute from "./AdminRoute";
import MyDeliveryList from "../pages/Dashboard/DeliveryMan/MyDeliveryList/MyDeliveryList";
import MyReviews from "../pages/Dashboard/DeliveryMan/MyReviews/MyReviews";



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
        path: '',
        element: <Welcome></Welcome>
      },
      {
        path: 'bookParcel',
        element: <BookParcel></BookParcel>
      },
      {
        path: 'myParcel',
        element: <MyParcel></MyParcel>
      },
      {
        path: 'updateParcel/:id',
        element: <UpdateParcel></UpdateParcel>,
        loader: ({ params }) => fetch(`http://localhost:5000/booking/${params.id}`)
      },
      {
        path: 'profile',
        element: <UpdateProfile></UpdateProfile>
      },
      {
        path: 'statistics',
        element: <AdminRoute><Statistics></Statistics></AdminRoute>
      },
      {
        path: 'allParcels',
        element: <AllParcels></AllParcels>
      },

      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'allDeliveryMan',
        element: <AllDeliveryMan></AllDeliveryMan>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      //delivery man
      {
        path: 'myDeliveryList',
        element: <MyDeliveryList></MyDeliveryList>
      },
      {
        path: 'myReviews',
        element: <MyReviews></MyReviews>
      }
    ]
  }
]);

export default router