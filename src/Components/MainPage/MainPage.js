import { useEffect, useState } from "react";
import { getProducts, handleError } from "../../services/axiosHandler";
import MainMenu from "../MainMenu/MainMenu";
import MainScreen from "../MainScreen/MainScreen";
import Title from "../Title/Title";

export default function MainPage(){
    const noProducts = [{price:"...",title:"Loading Products"}];
    const [products,setProducts] = useState(noProducts);
    useEffect(()=>{
        const request = getProducts();
        request.then((res)=>setProducts(res.data)).catch((err)=>{handleError(err)});
    },[]);

    return(
        <div>
            <Title />
            <MainScreen products={products}/>
            <MainMenu />
        </div>
    );
}