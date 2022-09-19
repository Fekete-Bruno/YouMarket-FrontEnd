import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function CartItems({products}){
    const navigate = useNavigate();
    return(
        products.map((product,index)=>{return(
        <div key={index}>
            <Item onClick={()=>{navigate('/product/'+product._id)}}>
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