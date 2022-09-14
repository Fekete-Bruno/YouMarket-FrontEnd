import MainMenu from "../MainMenu/MainMenu";
import MainScreen from "../MainScreen/MainScreen";
import Title from "../Title/Title";

export default function MainPage(){

    const mockProducts = [
        {amount:"5",price:"99.99",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us, new book 2022 big sale", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},
        
        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},
        
        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},
        
        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},

        {amount:"5",price:"120.54",image:"https://mckups.com/wp-content/uploads/2020/10/Book1-scaled.jpg",title:"The gravity of Us", category:"books", description:"New book, released in March 2022, and tells a beautiful love story"},
    ];

    return(
        <div>
            <Title />
            <MainScreen products={mockProducts}/>
            <MainMenu />
        </div>
    );
}