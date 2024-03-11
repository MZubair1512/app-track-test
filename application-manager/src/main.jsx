import React from 'react'
import ReactDOM from 'react-dom/client'
import { Login,Register } from './pages';
import  Update  from './pages/Update';
import FOF from './pages/404';
import MainPage from './pages/MainPage';
import View from './pages/View';
import Add from './pages/Add';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Usercontext} from './contexts/Usercontext';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/",
    element: <MainPage/>,
  },
  {
    path: "/Main",
    element: <MainPage/>,
  },
  {
    path: "/View",
    element: <View/>,
  },
  {
    path: "/Update/:id",
    element: <Update/>,
  },
  {
    path: "/Add",
    element: <Add/>,
  },
  {
    path: "/*",
    element: <FOF/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Usercontext>
    <RouterProvider router={router} />
    <ToastContainer />
    </Usercontext>
  </React.StrictMode>,
)
