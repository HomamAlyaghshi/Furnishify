import { React, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CheckoutDetails from "./CartPageComponents/CheckoutDetails";
import OrderComplete from "./CartPageComponents/OrderComplete";
import Address from "./MyAccount/Address";
import OrderHistory from "./MyAccount/OrderHistory";
import WishList from "./MyAccount/WishList";
import MyAccountPage from "./MyAccount/MyAccountPage";
import BlogPage from "./BlogComponents/BlogPage";

const SignUp = lazy(() => import("./components/SignUp"));
const SignIn = lazy(() => import("./components/SignIn"));
const HomePage = lazy(() => import("./components/HomePage"));
const ShopPage = lazy(() => import("./components/ShopPage"));
const ProductPage = lazy(() => import("./components/ProductPage"));
const CartPage = lazy(() => import("./components/CartPage"));
const ContactUs = lazy(() => import("./components/ContactUs"));

function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/productpage" element={<ProductPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/shoppage" element={<ShopPage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout-details" element={<CheckoutDetails />} />
          <Route path="/order-complete" element={<OrderComplete />} />
          <Route path="/accountpage" element={<MyAccountPage />} />
          <Route path="/account-addresspage" element={<Address />} />
          <Route path="/account-orderpage" element={<OrderHistory />} />
          <Route path="/address-wishlistpage" element={<WishList />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="/contactuspage" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
