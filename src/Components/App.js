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

export default function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState({});

  return (
    <BrowserRouter>
      <GlobalStyle />
      <LoginContext.Provider value={{ token, setToken }}>
        <UserContext.Provider value={{ user, setUser }}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/:productId" element={<ProductPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/finalize-order" element={<FinalizeOrderPage />} />
            <Route path="/checkout:productId" element={<CheckoutPage />} />
          </Routes>
        </UserContext.Provider>
      </LoginContext.Provider>
    </BrowserRouter>
  );
}
