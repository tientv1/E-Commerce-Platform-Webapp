import { createBrowserRouter } from "react-router";
import Shop from "./Shop";
import ProductListPage from "./pages/ProductListPage/ProductListPage";
import ShopApplicationWrapper from "./pages/ShopApplicationWrapper";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShopApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/phone",
        element: <ProductListPage categoryType={"PHONE"} />,
      },
      {
        path: "/phone",
        element: <ProductListPage categoryType={"PHONE"} />,
      },
    ],
  },
]);

export default router;
