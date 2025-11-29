"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import ItemList from "./item-list";
import MealIdeas from "./meal-ideas";
import NewItem from "./new-item";
import { useUserAuth } from "../_utils/auth-context";
import { getItems, addItem } from "../_services/shopping-list-services";

export default function ShoppingListPage() {
    const { user } = useUserAuth();
    const router = useRouter();

    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState("");

useEffect(() => {
    if (user === null) {
        router.push("/week-10");
    }
}, [user, router]);

async function loadItems() {
    if (!user) return;
    try {
        const data = await getItems(user.uid);
        setItems(data);
    } catch (err) {
        console.error("Error loading items:", err);
    }
}

useEffect(() => {
    if (user) {
        loadItems();
    }
}, [user]);

function handleItemSelect(item) {
    const cleanName = item.name.split(",")[0].replace(/[^\w\s]/g, "").trim();
    setSelectedItemName(cleanName);}

async function handleAddItem(item) {
    try {
        const id = await addItem(user.uid, item);
        setItems((prev) => [...prev, { ...item, id }]);
    } catch (err) {
        console.error("Error adding item:", err);
    }
}

if (!user) {
    return null;
}

return (
    <main className="min-h-screen px-5 py-10">
        <h1 className="text-4xl font-bold mb-8">Shopping List</h1>
    <div className="grid md:grid-cols-[21.25rem_1fr] gap-6">
        <div className="w-[21.25rem] pl-[10px] space-y-10">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
    
        <div className="p-4 rounded bg-white shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Meal Ideas</h2>
            <MealIdeas ingredient={selectedItemName} />
        </div>

    </div>
    </main>
);

}
