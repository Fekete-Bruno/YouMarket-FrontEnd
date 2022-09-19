import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/globalStyles";
import MainPage from "./MainPage/MainPage";
import ProductPage from "./ProductPage/ProductPage";
import LoginPage from "./LoginPage/LoginPage";
import SignUpPage from "./SignUpPage/SignUpPage";
import CheckoutPage from "./Checkout/CheckoutPage";
import FinalizeOrderPage from "./Checkout/FinalizeOrderPage";
import UserContext from "./Context/UserContext";
import LoginContext from "./Context/LoginContext";
import { useState } from "react";
import Cart from "./Cart/Cart";

export default function App() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const localData = JSON.parse(localStorage.getItem("youmarket"));

  if (localData && !token && !user) {
    setToken(localData.token);
    setUser(localData.user);
  }

  return (
    <BrowserRouter>
      <GlobalStyle />
      <LoginContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/finalize-order" element={<FinalizeOrderPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </UserContext.Provider>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}
