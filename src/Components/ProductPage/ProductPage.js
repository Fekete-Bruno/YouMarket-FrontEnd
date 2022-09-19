import { useContext } from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { deleteCart, getCart, getProductById, handleError, postCart } from "../../services/axiosHandler";
import LoginContext from "../Context/LoginContext";
import MainMenu from "../MainMenu/MainMenu";
import Title from "../Title/Title";

export default function ProductPage(){
    const { productId } = useParams();
    const [product,setProduct] = useState("");
    const [inCart,setInCart] = useState(false);
    const {token} = useContext(LoginContext);

    useEffect(()=>{
        const request = getProductById(productId);
        request.then((response)=>setProduct(response.data)).catch((error)=>handleError(error));
        if(token){
            const requestCart = getCart();
            requestCart.then((res)=>isCart(res.data)).catch((error)=>handleError(error));
        }
    }
    ,[productId]);

    function isCart(cart){
        const findItem = (cart.find((el)=>{
            return(el?.product?._id === productId);
        }));
        if(findItem){
            setInCart(findItem._id);
        }
    }
    function handleCart (){
        if(!token){
            alert("Please log in before adding to cart!");
        }
        if(inCart){
            const request = deleteCart(inCart);
            request.then((res)=>setInCart(false)).catch((error)=>handleError(error));
        } else {
            const request = postCart(product);
            request.then((res)=>setInCart(true)).catch((error)=>handleError(error));
        }
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

            <CartButton inCart={inCart} onClick={handleCart}>{inCart?"- Remove from Cart":"+ Add to Cart"}</CartButton>
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
    background-color: ${(props)=>props.inCart?"rgba(137, 47, 31,0.9)":"rgba(47, 62, 70,0.9)"};
    color: rgb(202, 210, 197);
    &:hover{
        cursor: pointer;
        background-color: ${(props)=>props.inCart?"rgba(137, 47, 31,0.9)":"rgba(47, 62, 70,0.9)"};
    }
    &:active{
        transform: translateY(3px);
    }
`;