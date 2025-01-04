import { createBrowserRouter } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import MainLayout from "../Layout/MainLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/",
        element: <MainLayout></MainLayout>,
      },
    ],
  },
]);

export default Router;
