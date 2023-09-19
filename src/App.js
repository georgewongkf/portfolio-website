import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "experience", element: <Experience /> },
      { path: "skills", element: <Skills /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
