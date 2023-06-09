import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import Main from "../Layouts/Main";
import Class from "../Pages/Home/Class/Class";
import Instructor from "../Pages/Home/instructor/Instructor";
import Login from "../Pages/login/Login";

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
          path: '/login',
          element: <Login></Login>
        }
      ]
    },
  ]);