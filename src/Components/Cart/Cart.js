import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { getCart, handleError } from "../../services/axiosHandler";
import CartItems from "../CartItems/CartItems";
import UserContext from "../Context/UserContext";
import MainMenu from "../MainMenu/MainMenu";
import Title from "../Title/Title";
import Unauthorized from "../Unauthorized/Unauthorized";

export default function Cart(){
    const [items,setItems] = useState([]);
    const mockItems = [{ _id: "63227435ead4582bb0785d5f", selected:"1", amount: "5", price: "89.99", image: "https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg", title: "The gravity of Us big sale", category: "books", description: "NICE BOOK, FOUND IT IN AN ALLEY!!" },
    { _id: "63227435ead4582bb0785d5f", selected:"1", amount: "5", price: "89.99", image: "https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg", title: "The gravity of Us big sale", category: "books", description: "NICE BOOK, FOUND IT IN AN ALLEY!!" },
    { _id: "63227435ead4582bb0785d5f", selected:"1", amount: "5", price: "89.99", image: "https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg", title: "The gravity of Us big sale", category: "books", description: "NICE BOOK, FOUND IT IN AN ALLEY!!" },
    { _id: "63227435ead4582bb0785d5f", selected:"1", amount: "5", price: "89.99", image: "https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg", title: "The gravity of Us big sale", category: "books", description: "NICE BOOK, FOUND IT IN AN ALLEY!!" },]
    const {user} = useContext(UserContext);
    console.log(user._id);

    useEffect(()=>{
        const request = getCart();
        request.then((res)=>setItems(res.data)).catch((error)=>handleError(error));
    },[])

    return(
        <>
        {
            user?
            <>
                <Title />
                <MainMenu />
                <CartWrapper>
                    <h1>Hello {user.name}</h1>
                    <h2>Your Cart</h2>
                    <CartItems items={mockItems} />
                </CartWrapper>
            </>:

            <Unauthorized />
        }
        </>
    );
}

const CartWrapper = styled.div`
    margin: 8vh 0;
    color:rgb(47, 62, 70);
    background-color: rgb(202, 210, 197);
    min-height: 84vh;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    
`;