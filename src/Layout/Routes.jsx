import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import PagesRead from "../Pages/PagesRead/PagesRead";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/bookList",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/readPages",
        element: <PagesRead></PagesRead>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
