import { createBrowserRouter } from "react-router-dom";
import { PokemonsPage, PokemonDescriptionPage } from "../pages";
import PokemonLayout from "../layout/PokemonLayout/PokemonLayout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/pokemon-app/",
    element: <PokemonLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/pokemon-app/",
        element: <PokemonsPage />,
        index: true,
      },
    ],
  },
  {
    path: "/pokemon-app/pokemon/:name",
    element: <PokemonDescriptionPage />,
  },
]);

export default router;
