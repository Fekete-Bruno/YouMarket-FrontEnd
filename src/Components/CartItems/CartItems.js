import styled from "styled-components";

export default function CartItems({items}){
    console.log(items);
    return(
        items.map((item,index)=>{return(
        <><Item key={index}>
                <img src={item.product.image} alt={item.product.title} />
                <span>{item.product.title}</span>
                <span>{item.product.price}</span>

            </Item><div>amount</div></>
        )})
    );
}

const Item = styled.div`
    display: flex;
    align-items: center;
    img{
        height: 10vh;
        width: 10vh;
        object-fit: cover;
    }
    &>*{
        margin:5px;
    }
`;