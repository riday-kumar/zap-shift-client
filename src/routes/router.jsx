import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Loading from "../components/Loading/Loading";
import Rider from "../pages/Rider/rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess/paymentsuccess";
import PaymentCancelled from "../pages/Dashboard/Payment/PaymentCancelled/PaymentCancelled";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRiders from "../pages/Dashboard/ApproveRiders/ApproveRiders";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loading></Loading>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "rider",
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },
      {
        path: "send-parcel",
        loader: () => fetch("/serviceCenter.json").then((res) => res.json()),
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "about",
        element: (
          <PrivateRoute>
            <AboutUs></AboutUs>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        Component: MyParcels,
      },
      {
        path: "payment/:parcelId",
        loader: (e) =>
          fetch(`http://localhost:3000/parcels/${e.params.parcelId}`).then(
            (res) => res.json(),
          ),
        Component: Payment,
      },
      {
        path: "payment-success",
        Component: PaymentSuccess,
      },
      {
        path: "payment-cancel",
        Component: PaymentCancelled,
      },
      {
        path: "payment-history",
        Component: PaymentHistory,
      },
      {
        path: "approve-riders",
        element: (
          <AdminRoute>
            <ApproveRiders></ApproveRiders>
          </AdminRoute>
        ),
      },
      {
        path: "users-management",
        element: (
          <AdminRoute>
            <UsersManagement></UsersManagement>
          </AdminRoute>
        ),
      },
    ],
  },
]);
