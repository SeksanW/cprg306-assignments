"use client";

import { useState } from "react";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

export default function Page() {
const [selectedItemName, setSelectedItemName] = useState("");

function handleItemSelect(item) {
    const cleanName = item.name
        .split(",")[0]
        .trim()
        .replace(/[^\p{L}\p{N}\s]/gu, "");
    setSelectedItemName(cleanName);
}

return (
    <main className=" flex py-4">
        <div className="w-full max-w-5xl mx-auto ">
            <h1 className="font-bold mb-4 text-2xl">
                Shopping List + Meal Ideas
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 bor">
                <div className="space-y-6">
                    <div className="bg-white p-4 rounded-sm border-gray-300 border">
                        <NewItem />
                    </div>
                    <div className="space-y-6">
                        <ItemList onItemSelect={handleItemSelect} />
                    </div>
                </div>

                <div>
                    <div className="bg-white p-4 rounded">
                        <MealIdeas ingredient={selectedItemName} />
                    </div>
                </div>
            </div>
        </div>
    </main>
);
}