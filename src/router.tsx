import {createBrowserRouter} from "react-router-dom";
import {App} from "./App.tsx";
import { PageBlackJack } from "./Application/Pages/PageBlackJack.tsx";
import { PageProfile } from "./Application/Pages/PageProfile.tsx";
import { PageRules } from "./Application/Pages/PageRules.tsx";
import { ApplicationLayout } from "./Application/Components/Layout.tsx"; 

export const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/blackjack",
        element: <PageBlackJack />,
      },
      {
        path: "/profile",
        element: <PageProfile />,
      },
      {
        path: "/rules",
        element: <PageRules />,
      },
      
    ],
  },
]);