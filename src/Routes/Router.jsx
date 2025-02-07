import { createBrowserRouter } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import MainLayout from "../Layout/MainLayout";
import ChillGamer from "../ProjectDetails/ChillGamer";
import RideMate from "../ProjectDetails/RideMate";
import DiscountPro from "../ProjectDetails/DiscountPro";
import TrackSmart from "../ProjectDetails/TrackSmart";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar></Navbar>,
    children: [
      {
        path: "/",
        element: <MainLayout></MainLayout>,
      },
      {
        path: "trackSmart",
        element: <TrackSmart></TrackSmart>,
      },
      {
        path: "chillGamer",
        element: <ChillGamer></ChillGamer>,
      },
      {
        path: "rideMate",
        element: <RideMate></RideMate>,
      },
      {
        path: "discountPro",
        element: <DiscountPro></DiscountPro>,
      },
    ],
  },
]);

export default Router;
