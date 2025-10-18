import { createBrowserRouter } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CollectionPage from "./pages/CollectionPage";
import ContactPage from "./pages/ContactPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import ProductPage from "./pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "collection", element: <CollectionPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "product/:id", element: <ProductPage /> },
      { path: "cart", element: <CartPage /> },
      { path: "login", element: <LoginPage /> },
      { path: "place-order", element: <PlaceOrderPage /> },
      { path: "orders", element: <OrdersPage /> },
    ],
  },
]);

export default router;
