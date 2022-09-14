import styled from "styled-components";

export default function ProductCard({product}){

    return(
        <ProductCardWrapper>
        {product.title}
        <img src={product.image} alt={product.title} />
        $ {product.price}
        </ProductCardWrapper>
    );
}

const ProductCardWrapper = styled.div`
    img{
        height: 45vw;
        width: 45vw;
        object-fit: cover;
        border-radius: 5px;
        margin: 1vh 0;
    }
    width: 45vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: rgba(255 , 255, 255  ,0.1);
    box-shadow: 5px 5px rgba(255 , 255, 255  ,0.15);
    margin: 1vh 0;
    border-radius: 10px;
    padding: 10px;
    text-align: center;
    color: rgb(53, 79, 82);

    &:hover{
        cursor: pointer;
        background-color: rgba(255 , 255, 255  ,0.5);
    }

    &:active{
        transform: translateY(3px);
    }
`;