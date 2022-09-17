import styled from "styled-components";

export default function CartItems({items}){
    return(
        items.map((item,index)=>{return(
        <><Item key={index}>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
                <span>{item.price}</span>

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