import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from './pages/ErrorPage'
import Booking from "./pages/Booking";
import Services from "./pages/Services";
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage/>
  }, 
  {
    path: '/booking',
    element: <Booking/>
  },
  {
    path: '/services',
    element: <Services/>
  }
])

function App() {
  return <RouterProvider router={router}/>
}

export default App
