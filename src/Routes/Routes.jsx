import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Class from "../Pages/Home/Class/Class";
import Instructor from "../Pages/Home/instructor/Instructor";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import MySelectedClass from "../Pages/Dashboard/MySelectedClass/MySelectedClass";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Payment from "../Pages/Dashboard/Payment/Payment";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";
import AdminHome from "../Pages/Dashboard/Admin/AdminHome";
import ManageClass from "../Pages/Dashboard/Admin/ManageClass";
import InstructorHome from "../Pages/Dashboard/Instructor/InstructorHome";
import AddClass from "../Pages/Dashboard/Instructor/AddClass";
import MyClasses from "../Pages/Dashboard/Instructor/MyClasses";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: '/classes',
          element: <Class></Class>
        },
        {
          path: '/instructors',
          element: <Instructor></Instructor>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
        {
          path: '/dashboard/userHome',
          element: <UserHome></UserHome>
        },
        {
          path: '/dashboard/selectedClass',
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: '/dashboard/payment',
          element:<Payment></Payment>
        },
        {
          path: '/dashboard/adminHome',
          element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path: '/dashboard/manageUsers',
          element: <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path: '/dashboard/manageClass',
          element: <AdminRoute><ManageClass></ManageClass></AdminRoute>
        },
        {
          path: '/dashboard/instructorHome',
          element: <InstructorHome></InstructorHome>
        },
        {
          path: '/dashboard/addClass',
          element: <AddClass></AddClass>
        },
        {
          path: '/dashboard/myClasses',
          element: <MyClasses></MyClasses>
        }
      ]
    }
  ]);