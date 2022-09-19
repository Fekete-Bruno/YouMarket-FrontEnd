import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import LoginContext from "../Context/LoginContext";
import LowerBar from "../LowerBar/LowerBar";

export default function MainMenu(){
    const [selected,setSelected] = useState (false);
    const navigate = useNavigate();
    const {token} = useContext(LoginContext);

    function handleLogin(){
        if(!token){
            navigate("/login");
        }else{
            alert("Soon you will be able to access your profile and orders!");
        }
    }

    function handleCart (){
        if(!token){
            alert("Please log-in before accessing the cart!")
        } else {
            navigate(`/cart`);
        }
    }

    return(
        <>
            <LowerBar selected={selected}/>
            <MenuWrapper>
                <ion-icon name="person-circle-sharp" onClick={handleLogin}></ion-icon>

                <ion-icon name="reorder-three-sharp" onClick={()=>{setSelected(!selected)}}></ion-icon>

                <ion-icon name="cart-sharp" onClick={handleCart}></ion-icon>
            </MenuWrapper>
        </>
    );
}

const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 8vh;
    width: 100%;
    background-color: rgb(47, 62, 70);
    font-size: 4vh;
    color: rgb(202, 210, 197);
`;