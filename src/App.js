import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import ShopPage from "./components/ShopPage";
import CartPage from "./components/CartPage";
import Test from "./Test";
import CheckoutDetails from "./CartPageComponents/CheckoutDetails";
import OrderComplete from "./CartPageComponents/OrderComplete";
import MyAccountPage from "./MyAccount/MyAccountPage";
import Address from "./MyAccount/Address";
import OrderHistory from "./MyAccount/OrderHistory";
import WishList from "./MyAccount/WishList";
import BlogPage from "./BlogComponents/BlogPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/shoppage" element={<ShopPage />} />
        <Route path="/cartpage" element={<CartPage />} />
        <Route path="/checkout-details" element={<CheckoutDetails />} />
        <Route path="/order-complete" element={<OrderComplete />} />
        <Route path="/test" element={<Test />} />
        <Route path="/accountpage" element={<MyAccountPage />} />
        <Route path="/account-addresspage" element={<Address />} />
        <Route path="/account-orderpage" element={<OrderHistory />} />
        <Route path="/address-wishlishpage" element={<WishList />} />
        <Route path="/blogpage" element={<BlogPage />} />
      </Routes>
    </Router>
  );
}

export default App;
