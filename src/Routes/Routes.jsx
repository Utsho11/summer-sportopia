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
      element: <Dashboard></Dashboard>,
      children: [
        {
          path: '/dashboard',
          element: <UserHome></UserHome>
        },
        {
          path: '/dashboard/selectedClass',
          element: <MySelectedClass></MySelectedClass>
        },
        {
          path: '/dashboard/payment',
          element:<Payment></Payment>
        }
      ]
    }
  ]);