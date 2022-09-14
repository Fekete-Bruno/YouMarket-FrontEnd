
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

export default function MainScreen({products}){
    return(
        <MainScreenWrapper>
            {products.map((product)=>{return(<ProductCard product={product}/>);})}
        </MainScreenWrapper>
    );
}

const MainScreenWrapper = styled.div`  
    background-color: rgb(202, 210, 197);
    margin: 8vh 0;
    min-height: 84vh;
`;