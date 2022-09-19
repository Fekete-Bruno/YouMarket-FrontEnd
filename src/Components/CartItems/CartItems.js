import styled from "styled-components";

export default function CartItems({products}){
    return(
        products.map((product,index)=>{return(
        <div key={index}>
            <Item>
                <img src={product.image} alt={product.title} />
                <span>{product.title}</span>
                <span>{product.price}</span>
            </Item> 
        </div>
        )})
    );
}

const Item = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1vh;
    height: 20vh;
    img{
        height: 15vh;
        width: 15vh;
        object-fit: cover;
    }
    &>*{
        margin:5px;
    }
`;