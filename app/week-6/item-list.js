"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
    return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
    return a.category.localeCompare(b.category);
    }
});

return (
    <div className="flex flex-col items-center mt-6 space-y-4">
    {}
    <div className="flex gap-4">
        <button
            onClick={() => setSortBy("name")}
            className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-yellow-500 text-white" : "bg-gray-500"}`}
        >
        Sort by Name
        </button>

        <button
            onClick={() => setSortBy("category")}
            className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-yellow-500 text-white" : "bg-gray-500"}`}
        >
        Sort by Category
        </button>



        <button
            onClick={() => setSortBy("group")}
            className={`px-4 py-2 rounded ${
            sortBy === "group" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
        Group by Category
        </button>
    </div>

    {}
    {sortBy === "group" ? (
        <div className="space-y-6">
            {sortedCategories.map((category) => (
            <div key={category}>
                <h2 className="text-xl font-bold capitalize text-white">
                {category}
                </h2>
            <ul className="space-y-2">
                {groupedItems[category]
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((item) => (
                    <Item key={item.id} item={item} />
                    ))}
            </ul>
            </div>
            ))}
        </div>
    ) : (
        <ul className="mx-auto space-y-4 w-fit">
            {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
            ))}
        </ul>
    )}
    </div>
    );
}
