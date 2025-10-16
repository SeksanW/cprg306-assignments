"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json";

export default function ItemList() {
    const [sortBy, setSortBy] = useState("name");

  // Copy the items so we don't modify the original array
    const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") {
    return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
    return a.category.localeCompare(b.category);
    }
});

return (
    <div className="flex flex-col items-center mt-6 space-y-4">
      {/* Sorting Buttons */}
    <div className="flex gap-4">
        <button
            onClick={() => setSortBy("name")}
            className={`px-4 py-2 rounded ${
            sortBy === "name" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
        Sort by Name
        </button>

        <button
            onClick={() => setSortBy("category")}
            className={`px-4 py-2 rounded ${
            sortBy === "category" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
        Sort by Category
        </button>
    </div>

      {/* Item List */}
        <ul className="mx-auto space-y-4 w-fit">
        {sortedItems.map((item) => (
            <Item key={item.id} item={item} />
        ))}
        </ul>
    </div>
);
}
