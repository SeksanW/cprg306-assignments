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

    const groupedItems = itemsData.reduce((groups, item) => {
    const category = item.category;
    if (!groups[category]) groups[category] = [];
    groups[category].push(item);
    return groups; }, {});

    const sortedCategories = Object.keys(groupedItems).sort();

return (
    <div className="w-112 mx-auto space-y-6 mt-4">
    {}
    <div className="flex gap-2">
        <button
            onClick={() => setSortBy("name")}
            className={`px-2 py-4 rounded ${
            sortBy === "name" ? "font-bold bg-yellow-500 text-white" : "font-bold bg-gray-500 text-white"}`}
        >
        Sort by Name
        </button>

        <button
            onClick={() => setSortBy("category")}
            className={`px-2 py-4 rounded ${
            sortBy === "category" ? "font-bold bold bg-yellow-500 text-white" : "font-bold bg-gray-500 text-white"}`}
        >
        Sort by Category
        </button>

        <button
            onClick={() => setSortBy("group")}
            className={`px-2 py-4 rounded ${
            sortBy === "group" ? " font-bold bg-yellow-500 text-white" : "font-bold bg-gray-500 text-white"}`}
        >
        Group by Category
        </button>
    </div>

    {}
    {sortBy === "group" ? (
    <div className="space-y-4">
        {sortedCategories.map((category) => (
            <div
                key={category}
                className="bg-white rounded-xl p-4 shadow-md w-full"
            >
            <h2 className="text-xl font-bold capitalize text-blue-400 mb-3">
            {category}
            </h2>
        <ul className="space-y-2 flex flex-col items-center">
            {groupedItems[category]
            . sort((a, b) => a.name.localeCompare(b.name))
            .map((item) => (
            <Item key={item.id} item={item} />
            ))}
        </ul>
    </div>
    ))}
</div>
    ) : (
        <ul className="mx-auto space-y-2 w-fit">
            {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
            ))}
        </ul>
    )}
    </div>
    );
}
