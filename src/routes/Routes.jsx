import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LoginLayout from "../layouts/LoginLayout";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register";
import PrivetRoute from "./PrivetRoute";
import Terms from "../pages/Shared/Terms/Terms";
const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "terms",
        element: <Terms></Terms>,
      },
    ],
  },
  {
    path: "category",
    element: <Main></Main>,
    children: [
      // {
      //   path: "/",
      //   element: <Category></Category>,
      //   loader: ()=> fetch('https://the-news-dragon-sever-theta.vercel.app/news')
      // },
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-sever-theta.vercel.app/categories/${params.id}`
          ),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <PrivetRoute>
            <News></News>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://the-news-dragon-sever-theta.vercel.app/news/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
