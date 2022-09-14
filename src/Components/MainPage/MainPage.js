import MainMenu from "../MainMenu/MainMenu";
import MainScreen from "../MainScreen/MainScreen";
import Title from "../Title/Title";

export default function MainPage(){
    return(
        <div>
            <Title />
            <MainScreen />
            <MainMenu />
        </div>
    );
}