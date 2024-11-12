// import react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import layouts
import MainLayouts from "./layouts/MainLayouts";

// import pages
import { Blog, Home, Login, NotPage, Register } from "./pages";

// import sections
import { About, Contact, Project } from "./sections";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        { index: true, path: "/", element: <Home /> },
        { path: "/#about", element: <About /> },
        { path: "/#project", element: <Project /> },
        { path: "/blog", element: <Blog /> },
        { path: "/#skill", element: <About /> },
        { path: "/#contact", element: <Contact /> },
        { path: "*", element: <NotPage /> },
      ],
    },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
