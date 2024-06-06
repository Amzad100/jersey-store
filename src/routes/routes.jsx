import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layout/MainLayout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import JerseyDetails from "../components/Home/JerseyDetails";
import DashboardLayout from "../components/Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoutes/PrivateRoutes";
import Dashboard from "../components/Dashboard/Dashboard";
import AllJersey from "../components/Dashboard/AllJersey";
import AddJersey from "../components/Dashboard/AddJersey";
import UpdateJersey from "../components/Dashboard/UpdateJersey";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("https://jersey-store-server.vercel.app/jerseys"),
      },
      {
        path: "/jerseys/:id",
        element: (
          <PrivateRoute>
            <JerseyDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jersey-store-server.vercel.app/jerseys/${params.id}`),
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "alljerseys",
        element: (
          <PrivateRoute>
            <AllJersey />
          </PrivateRoute>
        ),
      },
      {
        path: "addjersey",
        element: (
          <PrivateRoute>
            <AddJersey />
          </PrivateRoute>
        ),
      },
      {
        path: "alljerseys/updatejersey/:id",
        element: (
          <PrivateRoute>
            <UpdateJersey />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://jersey-store-server.vercel.app/jerseys/${params.id}`),
      },
    ],
  },
]);
