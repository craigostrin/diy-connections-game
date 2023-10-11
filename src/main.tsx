import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import ErrorPage from "./ErrorPage.tsx"
import Create from "./routes/Create.tsx"
import Play from "./routes/Play.tsx"
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
        element: <Play random />,
      },
      {
        path: "/create",
        element: <Create />,
      },
      {
        path: "/play/:puzzleId",
        element: <Play />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
