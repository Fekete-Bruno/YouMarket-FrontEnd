import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../Context/UserContext";

export default function LowerBar({selected}){
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    return(
        <Lowerbar selected={selected}>
            <h1>{user?.name?`Hello, ${user.name}!`:"Hello!"}</h1>
            <h2>New features soon!</h2>
            <h2 onClick={()=>navigate("/")}>Return to the Store</h2>
        </Lowerbar>
    );
}

const Lowerbar = styled.div`
    position: fixed;
    left: 0;
    bottom: 8vh;
    text-align: center;
    height: ${(props)=>props.selected?"22vh":"0"};
    width: 100vw;
    background-color: rgba(47, 62, 70,0.95);
    color: rgb(202, 210, 197);
    transition: all 500ms;

    h2:hover{
        cursor: pointer;
        background-color: rgba(57, 72, 80,0.95);
    }
`;