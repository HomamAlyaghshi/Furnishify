import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import ShopPage from "./components/ShopPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/productpage" element={<ProductPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/shoppage" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
