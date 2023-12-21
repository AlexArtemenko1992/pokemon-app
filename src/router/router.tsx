import { createBrowserRouter } from "react-router-dom";
import { PokemonsPage, PokemonDescriptionPage } from "../pages";
import PokemonLayout from "../layout/PokemonLayout/PokemonLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <PokemonsPage />,
        index: true,
      },
    ],
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDescriptionPage />,
  },
]);

export default router;
