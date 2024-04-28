import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllArt from "../pages/AllArt";
import AddCraft from "../pages/AddCraft";
import ArtList from "../pages/ArtList";
import PrivateRoute from "./PrivateRoute";
import CraftDetails from "../pages/CraftDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5005/crafts"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "/allArtCraft",
        element: <AllArt />,
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoute>
            <AddCraft />
          </PrivateRoute>
        ),
      },
      {
        path: "/myArtCraft",
        element: (
          <PrivateRoute>
            <ArtList />
          </PrivateRoute>
        ),
      },
      {
        path: "/craftDetails/:id",
        element: (
          <PrivateRoute>
            <CraftDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5005/crafts/${params.id}`),
      },
    ],
  },
]);

export default router;
