"use client";

import { useState } from "react"; 
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";

export default function Page() {
    const [selectedItemName, setSelectedItemName] = useState("");
    
    function handleItemSelect(item) {
        let cleanName = item.name
            .split(",")[0]
            .trim()
            .replace(/[^\p{L}\p{N}\s]/gu, ""); 
            setSelectedItemName(cleanName);
    }

return (
    <main className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
    <h1 className="text-4xl font-bold mb-6 text-blue-600">Shopping List</h1>

        <div className="flex flex-col md:flex-row gap-8 w-full max-w-5xl justify-center">
        <div className="flex-1 space-y-6">
        <div className="bg-white p-4 rounded-lg shadow-md">
            <NewItem />
        </div>

        <div className="bg-white p-4 rounded-lg shadow-md">
            <ItemList onItemSelect={handleItemSelect} /> 
        </div>
        </div>

        <div className="flex-1">
            <div className="bg-white p-4 rounded-lg shadow-md">
            <MealIdeas ingredient={selectedItemName} /> 
            </div>
        </div>
        </div>
    </main>
);
}
