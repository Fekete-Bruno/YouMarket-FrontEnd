import styled from "styled-components";
import MainMenu from "../MainMenu/MainMenu";
import Title from "../Title/Title";

export default function Unauthorized (){
    return(
        <UnWrapper>
            <Title />
            <h1>Please log-in before accessing this page!</h1>
            <MainMenu />
        </UnWrapper>
    );
}

const UnWrapper = styled.div`
    height: 100vh;
    display: flex;
    color:rgb(47, 62, 70);
    background-color: rgb(202, 210, 197);
    align-items: center;
    justify-content:center;
    text-align: center;
`;
