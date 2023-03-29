import { createBrowserRouter } from "react-router-dom";
import Layout from '../layout/Layout'
import Comics from "../views/Comics";
import Home from '../views/Home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/comics',
        element: <Comics />
      }
    ]
  }
])

export default router