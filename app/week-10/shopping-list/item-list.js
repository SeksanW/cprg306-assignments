import { useState } from "react";
import Item from "./item";


export default function ItemList({ onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
    });

    return (
        <div>
            <div className=" mb-6">
                <span className="font-semibold mr-2">Sort by:</span>

                <button
                    onClick={() => setSortBy("name")}
                    className={`inline-block px-3 py-1 text-sm rounded-md font-medium transition  ${
                    sortBy === "name"
                        ? "bg-blue-500 text-white"
                        : "text-gray-800 hover:bg-gray-200 bg-gray-200"}`}
                    >Name
                </button>
                <button
                    onClick={() => setSortBy("category")}
                    className={`inline-block px-3 py-1 text-sm rounded-md font-medium transition ml-3 ${
                    sortBy === "category"
                        ? "bg-blue-500 text-white"
                        :  "text-gray-800 hover:bg-gray-200 bg-gray-200"}`}
                    >Category
                </button>
            </div>

            {sortedItems.length === 0 && (
                <p className="text-center text-gray-300">No meals found.</p>)}

            <ul className="flex flex-wrap justify-center gap-3">
                {sortedItems.map((item) => (
                <Item key={item.id} item={item} onSelect={onItemSelect} />))}
            </ul>
        </div>
    );
}
