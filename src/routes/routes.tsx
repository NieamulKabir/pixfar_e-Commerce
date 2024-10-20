import App from "@/App";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        // },
        // {
        //   path: '/products',
        //   element: <Products />,
        // },
        // {
        //   path: '/product-details/:id',
        //   element: <ProductDetails />,
        // },
        // {
        //   path: '/checkout',
        //   element: (
        //     <PrivateRoute>
        //       <Checkout />
        //     </PrivateRoute>
        //   ),
      },
    ],
  },
  // {
  //   path: '/login',
  //   element: <Login />,
  // },
  // {
  //   path: '/signup',
  //   element: <Signup />,
  // },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
