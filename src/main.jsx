import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root";
import About from "./page/About";
import Blog from "./page/Blog";
import Contact from "./page/Contact";
import Home from "./page/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/about",
        element: <About/> ,
      },
      {
        path: "/blog",
        element: <Blog/> ,
      },
      {
        path: "/contact",
        element: <Contact/> ,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
