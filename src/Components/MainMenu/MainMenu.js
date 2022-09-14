import styled from "styled-components";

export default function MainMenu(){
    return(
        <MenuWrapper>
            <ion-icon name="reorder-three-sharp"></ion-icon>
            
            <ion-icon name="person-circle-sharp"></ion-icon>

            <ion-icon name="cart-sharp"></ion-icon>
        </MenuWrapper>
    );
}

const MenuWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 10vh;
    width: 100%;
    background-color: rgb(47, 62, 70);
    font-size: 5vh;
    color: rgb(202, 210, 197);
`;