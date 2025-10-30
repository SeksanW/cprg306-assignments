"use client";

import { useState } from "react";

export default function NewItem() {
const [name, setName] = useState("");
const [quantity, setQuantity] = useState(1);
const [category, setCategory] = useState("produce");

function handleSubmit(e) {
    e.preventDefault();
    console.log({ name, quantity, category });
}

return (
    <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-2 bg-white p-4 rounded-xl shadow-md" 
    >
    <h2 className="text-xl font-bold text-blue-500 mb-1">Add Item</h2> {}
    <input
        type="text"
        placeholder="Item name"
        className="border p-2 rounded"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
    />
    <input
        type="number"
        min="1"
        className="border p-2 rounded"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
    />
    <select
        className="border p-2 rounded"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
    >
        <option value="produce">Produce</option>
        <option value="dairy">Dairy</option>
        <option value="meat">Meat</option>
        <option value="bakery">Bakery</option>
        <option value="canned goods">Canned Goods</option>
        <option value="dry goods">Dry Goods</option>
        <option value="household">Household</option>
    </select>
    {}
    <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
    >
        Add
    </button>
    </form>
);
}