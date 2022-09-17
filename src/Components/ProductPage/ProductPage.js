import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getProductById, handleError } from "../../services/axiosHandler";
import MainMenu from "../MainMenu/MainMenu";
import Title from "../Title/Title";

export default function ProductPage(){
    const { productId } = useParams();
    const [product,setProduct] = useState("");
    console.log(product);

    useEffect(()=>{
        const request = getProductById(productId);
        request.then((response)=>setProduct(response.data)).catch((error)=>handleError(error));
    }
    ,[productId]);

    function addToCart (){
        console.log(product);
    }

    return(
        <>
        <Title />
        <ProductWrapper>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title} />
            <h2>Price: $ {product.price}</h2>
            <h3>Quantity: {product.amount}</h3>
            <p>{product.description}</p>

            <CartButton onClick={addToCart}>+ Add to Cart</CartButton>
        </ProductWrapper>
        <MainMenu />
        </>
    );
}

const ProductWrapper = styled.div`
    margin: 8vh 0;
    min-height: 84vh;
    background-color: rgb(202, 210, 197);
    color: rgb(47, 62, 70);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    img{
        height: 50vh;
        width: 50vh;
        object-fit: cover;
    }
`;

const CartButton = styled.div`
    margin-top: 1vh;
    padding:2vw;
    border-radius: 6px;
    background-color: rgb(47, 62, 70);
    color: rgb(202, 210, 197);
    &:hover{
        cursor: pointer;
        background-color: rgba(47, 62, 70,0.8);
    }
    &:active{
        transform: translateY(3px);
    }
`;