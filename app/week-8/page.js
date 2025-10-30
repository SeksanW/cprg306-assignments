import Item from "./item";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";

export default function Page() {
    const [selectedItemName, setSelectedItemName] = useState("");
    
    function handleItemSelect(item) {
        let cleanName = item.name
            .split(",")[0]
            .trim()
            .replace(/[^\p{L}\p{N}\s]/gu, ""); 

    return(
        <main>
            <h1 className="text-4xl 
            font-bold
            flex 
            justify-center">Shopping List</h1>
            {}
            <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
                <div className="md:w-1/2">
                    <ItemList onItemSelect={handleItemSelect} /> {}
                </div>

                <div className="md:w-1/2">
                <MealIdeas ingredient={selectedItemName} /> {}
                </div>
            </div>
        <ItemList />
        </main>
    )
}
}