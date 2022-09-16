import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "../styles/globalStyles";
import MainPage from "./MainPage/MainPage";
import ProductPage from "./ProductPage/ProductPage";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/:productId" element={<ProductPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}