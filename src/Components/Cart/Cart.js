import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCart, handleError } from "../../services/axiosHandler";
import CartItems from "../CartItems/CartItems";
import UserContext from "../Context/UserContext";
import MainMenu from "../MainMenu/MainMenu";
import Title from "../Title/Title";
import Unauthorized from "../Unauthorized/Unauthorized";

export default function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const { user } = useContext(UserContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const request = getCart();
    request
      .then((res) => setItems(res.data))
      .catch((error) => handleError(error));
  }, []);

  useEffect(() => {
    let sum = 0;
    let arr = [];
    items.map((item) => arr.push(item.product));
    arr.map((product) => (product.selected = "1"));
    console.log(arr);
    setProducts([...arr]);
    items.map((item) => (sum += Number(item.product.price)));
    setTotal(sum.toFixed(2));
  }, [items]);

  return (
    <>
      {user ? (
        <>
          <Title />
          <MainMenu />
          <CartWrapper>
            <h1>Hello {user.name}</h1>
            {items.length === 0 ? (
              <h2>Your cart is empty, add something nice to buy!</h2>
            ) : (
              <>
                <h2>Your Cart</h2>
                <CartItems products={products} />
                <h3>Total: {total}</h3>
                <h3
                  onClick={() => navigate("/finalize-order", { state: total })}
                >
                  Checkout
                </h3>
              </>
            )}
          </CartWrapper>
        </>
      ) : (
        <Unauthorized />
      )}
    </>
  );
}

const CartWrapper = styled.div`
  margin: 8vh 0;
  color: rgb(47, 62, 70);
  background-color: rgb(202, 210, 197);
  min-height: 84vh;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  h3 {
    margin: 1vh;
  }
`;
