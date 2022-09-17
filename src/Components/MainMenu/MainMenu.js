import { useState } from "react";
import styled from "styled-components";

export default function MainMenu(){
    const [selected,setSelected] = useState (false);

    return(
        <>
            <Sidebar selected={selected}>
            <h1>New features soon!</h1>
            </Sidebar>
            <MenuWrapper>
                <ion-icon name="person-circle-sharp"></ion-icon>

                <ion-icon name="reorder-three-sharp" onClick={()=>setSelected(!selected)}></ion-icon>

                <ion-icon name="cart-sharp"></ion-icon>
            </MenuWrapper>
        </>
    );
}
const Sidebar = styled.div`
    position: fixed;
    left: 0;
    bottom: 8vh;
    text-align: center;
    height: ${(props)=>props.selected?"0":"22vh"};
    width: 100vw;
    background-color: rgba(47, 62, 70,0.95);
    color: rgb(202, 210, 197);
    transition: all 500ms;
`;

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