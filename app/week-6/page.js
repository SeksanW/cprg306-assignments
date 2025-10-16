import Item from "./item";
import ItemList from "./item-list";

export default function Page(){
    return(
        <main>
            <h1 className="text-4xl 
            font-bold
            flex 
            justify-center">Shopping List</h1>
            <ItemList />
        </main>
    )
}