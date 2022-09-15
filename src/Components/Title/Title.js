import styled from "styled-components";

export default function Title(){
    return(
        <TitleWrapper>
            YouMarket
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 8vh;
    width: 100%;
    background-color: rgb(47, 62, 70);
    font-size: 4vh;
    color: rgb(202, 210, 197);
`;