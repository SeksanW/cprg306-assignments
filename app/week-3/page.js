import Item from "./item";
import ItemList from "./item-list";

export default function Page(){
    return(
        <main className="flex flex-col items-center">
            <h1 className="text-5xl 
            m-5 
            text-blue-400 ">Shopping List</h1>
            <ItemList />
        </main>
    )
}