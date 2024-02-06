import { RootLayout } from "@layout/index";
import {
  ErrorPage,
  HomePage,
  CardPage,
  ChatPage,
  CreateCardPage
} from "@pages/index";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "@/assets/styles/global.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "card/:cardId",
        element: <CardPage />
      },
      {
        path: "card/create",
        element: <CreateCardPage />
      },
      {
        path: "chat",
        element: <ChatPage />
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
