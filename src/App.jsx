import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import ErrorPage from './pages/ErrorPage'
import About from './pages/About.jsx'
import Booking from "./pages/Booking";
import Services from "./pages/Services";
import Root from "./pages/Root";
import Location from "./pages/Location.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "location",
        element: <Location />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
