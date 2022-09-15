
import styled from "styled-components";
import ProductCard from "../ProductCard/ProductCard";

export default function MainScreen({products}){
    return(
        <MainScreenWrapper>
            <ProductsWrapper>
                {products.map((product,index)=>{return(<ProductCard product={product} key={index}/>);})}
            </ProductsWrapper>
        </MainScreenWrapper>
    );
}

const ProductsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

const MainScreenWrapper = styled.div`
    background-color: rgb(202, 210, 197);
    margin: 8vh 0;
    min-height: 84vh;
`;