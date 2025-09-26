import Item from "./item";
import ItemList from "./item-list";

export default function Page(){
    return(
        <main>
            <h1 className="text-5xl 
            m-5 
            text-white">Shopping List</h1>
            <ItemList />
        </main>
    )
}