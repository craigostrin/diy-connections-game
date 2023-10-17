import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./ErrorPage.tsx"
import Create from "./routes/Create.tsx"
import Play, { loader as puzzleLoader } from "./routes/Play.tsx"
import RootLayout from "./layouts/RootLayout.tsx"

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/play" />,
      },
      {
        path: "/play",
        element: <Play />,
        loader: puzzleLoader,
      },
      {
        path: "/play/:puzzleId",
        element: <Play />,
        loader: puzzleLoader,
      },
      {
        path: "/create",
        element: <Create />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
