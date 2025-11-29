import { useState } from "react";
import Item from "./item";

export default function ItemList({ items = [], onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");
    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
    });

return (
    <div>
        <div className="mb-6 flex items-center gap-2">
            <span className="font-semibold mr-2">Sort by:</span>

            <button
                onClick={() => setSortBy("name")}
                className={`px-4 py-2 rounded border ${
                sortBy === "name"
                    ? "bg-orange-400 text-white"
                    : "bg-orange-700 text-white"
                }`}>Name
            </button>

            <button
                onClick={() => setSortBy("category")}
                className={`px-4 py-2 rounded border ${
                sortBy === "category"
                    ? "bg-orange-400 text-white"
                    : "bg-orange-700 text-white"
                }`}>Category
            </button>
        </div>

        {sortedItems.length === 0 && (
            <p className="text-center text-gray-300">No items found.</p>
        )}
        
        <ul className="flex flex-wrap justify-center gap-3">
        {sortedItems.map((item) => (
            <Item key={item.id} item={item} onSelect={onItemSelect} />
        ))}
        </ul>
    </div>
);
}
